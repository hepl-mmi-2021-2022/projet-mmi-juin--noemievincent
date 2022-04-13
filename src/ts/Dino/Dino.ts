import {Body} from "./Body";
import {Head} from "./Head";
import {Neck} from "./Neck";
import {settings} from "../settings";
import {Score} from "../Score";
import {Life} from "../Life";
import {NeckPieces} from "../NeckPieces";

export class Dino {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    public body: Body;
    public head: Head;
    public neck: Neck;
    public direction: string;
    public speed: number;
    private score: Score;
    private life: Life;
    private position: { x: number; y: number };
    public neckPieces: NeckPieces[];

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement, neckPieces: NeckPieces[]) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = sprite;
        this.neckPieces = neckPieces;
        this.position = {
            x: this.canvasElement.width / 2,
            y: this.canvasElement.height - (this.canvasElement.height * settings.limitLine.yRatio),
        }
        this.speed = settings.dino.xSpeed;
        this.direction = 'left';
        this.score = new Score(document.getElementById('score') as HTMLSpanElement);
        this.life = new Life(document.getElementById('life') as HTMLSpanElement);
        this.draw();
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        if (this.direction === 'right') {
            this.ctx.scale(-1, 1);
        }
        this.neck = new Neck(this.canvasElement, this.ctx, this.sprite);
        this.body = new Body(this.canvasElement, this.ctx, this.sprite);
        this.head = new Head(this.canvasElement, this.ctx, this.sprite);
        this.checkHit();
        this.ctx.restore();
    }

    update() {
        if (this.position.x > settings.neckPieces.x.min && this.direction === 'left') {
            this.position.x -= this.speed;
        }
        if (this.position.x < settings.neckPieces.x.max && this.direction === 'right') {
            this.position.x += this.speed;
        }
        this.draw();
    }

    checkHit() {
        this.neckPieces.forEach((neckPiece: NeckPieces) => {
            const bottomLeft = {
                x: neckPiece.x,
                y: Math.floor(neckPiece.y + neckPiece.height),
            }
            const bottomRight = {
                x: Math.floor(neckPiece.x + neckPiece.width),
                y: Math.floor(neckPiece.y + neckPiece.height),

            }
            const topLeft = {
                x: Math.floor(this.position.x + this.neck.x + (this.direction === 'right' ? -this.neck.width + 2 : 0)),
                y: Math.floor(this.position.y + this.neck.y),
            }
            const topRight = {
                x: Math.floor(this.position.x + (this.neck.x + (this.direction === 'right' ? 0 : this.neck.width - 2))),
                y: Math.floor(this.position.y + this.neck.y),
            }
            if ((bottomLeft.x > topLeft.x - 6) && (bottomRight.x < topRight.x + 6)) {
                console.log('OK X');
                if ((bottomLeft.y === topRight.y)) {
                    neckPiece.hasHit = true;
                    console.log('OK Y');
                }
            }
            if (neckPiece.hasHit) {
                this.body.y += settings.neckPieces.height;
            }
            this.body.update();
        })
    }
}
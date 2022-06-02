import {Body} from "./Body";
import {Head} from "./Head";
import {Neck} from "./Neck";
import {settings} from "../../settings";
import {Score} from "../Score";
import {Life} from "../Life";
import {FallingNeck} from "../FallingNeck";

export class Dino {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    public body: Body;
    public head: Head;
    public neck: Neck;
    public direction: string;
    private score: Score;
    private life: Life;
    private position: { x: number; y: number };
    public fallingNecks: FallingNeck[];
    private neckPieces: Neck[];
    public isMoving: Boolean;
    private speed: number;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement, fallingNecks: FallingNeck[]) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = sprite;
        this.fallingNecks = fallingNecks;
        this.neckPieces = [];
        this.position = {
            x: this.canvasElement.width / 2,
            y: this.canvasElement.height - (this.canvasElement.height * settings.limitLine.yRatio),
        }
        this.direction = 'left';
        this.speed = settings.dino.speed;
        this.score = new Score(document.getElementById('score') as HTMLSpanElement);
        this.life = new Life(document.getElementById('life') as HTMLSpanElement);
        this.draw();
    }

    draw() {
        this.ctx.save();
        this.moveX();
        this.ctx.translate(this.position.x, this.position.y);
        if (this.direction === 'right') {
            this.ctx.scale(-1, 1);
        }
        this.neck = new Neck(this.ctx, this.sprite);
        this.body = new Body(this.ctx, this.sprite);
        this.head = new Head(this.ctx, this.sprite);
        this.checkHit();
        this.ctx.restore();
    }

    moveX() {
        if (this.position.x > settings.fallingNecks.x.min && this.direction === 'left' && this.isMoving) {
            this.position.x -= this.speed;
        }
        if (this.position.x < settings.fallingNecks.x.max && this.direction === 'right' && this.isMoving) {
            this.position.x += this.speed;
        }
    }

    checkHit() {
        this.fallingNecks.forEach((fallingNeck: FallingNeck, index: number) => {
            const bottomLeft = {
                x: fallingNeck.x,
                y: Math.floor(fallingNeck.y + fallingNeck.height),
            }
            const bottomRight = {
                x: Math.floor(fallingNeck.x + fallingNeck.width),
                y: Math.floor(fallingNeck.y + fallingNeck.height),

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
                    fallingNeck.hasHit = true;
                    console.log('OK Y');
                }
            }
            if (fallingNeck.hasHit) {
                this.body.y += settings.fallingNecks.height;
                this.neckPieces.push(fallingNeck);
                //debugger;
                this.neckPieces.forEach((neck: Neck) => {
                    // neck.y = this.neck.y + this.neck.height;
                })
                this.body.update();
                //this.fallingNecks.splice(index, 1);
            }

            if (fallingNeck.isOutside) {
                this.fallingNecks.splice(index, 1);
            }
        })
    }
}
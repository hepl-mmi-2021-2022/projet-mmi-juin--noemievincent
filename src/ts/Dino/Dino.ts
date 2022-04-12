import {Body} from "./Body";
import {Head} from "./Head";
import {Neck} from "./Neck";
import {settings} from "../settings";

export class Dino {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    public body: Body;
    public head: Head;
    public neck: Neck;
    public x: number;
    public y: number;
    public direction: string;
    public speed: number;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = sprite;
        this.x = this.canvasElement.width / 2;
        this.y = this.canvasElement.height - (this.canvasElement.height * settings.limitLine.yRatio);
        this.speed = settings.dino.speed;
        this.direction = '';
        this.draw();
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        if (this.direction === 'right') {
            this.ctx.scale(-1, 1);
        }
        this.neck = new Neck(this.canvasElement, this.ctx, this.sprite);
        this.body = new Body(this.canvasElement, this.ctx, this.sprite);
        this.head = new Head(this.canvasElement, this.ctx, this.sprite);
        this.ctx.restore();
    }

    update() {
        if (this.x > settings.neckPieces.x.min && this.direction === 'left') {
            this.x -= this.speed;
        }
        if (this.x < settings.neckPieces.x.max && this.direction === 'right') {
            this.x += this.speed;
        }
        this.draw();
    }
}
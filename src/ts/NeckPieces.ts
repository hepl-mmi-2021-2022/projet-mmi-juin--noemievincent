import {settings} from "./settings";
import {random} from "./helpers/math";

export class NeckPieces {
    private readonly canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    public x: number;
    public y: number;
    private readonly width: number;
    private readonly height: number;
    public speed: number;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = sprite;
        this.width = settings.neckPieces.width;
        this.height = settings.neckPieces.height;
        this.speed = settings.neckPieces.speed;
        this.x = random(settings.neckPieces.x.min, settings.neckPieces.x.max) - this.width;
        this.y = random(-this.height/2, -canvasElement.height);
        this.draw();
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.neckPieces.sx,
            settings.neckPieces.sy,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }

    update() {
        this.y += this.speed;
        this.draw();
    }
}
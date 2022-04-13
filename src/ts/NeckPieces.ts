import {settings} from "./settings";
import {random} from "./helpers/math";

export class NeckPieces {
    private readonly canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    public x: number;
    public y: number;
    readonly width: number;
    readonly height: number;
    public speed: number;
    public hasHit: boolean;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = sprite;
        this.width = settings.neckPieces.width;
        this.height = settings.neckPieces.height;
        this.speed = settings.neckPieces.speed;
        this.hasHit = false;
        this.x = random(settings.neckPieces.x.min, settings.neckPieces.x.max) - this.width;
        this.y = random(-this.height/2, -canvasElement.height/2);
        // this.y = 0;
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
        if (this.hasHit) {
            // TODO
        }
        this.draw();
    }
}
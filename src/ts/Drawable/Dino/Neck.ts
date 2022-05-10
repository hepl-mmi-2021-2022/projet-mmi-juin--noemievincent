import {settings} from "../../settings";

export class Neck {
    private readonly canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    public x: number;
    public y: number;
    readonly width: number;
    readonly height: number;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = sprite;
        this.width = settings.neckPieces.width;
        this.height = settings.neckPieces.height;
        this.x = settings.neckPieces.sx;
        this.y = -this.height;
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
}
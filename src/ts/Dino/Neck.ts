import {settings} from "../settings";

export class Neck {
    private readonly canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    x: number;
    y: number;
    private readonly width: number;
    private readonly height: number;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = sprite;
        this.width = settings.neckPieces.width;
        this.height = settings.neckPieces.height;
        this.x = this.canvasElement.width / 2 + settings.neckPieces.sx;
        this.y = this.canvasElement.height - (this.canvasElement.height * settings.limitLine.yRatio) - this.height ;
        this.draw();
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.drawImage(
            this.sprite,
            settings.neckPieces.sx,
            settings.neckPieces.sy,
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height,
        );
        this.ctx.restore();
    }
}
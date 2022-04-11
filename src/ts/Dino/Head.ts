import {settings} from "../settings";

export class Head {
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
        this.width = settings.dino.head.width;
        this.height = settings.dino.head.height;
        this.x = this.canvasElement.width / 2 - this.width / 3;
        this.y = this.canvasElement.height - (this.canvasElement.height * settings.limitLine.yRatio) - this.height/2 - settings.neckPieces.height;
        this.draw();
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.drawImage(
            this.sprite,
            settings.dino.head.sx,
            settings.dino.head.sy,
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
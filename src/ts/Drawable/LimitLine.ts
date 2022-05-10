import {settings} from "../settings";

export class LimitLine {
    private readonly canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public x: number;
    public y: number;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.x = settings.limitLine.startPosition;
        this.y = this.canvasElement.height - (this.canvasElement.height * settings.limitLine.yRatio);
        this.draw();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = settings.limitLine.color;
        this.ctx.setLineDash([settings.limitLine.dashLength, settings.limitLine.dashGap]);
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.canvasElement.width - this.x, this.y);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}
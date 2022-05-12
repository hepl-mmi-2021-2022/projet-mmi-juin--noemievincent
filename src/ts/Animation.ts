import {FallingNeck} from "./Drawable/FallingNeck";
import {Canvas} from "./Drawable/Canvas";

export class Animation {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    public canvas: Canvas;
    private sprite: HTMLImageElement;
    private fallingNecks: FallingNeck[];

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.canvasElement = this.canvas.gameCanvasElement;
        this.ctx = this.canvas.gameCtx;
        this.sprite = this.canvas.sprite;
        this.fallingNecks = this.canvas.fallingNecks;
        this.animate();
    }

    animate() {
        window.requestAnimationFrame(() => {this.animate();})
        this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.canvas.dino.draw();
        this.fallingNecks.forEach((neckPiece: FallingNeck) => {
            neckPiece.update();
            // neckPiece.draw();
        })
    }
}
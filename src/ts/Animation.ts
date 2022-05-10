import {NeckPieces} from "./Drawable/NeckPieces";
import {Canvas} from "./Drawable/Canvas";

export class Animation {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    public canvas: Canvas;
    private sprite: HTMLImageElement;
    private neckPieces: NeckPieces[];

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.canvasElement = this.canvas.gameCanvasElement;
        this.ctx = this.canvas.gameCtx;
        this.sprite = this.canvas.sprite;
        this.neckPieces = this.canvas.neckPieces;
        this.animate();
    }

    animate() {
        window.requestAnimationFrame(() => {this.animate();})
        this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.canvas.dino.draw();
        this.neckPieces.forEach((neckPiece: NeckPieces) => {
            neckPiece.update();
            // neckPiece.draw();
        })
    }
}
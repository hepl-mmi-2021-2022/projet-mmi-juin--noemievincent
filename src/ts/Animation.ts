import {NeckPieces} from "./NeckPieces";
import {Canvas} from "./Canvas";

export class Animation {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    public canvas: Canvas;
    private sprite: HTMLImageElement;
    private neckPieces: NeckPieces[];

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.canvasElement = this.canvas.canvasElement;
        this.ctx = this.canvas.ctx;
        this.sprite = this.canvas.sprite;
        this.neckPieces = this.canvas.neckPieces;
        this.animate();
    }

    animate() {
        window.requestAnimationFrame(() => {this.animate();})
        this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.neckPieces.forEach((neckPiece: NeckPieces) => {
            neckPiece.update();
        })
        this.canvas.draw();
    }
}
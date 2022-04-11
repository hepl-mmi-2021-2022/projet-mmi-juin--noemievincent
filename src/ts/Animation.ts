import {NeckPieces} from "./NeckPieces";
import {Canvas} from "./Canvas";
import {settings} from "./settings";

export class Animation {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private canvas: Canvas;
    private sprite: HTMLImageElement;
    private neckPieces: NeckPieces[];

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, canvas: Canvas) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.canvas = canvas;
        this.sprite = this.canvas.sprite;
        this.neckPieces = this.canvas.neckPieces;
        this.animate();
    }

    animate() {
        window.requestAnimationFrame(() => {
            this.animate();
        })
    }
}
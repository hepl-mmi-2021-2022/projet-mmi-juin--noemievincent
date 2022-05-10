import {settings} from "../settings";
import {NeckPieces} from "./NeckPieces";
import {Dino} from "./Dino/Dino";
import {LimitLine} from "./LimitLine";

export class Canvas {
    public backgroundCanvasElement: HTMLCanvasElement;
    public backgroundCtx: CanvasRenderingContext2D;
    public gameCanvasElement: HTMLCanvasElement;
    public gameCtx: CanvasRenderingContext2D;
    public sprite: HTMLImageElement;
    private limitLine: LimitLine;
    public neckPieces: NeckPieces[];
    public dino: Dino;

    constructor(sprite: HTMLImageElement) {
        this.backgroundCanvasElement = document.getElementById(settings.canvas.background) as HTMLCanvasElement;
        this.backgroundCtx = this.backgroundCanvasElement.getContext(settings.canvas.CanvasRenderingContext) as CanvasRenderingContext2D;
        this.limitLine = new LimitLine(this.backgroundCanvasElement, this.backgroundCtx);
        this.gameCanvasElement = document.getElementById(settings.canvas.game) as HTMLCanvasElement;
        this.gameCtx = this.gameCanvasElement.getContext(settings.canvas.CanvasRenderingContext) as CanvasRenderingContext2D;
        this.sprite = sprite;
        this.neckPieces = [];
        this.draw();
    }

    draw() {
        this.dino = new Dino(this.gameCanvasElement, this.gameCtx, this.sprite, this.neckPieces);
        for (let i = 0; i < settings.neckPieces.maxCount; i++) {
           this.neckPieces.push(new NeckPieces(this.gameCanvasElement, this.gameCtx, this.sprite));
        }
    }
}
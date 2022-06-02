import {settings} from "../settings";
import {FallingNeck} from "./FallingNeck";
import {Dino} from "./Dino/Dino";
import {LimitLine} from "./LimitLine";
import {Speed} from "./Speed";

export class Canvas {
    public backgroundCanvasElement: HTMLCanvasElement;
    public backgroundCtx: CanvasRenderingContext2D;
    public gameCanvasElement: HTMLCanvasElement;
    public gameCtx: CanvasRenderingContext2D;
    public sprite: HTMLImageElement;
    private limitLine: LimitLine;
    public fallingNecks: FallingNeck[];
    public dino: Dino;
    public speed: Speed;
    private speedElt: HTMLSpanElement;
    private gameSpeed: number;

    constructor(sprite: HTMLImageElement) {
        this.backgroundCanvasElement = document.getElementById(settings.canvas.background) as HTMLCanvasElement;
        this.backgroundCtx = this.backgroundCanvasElement.getContext(settings.canvas.CanvasRenderingContext) as CanvasRenderingContext2D;
        this.limitLine = new LimitLine(this.backgroundCanvasElement, this.backgroundCtx);
        this.gameCanvasElement = document.getElementById(settings.canvas.game) as HTMLCanvasElement;
        this.gameCtx = this.gameCanvasElement.getContext(settings.canvas.CanvasRenderingContext) as CanvasRenderingContext2D;
        this.speedElt = document.getElementById('speed');
        this.sprite = sprite;
        this.fallingNecks = [];
        this.gameSpeed = settings.gameSpeed;
        this.draw();
    }

    draw() {
        this.dino = new Dino(this.gameCanvasElement, this.gameCtx, this.sprite, this.fallingNecks);
        for (let i = 0; i < settings.fallingNecks.maxCount; i++) {
           this.fallingNecks.push(new FallingNeck(this.gameCanvasElement, this.gameCtx, this.sprite, this.gameSpeed));
        }
        this.speed = new Speed(this.speedElt, this.gameSpeed);
    }
}
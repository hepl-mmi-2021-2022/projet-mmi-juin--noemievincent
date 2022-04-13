import {settings} from "./settings";
import {NeckPieces} from "./NeckPieces";
import {Dino} from "./Dino/Dino";
import {Score} from "./Score";
import {Life} from "./Life";

export class Canvas {
    public canvasElement: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    private limitLinePosition: { x: number; y: number };
    public sprite: HTMLImageElement;
    public neckPieces: NeckPieces[];
    public dino: Dino;

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d');
        this.sprite = new Image();
        this.sprite.src = 'src/img/sprite.png';
        this.limitLinePosition = {
            x: settings.limitLine.startPosition,
            y: this.canvasElement.height - (this.canvasElement.height * settings.limitLine.yRatio),
        }
        this.draw();
        this.neckPieces = [];
        for (let i = 0; i < settings.neckPieces.maxCount; i++) {
            this.neckPieces.push(new NeckPieces(this.canvasElement, this.ctx, this.sprite));
        }
        this.dino = new Dino(this.canvasElement, this.ctx, this.sprite, this.neckPieces);
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = settings.limitLine.color;
        this.ctx.setLineDash([settings.limitLine.dashLength, settings.limitLine.dashGap]);
        this.ctx.moveTo(this.limitLinePosition.x, this.limitLinePosition.y);
        this.ctx.lineTo(this.canvasElement.width - this.limitLinePosition.x, this.limitLinePosition.y);
        this.ctx.stroke();
    }
}
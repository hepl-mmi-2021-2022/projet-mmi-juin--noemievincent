import {settings} from "./settings";
import {Body} from "./Dino/Body";
import {Head} from "./Dino/Head";
import {Neck} from "./Dino/Neck";
import {NeckPieces} from "./NeckPieces";

export class Canvas {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private limitLinePosition: { x: number; y: number };
    public sprite: HTMLImageElement;
    private body: Body;
    private head: Head;
    private neck: Neck;
    public neckPieces: NeckPieces[];

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = new Image();
        this.sprite.src = 'src/img/sprite.png';
        this.limitLinePosition = {
            x: settings.limitLine.startPosition,
            y: this.canvasElement.height - (this.canvasElement.height * settings.limitLine.yRatio),
        }
        this.neckPieces = [];
        this.sprite.onload = () => {
            this.neck = new Neck(this.canvasElement, this.ctx, this.sprite);
            this.body = new Body(this.canvasElement, this.ctx, this.sprite);
            this.head = new Head(this.canvasElement, this.ctx, this.sprite);
            this.neckPieces.push(new NeckPieces(this.canvasElement, this.ctx, this.sprite));
        }
        this.draw();
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
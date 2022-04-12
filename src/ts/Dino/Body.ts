import {settings} from "../settings";

export class Body {
    private readonly canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    public x: number;
    public y: number;
    private readonly width: number;
    private readonly height: number;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = sprite;
        this.width = settings.dino.body.width;
        this.height = settings.dino.body.height;
        this.x = 0;
        this.y = -3;
        this.draw();
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.dino.body.sx,
            settings.dino.body.sy,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }
}
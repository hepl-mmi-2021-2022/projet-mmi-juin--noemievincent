import {settings} from "../../settings";

export class Neck {
    public ctx: CanvasRenderingContext2D;
    public readonly sprite: HTMLImageElement;
    public x: number;
    public y: number;
    readonly width: number;
    readonly height: number;

    constructor(ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        this.ctx = ctx;
        this.sprite = sprite;
        this.width = settings.fallingNecks.width;
        this.height = settings.fallingNecks.height;
        this.x = settings.fallingNecks.sx;
        this.y = -this.height;
        this.draw();
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.fallingNecks.sx,
            settings.fallingNecks.sy,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }
}
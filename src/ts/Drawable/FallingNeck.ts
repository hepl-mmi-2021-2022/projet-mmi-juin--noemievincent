import {settings} from "../settings";
import {random} from "../helpers/math";

export class FallingNeck {
    private readonly canvasElement: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public readonly sprite: HTMLImageElement;
    public x: number;
    public y: number;
    readonly width: number;
    readonly height: number;
    public hasHit: boolean;
    public isOutside: boolean;
    private gameSpeed: number;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement, gameSpeed: number) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = sprite;
        this.gameSpeed = gameSpeed;
        this.width = settings.fallingNecks.width;
        this.height = settings.fallingNecks.height;
        this.hasHit = false;
        this.isOutside = false;
        this.x = random(settings.fallingNecks.x.min, settings.fallingNecks.x.max) - this.width;
        this.y = random(-this.height / 2, -canvasElement.height / 2);
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

    update() {
        this.y += this.gameSpeed;
        if (this.hasHit) {
            //TODO : l'ajouter au cou du dino juste en dessous du cou précédent
        }
        if (this.y > this.canvasElement.height) {
            this.isOutside = true;
        }
        this.draw();
    }
}
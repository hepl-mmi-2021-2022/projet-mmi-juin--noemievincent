import {Animation} from "./Animation";
import {GameController} from "./GameController";
import {Canvas} from "./Canvas";

class Main {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvas: Canvas;
    private readonly animation: Animation;
    private game: GameController;

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d');
        this.canvas = new Canvas(this.canvasElement, this.ctx);
        this.animation = new Animation(this.canvasElement, this.ctx, this.canvas);
        // this.game = new GameController(this.animation);
    }
}

new Main();

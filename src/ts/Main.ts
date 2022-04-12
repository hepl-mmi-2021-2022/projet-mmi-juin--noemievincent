import {Animation} from "./Animation";
import {GameController} from "./GameController";
import {Canvas} from "./Canvas";

class Main {
    private readonly canvas: Canvas;
    private readonly animation: Animation;
    private game: GameController;

    constructor() {
        this.canvas = new Canvas();
        this.animation = new Animation(this.canvas);
        this.game = new GameController(this.animation, this.canvas.dino);
    }
}

new Main();

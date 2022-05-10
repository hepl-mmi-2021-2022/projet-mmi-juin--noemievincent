import {settings} from "./settings";
import {Animation} from "./Animation";
import {GameController} from "./GameController";
import {Canvas} from "./Drawable/Canvas";

class Main {
    private readonly sprite: HTMLImageElement;
    private canvas: Canvas;
    private animation: Animation;
    private game: GameController;

    constructor() {
        this.sprite = new Image();
        this.sprite.src = settings.spriteSrc;
        this.sprite.addEventListener('load', () => {
            this.canvas = new Canvas(this.sprite);
            this.animation = new Animation(this.canvas);
            this.game = new GameController(this.animation, this.canvas.dino);
        });
    }
}

new Main();

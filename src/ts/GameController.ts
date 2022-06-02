import {Animation} from "./Animation";
import {Dino} from "./Drawable/Dino/Dino";

export class GameController {
    private animation: Animation;
    private dino: Dino;

    constructor(animation: Animation, dino: Dino) {
        this.animation = animation;
        this.dino = dino;
        this.addEventListeners();
    }

    addEventListeners() {
        window.addEventListener('keydown', (key: KeyboardEvent) => {
            if (key.code === 'ArrowLeft') {
                this.dino.isMoving = true;
                this.dino.direction = 'left';
            } if (key.code === 'ArrowRight') {
                this.dino.isMoving = true;
                this.dino.direction = 'right';
            }
        })
        window.addEventListener('keyup', (key: KeyboardEvent) => {
            if (key.code === 'ArrowLeft') {
                this.dino.isMoving = false;
                // this.dino.direction = '';
            } if (key.code === 'ArrowRight') {
                this.dino.isMoving = false;
                // this.dino.direction = '';
            }
        })
    }
}
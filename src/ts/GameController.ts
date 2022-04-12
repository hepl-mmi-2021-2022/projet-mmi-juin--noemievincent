import {Animation} from "./Animation";
import {Dino} from "./Dino/Dino";

export class GameController {
    private isStart: boolean;
    private animation: Animation;
    private dino: Dino;

    constructor(animation: Animation, dino: Dino) {
        this.isStart = false;
        this.animation = animation;
        this.dino = dino;
        this.addEventListeners();
    }

    addEventListeners() {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                this.dino.direction = 'left';
                console.log(e.key);
            } if (e.key === 'ArrowRight') {
                this.dino.direction = 'right';
                console.log(e.key);
            }
            this.dino.update();
        })
    }
}
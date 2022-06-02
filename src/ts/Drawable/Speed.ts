import {settings} from "../settings";

export class Speed {
    private readonly speed: HTMLSpanElement;
    private gameSpeed: number;

    constructor(speed: HTMLSpanElement, gameSpeed: number) {
        this.speed = speed;
        this.gameSpeed = gameSpeed;
        this.draw();
    }

    draw() {
        this.speed.textContent = `${this.gameSpeed}`;
    }
}
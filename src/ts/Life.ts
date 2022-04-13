export class Life {
    private life: HTMLSpanElement;
    private lives: number;

    constructor(life: HTMLSpanElement) {
        this.life = life;
        this.lives = 2;
        this.draw();
    }

    draw() {
        this.life.textContent = `${this.lives}`;
    }

    updateLives() {
        this.lives--;
    }
}
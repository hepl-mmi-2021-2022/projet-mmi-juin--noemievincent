export class Score {
    private score: HTMLSpanElement;
    public scores: number;

    constructor(score: HTMLSpanElement) {
        this.score = score;
        this.scores = 0;
        this.draw();
    }

    draw() {
        this.score.textContent = `${this.scores}`;
    }

    updateScore() {
        this.scores++;
    }
}
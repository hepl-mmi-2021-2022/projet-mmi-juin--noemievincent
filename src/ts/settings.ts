export const settings = {
    spriteSrc: 'src/img/sprite.png',
    canvas: {
        background: 'background',
        game: 'game',
        CanvasRenderingContext: '2d'
    },
    limitLine: {
        yRatio: 1 / 3,
        dashLength: 4,
        dashGap: 7,
        color: '#6C756B',
        startPosition: 70,
    },
    neckPieces: {
        sx: 3,
        sy: 0,
        height: 26,
        width: 12,
        maxCount: 1,
        x: {min: 70, max: 210},
        speed: 1,
    },
    dino: {
        speed: 10,
        head: {
            sx: 22,
            sy: 0,
            width: 29,
            height: 23,
        },
        body: {
            sx: 0,
            sy: 25,
            width: 52,
            height: 72,
        }
    },
}
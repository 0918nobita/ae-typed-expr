type Coord = [number, number];

function recFunc(coord: Coord): Coord {
    return [coord[0] + 3, coord[1] + 1];
}

const currentFrame = timeToFrames(time);

let coord = value as Coord;

for (let i = 0; i <= currentFrame; i++) {
    coord = recFunc(coord);
}

coord;

function addCube(x, y, z, size) {
    const template = `
    <div class="cube" style="--size:${size}px;--x:${x}px;--y:${y}px;--z:${z}px">
        <div class="front"></div>
        <div class="left"></div>
        <div class="back"></div>            
        <div class="right"></div>
        <div class="top"></div>
        <div class="bottom"></div>
    </div>`;
    $(template).appendTo(".container");
}

function mengerSponge(x, y, z, size, iteration) {
    if (iteration <= 0) {
        addCube(x, y, z, size);
        return;
    }
    for (let i = -1; i <= +1; i++) {
        for (let j = -1; j <= +1; j++) {
            for (let k = -1; k <= +1; k++) {
                if (
                    (i != 0 && (j != 0 || k != 0)) ||
                    (j != 0 && (i != 0 || k != 0)) ||
                    (k != 0 && (j != 0 || i != 0))
                ) {
                    mengerSponge(
                        x + (i * size) / 3,
                        y + (j * size) / 3,
                        z + (k * size) / 3,
                        size / 3,
                        iteration - 1
                    );
                }
            }
        }
    }
}

for (let i = 0; i <= 2; i++) {
    setTimeout(() => {
        $(".cube").remove();
        mengerSponge(0, 0, 0, 400, i);
    }, 5000 * i);
}

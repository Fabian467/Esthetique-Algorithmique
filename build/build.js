var gui = new dat.GUI();
var params = {
    Ellipse_Size: 30,
    Vitesse: 0,
    Download_Image: function () { return save(); },
    Nombre: 0,
};
gui.add(params, "Download_Image");
gui.add(params, "Vitesse", 1, 15, 1);
gui.add(params, "Nombre", 0, 30, 1);
var img;
function draw() {
    translate(width / 2, height / 2);
    background('#EBEBEB');
    randomSeed(params.Random_Seed);
    for (var i = 0; i < params.Nombre; i++) {
        noStroke();
        fill(noise(i * 0.1 + frameCount * 0.01 * params.Vitesse) * 255, noise(i * 0.1 + 100 + frameCount * 0.01 * params.Vitesse) * 255, noise(i * 0.1 + 200 + frameCount * 0.01 * params.Vitesse) * 255);
        if (i * 20 < 600) {
            rect(-width / 3 + mouseX * 0.010 * i + i * 5.40, -height / 3 + 100 + mouseY * 0.010 * i + i * 5.40, 600 - i * 20, 600 - i * 20);
        }
    }
}
function setup() {
    p6_CreateCanvas();
    img = loadImage('C:/Users/FABIAN/Pictures/tex.jpg');
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map
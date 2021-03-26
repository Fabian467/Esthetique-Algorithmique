// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Ellipse_Size: 30,
    Vitesse : 0,
    Download_Image: () => save(),
    Nombre : 0,
}
gui.add(params, "Download_Image")
gui.add(params, "Vitesse",1,15,1)
gui.add(params, "Nombre",0,30,1)
let img

// -------------------
//       Drawing
// -------------------

function draw() {
    translate(width/2,height/2);
    background('#EBEBEB');
    randomSeed(params.Random_Seed);
    for (let i=0; i<params.Nombre; i++){
        noStroke();
        fill(noise(i*0.1+frameCount*0.01*params.Vitesse)*255,noise(i*0.1+100+frameCount*0.01*params.Vitesse)*255,noise(i*0.1+200+frameCount*0.01*params.Vitesse)*255);
        if(i*20 < 600){
            rect(-width/3+mouseX*0.010*i+i*5.40,-height/3+100+mouseY*0.010*i+i*5.40,600 - i*20,600 - i*20);
        }
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
    img = loadImage('C:/Users/FABIAN/Pictures/tex.jpg')
}

function windowResized() {
    p6_ResizeCanvas()
}



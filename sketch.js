var c1, c2,c3, a1, a2, b1,  b2, d1,  d2,e1, e2, f1, f2, g1, g2;

var as1, as2, bs1, bs2,  cs1 ,  cs2, ds1,ds2,  es1, es2,  fs1, fs2;

let c1s,  a1s, b1s,d1s,e1s,f1s, g1s,as1s,bs1s,ds1s,cs1s,es1s,fs1s;

  
  

function setup(){
  createCanvas(400,400);
  c1 = createSprite(15, 200, 20, 100);
c1.shapeColor = "silver";
 d1 = createSprite(35, 200, 20, 100);
d1.shapeColor = "white";
 e1 = createSprite(55, 200, 20, 100);
e1.shapeColor = "silver";
 f1 = createSprite(75, 200, 20, 100);
f1.shapeColor = "white";
 g1 = createSprite(95, 200, 20, 100);
g1.shapeColor = "silver";
 a1 = createSprite(115, 200, 20, 100);
a1.shapeColor = "white";
 b1 = createSprite(135, 200, 20, 100);
b1.shapeColor = "silver";
 c2 = createSprite(155, 200, 20, 100);
c2.shapeColor = "white";
 d2 = createSprite(175, 200, 20, 100);
d2.shapeColor = "silver";
 e2 = createSprite(195, 200, 20, 100);
e2.shapeColor = "white";
 f2 = createSprite(215, 200, 20, 100);
f2.shapeColor = "silver";
 g2 = createSprite(235, 200, 20, 100);
g2.shapeColor = "white";
 a2 = createSprite(255, 200, 20, 100);
a2.shapeColor = "silver";
 b2 = createSprite(275, 200, 20, 100);
b2.shapeColor = "white";
 c3 = createSprite(295, 200, 20,100);
c3.shapeColor = "silver";
 cs1 = createSprite(25, 176, 10, 50);
cs1.shapeColor = "black";
 es1 = createSprite(45, 176, 10, 50);
es1.shapeColor = "black";
 fs1 = createSprite(85, 176, 10, 50);
fs1.shapeColor = "black";
 as1 = createSprite(105, 176, 10, 50);
as1.shapeColor = "black";
 bs1 = createSprite(125, 176,10,50);
bs1.shapeColor = "black";
 cs2 = createSprite(165, 176, 10, 50);
cs2.shapeColor = "black";
 es2 = createSprite(185, 176, 10, 50);
es2.shapeColor = "black";
 fs2 = createSprite(225, 176, 10, 50);
fs2.shapeColor = "black";
 as2 = createSprite(245, 176, 10, 50);
as2.shapeColor = "black";
 bs2 = createSprite(265, 176,10,50);
bs2.shapeColor = "black";


  
  c1s=loadSound('piano_middle_C.mp3');
    a1s=loadSound('piano_A.mp3');
    b1s=loadSound('piano_B.mp3');
    d1s=loadSound('piano_D.mp3');
    e1s=loadSound('piano_E.mp3');
    f1s=loadSound('piano_F.mp3');
    g1s=loadSound('piano_G.mp3');
    
    as1s=loadSound('piano_A_sharp.mp3');
    bs1s=loadSound('piano_G_sharp.mp3');
    cs1s=loadSound('piano_C_sharp.mp3');
    ds1s=loadSound('piano_D_sharp.mp3');
    es1s=loadSound('piano_G_sharp.mp3');
    fs1s=loadSound('piano_F_sharp.mp3');
}
function draw() {
  background("white");
  
  if (mousePressedOver(c1) || (mousePressedOver(c2) || mousePressedOver(c3))) {
    c1s.play();
  }
  if (mousePressedOver(d1) || mousePressedOver(d2)) {
   d1s.play();
  }
  if (mousePressedOver(e1) || mousePressedOver(e2)) {
   e1s.play();
  }
  if (mousePressedOver(f1) || mousePressedOver(f2)) {
    f1s.play();
  }
  if (mousePressedOver(g1) || mousePressedOver(g2)) {
    g1s.play();
  }
  if (mousePressedOver(a1) || mousePressedOver(a2)) {
    a1s.play();
  }
  if (mousePressedOver(b1) || mousePressedOver(b2)) {
    b1s.play();
  }
  
  if (mousePressedOver(cs1) || mousePressedOver(cs2)) {
    cs1s.play();
  }
  if (mousePressedOver(es1) || mousePressedOver(es2)) {
    es1s.play();
  }
  if (mousePressedOver(fs1) || mousePressedOver(fs2)) {
    fs1s.play();
  }
  if (mousePressedOver(as1) || mousePressedOver(as2)) {
   as1s.play();
  }
  if (mousePressedOver(bs1) || mousePressedOver(bs2)) {
    bs1s.play();
  }
  
  
  drawSprites();
}

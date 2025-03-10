let pageTitle, pageText, myCanvas, link1, link2; 

function setup(){
 pageTitle = select("#id1")
 pageText = select("#id2")
  
  link1 = select("#link1");
  link2 = select("#link2");
  
  
  pageTitle.position(windowWidth/2 -100,25)
  pageText.position(windowWidth/2 -125,80)
  
  link1.position(windowWidth/2 -125,100);
  link2.position(windowWidth/2 -125,120);
  
  myCanvas = createCanvas(300,200);
  
  myCanvas.position( windowWidth/2 -140,100)

  
  setInterval(changeLoc, 1000);

}

let x =0, y = 0, yPos = 0;
function draw(){ 
  
  
  
  myCanvas.position( windowWidth/2 -140,yPos)
  background(255, 150, 0);
  triangle(x, y,x+10,y+30, x+20, y )
 
  
  if (y>height) y=0;
  if (x>width) x=0;
  
  if (yPos>windowHeight)  yPos = 0;
  
   y+= 0.5+random(-0.5,0.5);
   x+=0.5+random(-0.5,0.5);
  yPos++;
  
}

function changeLoc(){
  // print("hi")
  let col = color(random(255), random(255),random(255));
  
  link1.style('color', col)
  link2.position(windowWidth/2  -125 +random(-100,100),random(120,windowHeight-50))

}
function mousePressed(){
  //print(pageTitle)
}
class Flower{
  constructor(x, y){
    
    this.x = x
    this.y = y
    this.centerSize = random(20,60);
    this.centerCol = color(random(255),random(255),random(255))
    this.petalLength = random(20,80);
    this.petalWidth = random(10,40);
    this.numPetals = random(3,15);
    this.petalColor = color(random(255),random(255),random(255))
    
    this.vX = random(-5,5);
    this.vY = random(-5,5);
    this.rotation = 0;
    this.angularV = random(-5,5);
    
  }
  show(){
    
    push();
    translate(this.x, this.y)
    
    rotate(this.rotation)
       
    for(let i = 0; i<this.numPetals; i++){
      fill(this.petalColor);
      ellipse(this.centerSize/2 +this.petalLength/4, 0, this.petalLength, this.petalWidth)
      
      rotate(360/this.numPetals);  
    }
    
    
    fill(this.centerCol);
    ellipse(0, 0, this.centerSize);
    pop()
    
  }
  move(){
    this.x += this.vX;
    this.y += this.vY;
    this.rotation += this.angularV;
    
    if(this.x> width + this.petalLength+this.centerSize){
      this.x = 0 - this.petalLength- this.centerSize 
    }
    
    if(this.y> height + this.petalLength+this.centerSize){
      this.y = 0 - this.petalLength- this.centerSize 
    }
    
     if(this.y< - this.petalLength-this.centerSize){
      this.y = height + this.petalLength+this.centerSize
      
    }
    
       if(this.x< 0 - this.petalLength-this.centerSize){
      this.x= width + this.petalLength+this.centerSize
    }
    
    
  }
  
}

let flowers = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  
  for(let i = 0; i<10; i++){
    flowers[i] = new Flower(random(width), random(height));
  }
}

function draw() {
  background(220,10);
  
  
   for(let i = 0; i<flowers.length; i++){
    flowers[i].show();
    flowers[i].move();
  }
  filter(BLUR,1)
}

function mouseDragged(){
  flowers.push(new Flower(mouseX, mouseY));
  //print(flowers)
}
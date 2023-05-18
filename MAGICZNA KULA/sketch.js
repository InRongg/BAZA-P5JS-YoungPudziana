function setup() {
  createCanvas(400, 400);
  fill(0,0,0)
  circle(200,200,375)
  fill("purple")
  triangle(200,69,329,303,86,303)
  fill(255,255,255)
  textAlign(CENTER,BASELINE)
}

function los(){
  prompt("ZADAJ PYTANIE MISTRZU!");
  var answ = 0;
  
  if(answ == 0){
  answ = floor(random(1,5));
  console.log(answ);
  }
  fill("purple")
  rect(156,180,95,40)
  fill("white")
  if(answ==1){
    text("No ba że tak!",200,200)
  }
  else if(answ==2){
    text("Można, można",200,200)
  }
  else if(answ==3){
    text("Nie wiem",200,200)
  }
  else if(answ==4){
    text("lepiej nie!",200,200)
  }
  else if(answ==5){
    text("NAPEWNO NIE!",200,200)
  }
}
function draw() {
}
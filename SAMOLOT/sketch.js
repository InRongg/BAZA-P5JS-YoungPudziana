let plane;
let niebo;
let poz_x = 60;
let poz_y = 80;
let speed_p = 4;
let serca = 3;
let gra= 0;
let niebo_offset = 0;
let punkty = 0;
let ballon;
let listaballon = [];
let bleble= 0;
let wry;
let baloniki = [];
// let ilosc = [];
function setup() {
  createCanvas(500, 400);
  plane = loadImage('IMGS/samolot.png');
  niebo = loadImage('IMGS/niebo.png');
  ballon= loadImage('IMGS/bomba.png');
    winning = createImg("IMGS/win.gif","WYGRANA");
  // start();
  // bombs();
  winning.hide();
}
function bg(){
  niebo_offset++;
  if(niebo_offset>500){
    niebo_offset= 0;
  }
  image(niebo,0-niebo_offset,0,500,400);
  image(niebo,500-niebo_offset,0,500,400);
}

function draw() {    
  // background("rgb(87,104,194)");
    bg();
  baloniki = [];
  for(let x in listaballon){
    if(listaballon[x]!== undefined){
      listaballon[x][0]-=3;
      image(ballon, listaballon[x][0], listaballon[x][1], 32, 32);
      if(listaballon[x][0]<-40){
        baloniki.push(x);
      }
      if(dist(listaballon[x][0],listaballon[x][1],poz_x,poz_y)<48){
        baloniki.push(x);
        if(gra == 1){
            punkty++;
            console.log(punkty);
        }
        else{
          punkty = 0;
        }
      }
        
    }
  }
  for(let x of baloniki){
    listaballon.splice(x,1);
  }
  
  image(plane,poz_x-37.5, poz_y-25,75,50);

  fill("rgb(211,128,128)");
  textSize(11);
  text("LICZBA PUNKTÓW: "+punkty,440,15)
  // KORDYNATY LOTU Y
  // textSize(14);
  // fill("black");
  // text(Math.floor(poz_y),poz_x,poz_y);
  if(gra == 1){
    // image(bomba,bomby_x[1]=bomby_x[1]-3,bomby_y[1],25,25);
    if(keyIsPressed && key == " "){
    
      poz_y= poz_y-speed_p;
    }
    else if(poz_y > 400){
      
      poz_y = 80;
      serca--;
      console.log("SERCA: "+serca);
      console.log("LATAJ WYŻEJ!");
      //Young Pudzian
    }
    else if(poz_y < 0){
      poz_y = 50;
      serca--;
      console.log("SERCA: "+serca);
      console.log("LATAJ NIŻEJ!");
    }
    else{
      poz_y=poz_y+speed_p*0.7;
    }
    //PRZEGRANA
    if(serca == 0){
      alert("YOU LOSE!~El Primo");
      gra= 0;
    }
    
    if(punkty > 20){
      wry = 1;
      // console.log("WRY "+wry);
    }
  //WINNING
  if(wry == 1 && punkty > 20){
    winning.position(0, 0);
    winning.show();
    bleble++;
    poz_y= 80;
    poz_x= 60;
    wry = 0;
  }
  if(bleble > 170){
    gra = 0;
    bleble = 0;
    punkty = 0;
    start();
    winning.hide();
        // setTimeout(() => {bleble = 1},3000);
    alert("UDAŁO CI SIĘ DOKONAĆ TO CO OD DAWNA PLANOWAŁEŚ. WYGRANA, GRATULUJE!");
  }
    

  }
  start();
}
function anim(){
  
}
function start(){
  if(gra == 0){
    //Young Pudzian
    textAlign(CENTER//Young Pudzian
);
      background("rgb(58,66,105)");
    textSize(28);
    fill("lime");
    stroke("black");
    text("GOTOWY DO STARTU?",250,75);
    fill('green');
    noStroke();
    textSize(18);
    text("Kliknij ENTER, aby zacząć!",250,175);
    fill('rgb(148,230,148)');
    noStroke();
    textSize(14);
    text("(latasz trzymając SPACJE)",250,200);
    noStroke();
    textSize(14);
    fill("yellow");
    text("(ZBIERZ PONAD 20 PUNKTÓW)",250,300);
    
    // console.log("DONE") ;
    if(gra == 0 && keyCode === ENTER){
    serca = 3;
        setInterval(gra = 1,100);
      punkty = 0
      
      setInterval(() =>{listaballon.push([width+50,random(30,375)])},1000);
    }
  }
}
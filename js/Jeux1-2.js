//////////////PART 1 GAUCHE   DEVINER UN CHIFFRE /////////////////////
function findTheNumber() {

  let randNumber = Math.round(Math.random() * 10); //Générateur de nombre aléatoire
  let reponse = prompt("Entrez un chiffre entre 0 et 10"); // la réponse donnée par l'utilisateur

  reponse = parseInt(reponse, 10); //transforme input en number
  let essais = 3; // le nombre d'essais total pour l'utilisateur

  while (reponse != randNumber && essais > 0) { //l"utilisateur ne donne pas la bonne réponse alors =>
    essais--; // on décrémente les essais

    if (reponse > randNumber) { // l'utilisateur a donné une réponse au dessus ou en dessous de la bonne réponse, on le lui indique
      alert("Moins");
    } else {
      alert("Plus");
    }

    if (essais > 0) { // l'utilisateur a encore un ou plusieurs essai(s)
      reponse = prompt("essaie encore, il te reste " + essais + " essais");
    }
  }

  ///// BONNE REPONSE OU ESSAIS EPUISES
  if (reponse == randNumber) { //l"utilisateur trouve la bonne réponse
    alert("Bravo tu as trouvé! C'était bien" + randNumber + " qu'il fallait trouver!");
  }

  if (reponse != randNumber && essais == 0) {  // l'utilisateur n'a pas trouvé la bonne réponse et les 3 essais ont été utilisés
    alert("Perdu! Tu as utilisé tes 3 essais");
  }
}

//////////////PART 1 DROITE  CASSE BRIQUES/////////////////////

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;

//BRIQUES
let brickRowCount = 3;
let brickColumnCount = 6;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 20;

//SCORE

let score = 0;

let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}


//RAQUETTE
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//FONCTIONS DE LA RAQUETTE

//REBONDS de la balle
function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}


//COLLISION DE LA BALLE AVEC LES BRIQUES
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
        if(b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}

//UPDATE THE SCORE DISPLAY
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8, 20);
}

//FONCTION DE LA BALLE
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}

//FONCTION DE LA RAQUETTE
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}


//FONCTION DES BRIQUES
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
          let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
          let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
          ctx.closePath();
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  collisionDetection();
  drawBricks();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  }
  else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      /*
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval); // Needed for Chrome to end game
      */

    }
  }

  if (rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  }
  else if (leftPressed) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }

  x += dx;
  y += dy;
}

interval = setInterval(draw, 10);
import React, { useEffect, useRef } from "react";
import playerImg from "../../assets/images/monkey.png";
import hurdleImg from "../../assets/images/mushroom.png";
import fruitImg from "../../assets/images/banana.png";
import bgImg from "../../assets/images/forest.jpg";
import jumpSoundFile from "../../assets/audio/jump-sound.mp3";
import collectSoundFile from "../../assets/audio/collect-sound.mp3";
import gameOverSoundFile from "../../assets/audio/gameover-sound.mp3";

function SpriteGame() {
  const canvasRef = useRef(null);
  let frameCount=0;
  let highScore = parseInt(localStorage.getItem("highScore")) || 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth*0.98;
    canvas.height = parent.clientHeight;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    const monkeyHeight = h * 0.15;
    const monkeyWidth = w * 0.04;

    // images and sounds
    const playerSprite = new Image();
    playerSprite.src = playerImg;
    const hurdleSprite = new Image();
    hurdleSprite.src = hurdleImg;
    const fruitSprite = new Image();
    fruitSprite.src = fruitImg;
    const bgSprite = new Image();
    bgSprite.src = bgImg;

    
    const jumpSound = new Audio(jumpSoundFile);
    const collectSound = new Audio(collectSoundFile);
    const gameOverSound = new Audio(gameOverSoundFile);

    let gameState = "start";
    let score = 0;
    const keys = {};

    const initialPlayer = {
      width: monkeyWidth,
      height: monkeyHeight,
      x: 30,
      y: h - 80,
      verticalSpeed: 0,
      horizontalSpeed: 8,
      jumpPower: -12,
      gravity: 0.5,
    };

    let player = { ...initialPlayer };
    let hurdles = [];
    let fruits = [];
    let hurdleTimer = 0;
    let fruitTimer = 0;

    function resetGame() {
      if (score > highScore) {
        highScore = score;
        localStorage.setItem("highscore", highScore);
      }

      score = 0;
      player = { ...initialPlayer };
      hurdles = [];
      fruits = [];
      hurdleTimer = 0;
      fruitTimer = 0;
      gameState = "playing";
      gameLoop();
    }

    function spawn() {
      hurdleTimer++;
      fruitTimer++;

      if (hurdleTimer > Math.random() * 60 + 80) {
        hurdles.push({
          x: w,
          y: h - 50,
          width: 40,
          height: 50,
        });
        hurdleTimer = 0;
      }

      if (fruitTimer > Math.random() * 120 + 120) {
        fruits.push({
          x: w,
          y: h - (Math.random() * 20 + 110),
          width: 30,
          height: 30,
        });
        fruitTimer = 0;
      }
    }

    function update() {
      player.verticalSpeed += player.gravity;
      player.y += player.verticalSpeed;

      if (player.y + player.height > h) {
        player.y = h - player.height;
        player.verticalSpeed = 0;
      }

      spawn();
      hurdles.forEach((h) => (h.x -= 5));
      fruits.forEach((f) => (f.x -= 5));

      // collisions with hurdles
      hurdles.forEach((h) => {
        if (
          player.x < h.x + h.width &&
          player.x + player.width > h.x &&
          player.y < h.y + h.height &&
          player.y + player.height > h.y
        ) {
          if (gameState !== "gameover") {
            gameState = "gameover";
            gameOverSound.currentTime = 0;
            gameOverSound.play();
          }
        }
      });

      // collisions with fruits
      fruits.forEach((f, i) => {
        if (
          player.x < f.x + f.width &&
          player.x + player.width > f.x &&
          player.y < f.y + f.height &&
          player.y + player.height > f.y
        ) {
          score += 30;
          fruits.splice(i, 1);
          collectSound.currentTime = 0;
          collectSound.play();
        }
      });

      hurdles = hurdles.filter((h) => h.x + h.width > 0);
      fruits = fruits.filter((f) => f.x + f.width > 0);
      frameCount++;


      if (frameCount % 10 === 0) {  
        score++;   // increase once every 10 frames 
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(bgSprite, 0, 0, w, h);

      if (gameState === "start") {
        ctx.fillStyle = "black";
        ctx.font = "32px Arial";
        ctx.fillText("Press SPACE to Start", w / 2 - 150, h / 2);
        ctx.font = "20px Arial";
        ctx.fillText("Controls: UP arrow key.", w / 2 - 160, h / 2 + 40);
        ctx.fillText("Collect bananas. Dodge mushrooms.", w / 2 - 170, h / 2 + 70);
        return;
      }

      ctx.drawImage(playerSprite, player.x, player.y, player.width, player.height);

      hurdles.forEach((h) => ctx.drawImage(hurdleSprite, h.x, h.y, h.width, h.height));
      
      fruits.forEach((f) => ctx.drawImage(fruitSprite, f.x, f.y, f.width, f.height));

      ctx.fillStyle = "white";
      ctx.font = "20px";
      ctx.fillText(`Score: ${score}`, 10, 20);
      ctx.fillText(`High Score: ${highScore}`, 10, 50);

      if (gameState === "gameover") {
        ctx.fillStyle = "black";
        ctx.font = "40px";
        ctx.fillText("Game Over", w / 2 - 100, h / 2);
        ctx.font = "20px";
        ctx.fillText("Press SPACE to restart", w / 2 - 120, h / 2 + 40);
      }
    }

    function gameLoop() {
      if (gameState === "playing") {
        update();
        draw();
        requestAnimationFrame(gameLoop);
      } else {
        draw();
      }
    }

    const keyDownHandler = (e) => {
      keys[e.key] = true;

      if (gameState === "start" && e.code === "Space") resetGame();
      if (gameState === "gameover" && e.code === "Space") resetGame();

      if (e.code === "ArrowUp" && player.y + player.height >= h) {
        player.verticalSpeed = player.jumpPower;
        jumpSound.currentTime = 0;
        jumpSound.play();
      }
    };

    const keyUpHandler = (e) => {
      keys[e.key] = false;
    };

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    draw();

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  return (
    <div className="container flex justify-center items-center m-2">
      <canvas ref={canvasRef} style={{ border: "2px solid black" }}></canvas>
    </div>

  );
}

export default SpriteGame;

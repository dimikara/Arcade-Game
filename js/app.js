var audio = new Audio;
var score = 3,
    lives = 5;


// Enemies the player must avoid
var Enemy = function(x, y, speed) {
    this.x = x,
    this.y = y,
    this.speed = speed;
    // The image/sprite for enemies
    this.sprite = 'images/enemy-bug.png';
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiply any movement by the dt parameter to ensure
    // the game runs at the same speed for all computers.
    if (this.x <= 505) {
        this.x += this.speed * dt;
    }
    else {
        this.x = 0;
    }

    // Handling of enemy collisions with the player
    if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
        player.collisionReset();
    };
};


// The player class
var Player = function(x, y) {
    this.x = x,
    this.y = y,
  // The image for the player
    this.sprite = 'images/char-princess-girl.png';
 };


// The modal class
var Modals = function() {
 };


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// The class requires an update(), render() and a handleInput() method.
Player.prototype.update = function() {
    //x axis boundaries
    if (this.x < 0) {
        this.x = 0;
    } else if (this.x > 400) {
        this.x = 400;
    }
    //y axis boundaries
    else if (this.y > 400) {
        this.y = 400;
    }
};


Player.prototype.collisionReset= function() {
    // Player starts from/returns to their original position
    this.x = 200;
    this.y = 400;
    // I used this method for playing audio because I was getting an exception
    // with the audio.src/audio.play()
    // See: https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
    var audio = document.getElementById("audio");
    audio.play();
    // Score & lifes
    score = score - 1;
    lives = lives - 1;
    if (score <= 0 || lives <= 0) {
        modals.lose();
    }
};


Player.prototype.reachWaterReset = function() {
    // Player starts from/returns to their original position
    this.x = 200;
    this.y = 400;
    // I used this method for playing audio because I was getting an exception
    // with the audio.src/audio.play()
    // See: https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
    var audio = document.getElementById("audio");
    audio.play();
    // Score & lifes
    score = score + 2;
    if (score >= 10 && lives >= 0) {
        modals.win();
    }
};


Player.prototype.restart = function() {
    // Player starts from/returns to their original position
    this.x = 200;
    this.y = 400;
    var audio = document.getElementById("audio");
    audio.play();
    // Resetting score & lifes
    score = 0;
    lives = 3;
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(key) {
    // The player moves to the left with the left arrow or "a" key.
    // 101 derives by the division of the 505 (width) to the 
    // number of tiles, i.e. 5.
    if ((key == 'left' || key == 'a') && this.x > 0) {
        this.x -= 101;
        audio.src = 'sounds/OldSchool2.wav';
        audio.play();
    };

    // The player moves to the right with the right arrow or "d" key.
    // 101 derives by the division of the 505 (width) to the 
    // number of tiles, i.e. 5.
    if ((key == 'right' || key == 'd') && this.x < 405) {
        this.x += 101;
        audio.src = 'sounds/OldSchool2.wav';
        audio.play();
    };

    // The player moves upwards with the up arrow or "w" key.
    // 86 derives by the division of the 606 (height) to the 
    // number of tiles, i.e. 6+1=7.
    if ((key == 'up' || key == 'w') && this.y > 0) {
        this.y -= 86;
        audio.src = 'sounds/OldSchool2.wav';
        audio.play();
    };

    // The player moves downwards with the down arrow or "s" key.
    // 86 derives by the division of the 606 (height) to the 
    // number of tiles, i.e. 6+1=7.
    if ((key == 'down' || key == 's') && this.y < 405) {
        this.y += 86;
        audio.src = 'sounds/OldSchool2.wav';
        audio.play();
    };

    // The game resets when the player presses the Esc key
    // http://www.javascripter.net/faq/keycodes.htm
    if (key == 'esc') {
        player.restart();
    };

    // When the player reaches the water, the character spirit goes 
    // to its starting position, i.e. (x, y) = (200, 400)
    if (this.y < 0) {
        player.reachWaterReset();
    };
};


Modals.prototype.win = function() {
    swal({
        title: "Congratulations!",
        text: "You got 10 points! You won!",
        icon: "success",
        button: "Great, thanks!",
    });
};


Modals.prototype.lose = function() {
    swal({
        title: "Sorry!",
        text: "You're out of lifes! You lost!",
        icon: "error",
        button: "OK :-(",
    });
};


// Instantiation of objects
// All the enemy objects go in the array allEnemies
var allEnemies = [],
    allEnemiesFixCoordinate = [62, 145, 230];
    allEnemiesFixCoordinate.forEach(function(coordinateY) {
        enemy = new Enemy(0, coordinateY, 150 + Math.floor(Math.random() * 250));
        allEnemies.push(enemy);
    });
    

// The player object goes in a variable called player
player = new Player(200, 400);

modals = new Modals;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. 
// Added the Esc key, which resets the game if pressed. 
// I also added the possibility for the player to use the a, d, s, w keys to move.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        27: 'esc',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        68: 'd',
        83: 's',
        87: 'w'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// Prevents the frustrating window scrolling up and down when the arrow keys are pressed.
// Original source: 
// https://github.com/ncaron/frontend-nanodegree-arcade-game/blob/master/js/app.js
// Found from: https://github.com/ricardobossan/arcade-game 
window.addEventListener("keydown", function(e) {
    if ([38, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
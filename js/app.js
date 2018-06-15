var audio = new Audio;


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
};


// These will be used for the collision detection function
var playerWidth = 75,
    playerHeight = 80;


// The player class
var Player = function(x, y) {
    this.x = x,
    this.y = y,
    this.w = playerWidth,
    this.h = playerHeight,
  // The image for the player
    this.sprite = 'images/char-princess-girl.png';
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


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(key) {
    // The player moves to the left with the left arrow key.
    // 101 derives by the division of the 505 (width) to the 
    // number of tiles, i.e. 5.
    if (key == 'left' && this.x > 0) {
        this.x -= 101;
        audio.src = 'sounds/OldSchool2.wav';
        audio.play();
    };

    // The player moves to the right with the right arrow key.
    // 101 derives by the division of the 505 (width) to the 
    // number of tiles, i.e. 5.
    if (key == 'right' && this.x < 405) {
        this.x += 101;
        audio.src = 'sounds/OldSchool2.wav';
        audio.play();
    };

    // The player moves upwards with the up arrow key.
    // 86 derives by the division of the 606 (height) to the 
    // number of tiles, i.e. 6+1=7.
    if (key == 'up' && this.y > 0) {
        this.y -= 86;
        audio.src = 'sounds/OldSchool2.wav';
        audio.play();
    };

    // The player moves downwards with the down arrow key.
    // 86 derives by the division of the 606 (height) to the 
    // number of tiles, i.e. 6+1=7.
    if (key == 'down' && this.y < 405) {
        this.y += 86;
        audio.src = 'sounds/OldSchool2.wav';
        audio.play();
    };

    // When the player reaches the water, the character spirit goes 
    // to its starting position, i.e. (x, y) = (200, 400)
    if (this.y < 0) {
        player.reset();
    };
};


Player.prototype.reset = function() {
    // Player starts from/returns to their original position
    this.x = 200;
    this.y = 400;
    // I used this method for playing audio because I was getting an exception
    // with the audio.src/audio.play()
    // See: https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
    var audio = document.getElementById("audio");
    audio.play();
};


// Instantiation of objects
// All the enemy objects go in the array allEnemies
var allEnemies = [],
    allEnemiesFixCoordinates = [62, 145, 230];
for (let allEnemiesFixCoordinate of allEnemiesFixCoordinates) {
    var enemy = new Enemy(0, allEnemiesFixCoordinate, 150 + Math.floor(Math.random() * 250))
    allEnemies.push(enemy);
};    


// The player object goes in a variable called player
player = new Player(200, 400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// Prevents the window from scrolling up and down when the arrow keys are pressed.
// Original source: https://github.com/ncaron/frontend-nanodegree-arcade-game/blob/master/js/app.js
// Found from: https://github.com/ricardobossan/arcade-game 
window.addEventListener("keydown", function(e) {
    if ([38, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
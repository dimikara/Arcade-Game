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
    this.x += dt * this.speed;
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// The player class
var Player = function(x, y) {
    this.x = x,
    this.y = y,
  // The image/sprite for our player
    this.sprite = 'images/char-princess-girl.png';
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
    // 101 is derived by the division of the 505 (width) to the 5 tiles.
    if (key == 'left' && this.x > 0) {
        this.x -= 101;
        audio.src = 'sounds/OldSchool2.wav';
        audio.play();
    };

    // The player moves to the right with the right arrow key.
    // Again, 101 is derived by the division of the 505 (width) to the 5 tiles.
    if (key == 'right' && this.x < 405) {
        this.x += 101;
        audio.src = 'sounds/OldSchool2.wav';
        audio.play();
    };

    // The player moves upwards with the up arrow key.
    // 86 is derived by the division of the 606 (height) to the 6+1 tiles.
    if (key == 'up' && this.y > 0) {
        this.y -= 86;
        audio.src = 'sounds/OldSchool2.wav';
        audio.play();
    };

    // The player moves downwards with the down arrow key.
    // Again, 86 is derived by the division of the 606 (height) to the 6+1 tiles.
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

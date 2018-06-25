Classic arcade game, a simplified frogger game
===============================


**INSTRUCTIONS**

- In order to play the game click this [link](https://dimikara.github.io/Arcade-Game/) or copy/clone all the files in your computer and double-click the *ìndex.html* file.
- The player can move left, right, up and down. The movement of the player is done with the four **arrows keys** (up, down, left, right) or the corresponding letters **W, S, A, D**. The enemies (bugs) move in varying speeds on the paved block portion of the scene.
- The player must reach the water **without colliding** into any of the bugs.
- The player starts with **3 points** & **5 lives**.
- Every time the player **collides** with a bug they **lose 1 point** and the character moves back to the start position. Every time the player reaches the **water** they **get 2 points** and again the character moves back to the start position.
- The game  is **won** when the player reaches the score of **10 points**.

___

**CHALLENGES/EXTRA KNOWLEDGE**

* **Adding classic arcade sounds**

The simple structure:

    audio.src = 'sounds/xxxxx.wav'; 
    audio.play();

worked great for the sound I wanted to play when an arrow key was pressed.
However, when I tried this same method with the reset() method, I kept getting the exception:

    Uncaught (in promise) DOMException: The play() request was interrupted by a new load request.

DevTools suggested to look at the [page](https://developers.google.com/web/updates/2017/06/play-request-was-interrupted) but it was not very helpful. 

I then found a different way to make the audio play without *promises*. I added a class *audio* in the index.html file with the sound I wanted to play and called the audio file with: 

    document.getElementById("audio")

and the issue was resolved.

* **The keyup function** 

I found a nice explanation on page http://www.javascripter.net/faq/keycodes.htm and I added succesfully the a, d, w, s keys, plus the Esc key to the allowedKeys variable. The player can now use the letter keyboard keys instead of the arrows and if they hit the Esc key, the game is restarted i.e. the character returns to their starting position and the scores & lives are reset.

___

**SCREENSHOTS**

* A screenshot of the game:

![Screenshot1](/images/Screenshot1.png "Instructions")

* Winning the game:

![Screenshot2](/images/Screenshot2.png "Winning the game")

* Losing the game:

![Screenshot3](/images/Screenshot3.png "Losing the game")

___

**FUTURE UPDATES**

- Modal in the beginning for the player to choose character
- Scoreboard with score & lifes left
- Timer
- Levels of difficulty
- More & better sounds
- Add instructions in the game via a modal/button
___

**CREDITS**

- **Sounds**

The Motion Monkey Free Retro Arcade Sounds Pack v1.0.5

All sounds are original recordings by The Motion Monkey.
Learn more at: http://www.themotionmonkey.co.uk/free-resources/retro-arcade-sounds/

- **Collision detection**

Some helpful links to understand the logic:

[2D collision detection](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)

[Collision Detection Using the Separating Axis Theorem](https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169)

[Collision detection](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) - Part of the tutorial "2D breakout game using pure JavaScript"

[Ben Cunnnigham](https://www.youtube.com/watch?v=7PHhRrjgTDA)'s YouTube video

- Code to **prevent window from rolling up and down**, from [ncaron](https://github.com/ncaron/frontend-nanodegree-arcade-game/blob/master/js/app.js)

Found via [ricardobossan](https://github.com/ricardobossan/arcade-game).

- **Font**: [Mina](https://fonts.googleapis.com/css?family=Mina).

- For the **modal in the end**, I used [Sweetalert](https://sweetalert.js.org/guides/).

___

**LICENSE**

[MIT](https://github.com/dimikara/Memory-Game/blob/master/LICENSE.md) License.

Copyright (c) 2018 Dimitra Karamperi

Classic arcade game, a simplified frogger game
===============================


**INSTRUCTIONS**

- In order to play the game click this [link](https://dimikara.github.io/Arcade-Game/) or double-click the *ìndex.html* file.
- The player can move left, right, up and down. The movement of the player is done with the four **arrows keys** (up, down, left, right). The enemies (bugs) move in varying speeds on the paved block portion of the scene. 
- The **goal** of the game is for the player to reach the water without colliding into any one of the bugs. 
- Once the player **collides** with a bug, the game is reset and the player moves back to the **start position**. Once the player reaches the **water** the game is **won**.


**NOTES**

* Adding classic arcade sounds

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

**FUTURE UPDATES**

- Modal in the beginning for the player to choose character
- Timer & Score
- Levels of difficulty
- More & better sounds


**CREDITS**

- Sounds:
The Motion Monkey Free Retro Arcade Sounds Pack v1.0.5
All sounds are original recordings by The Motion Monkey.
Learn more at: http://www.themotionmonkey.co.uk/free-resources/retro-arcade-sounds/

- Collision detection:
https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection

// Name: Andrea Morales Villegas
// Modification Titles: Create a new scrolling title sprite (1), display time remaining (3), 
// create a new title screen (3), create 4 new explosion sfxs & randomize them(3),
// create new enemy spaceship type (5), & implement mouse control (5)
// works cited: 
// https://youtu.be/156GXOSjJ4g?si=X5ebMaFNU3dDjABh - referenced for mouse movement
// explosion sfxs: roommate & myself
// menu image: atrellon3 space background: https://www.reddit.com/r/PixelArt/comments/f1wg26/space_background/
// Time Completion: 8 hours

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

//reserve keyboard
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
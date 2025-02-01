// Name: Andrea Morales Villegas
// Modification Titles: {Create a new scrolling title sprite (1), display time remaining (3), 
// create a new title screen (3), create 4 new explosion sfxs & randomize them(3),
// create new enemy spaceship type (5), & implement mouse control (5)}
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
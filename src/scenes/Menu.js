class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        // load images/title sprites
        this.load.image('rocket', './assets/rocket.png')
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('enemyship', './assets/enemyship.png') 
        this.load.image('sky', './assets/sky.png')
        this.load.image('background', './assets/background.png')
        

        // load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })

        // load audio
        this.load.audio('sfx-select', './assets/sfx-select.wav')
        this.load.audio('sfx-explosion', './assets/sfx-explosion.wav')
        this.load.audio('sfx-shot', './assets/sfx-shot.wav')
        // 4 new explosion sfxs
        this.load.audio('boooom', './assets/boooom.wav')
        this.load.audio('pagh', './assets/pagh.wav')
        this.load.audio('pcoo', './assets/pcoo.wav')
        this.load.audio('pshew', './assets/pshew.wav')
    }

    create() {
        // adding background image
        this.add.image(0, 0, 'background').setOrigin(0, 0).setDisplaySize(game.config.width, game.config.height);

        // animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', {
                start: 0,
                end: 9,
                first: 0
            }),
            frameRate: 30
        })

        let menuConfig2 = {
            fontFamily: 'Pixelify Sans',
            fontSize: '36px',
            backgroundColor: '#DC0423',
            color: '#4B0610',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let menuConfig = {
            fontFamily: 'Pixelify Sans',
            fontSize: '26px',
            //backgroundColor: '#FFFFFF',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // display menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig2).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Use ← → arrows to move & (F) to fire', menuConfig).setOrigin(0.5)
        //menuConfig.backgroundColor = '#00FF00'
        menuConfig.color = '#FFFFFF'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5)

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
              spaceshipSpeed: 3,
              gameTimer: 60000    
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }
    }
}
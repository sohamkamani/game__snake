import phaserImg from './assets/phaser.png'
import bodyTile from './assets/tile.png'

const Snake = require('./snake')

window.PIXI = require('phaser-ce/build/custom/pixi')
window.p2 = require('phaser-ce/build/custom/p2')
window.Phaser = require('phaser-ce/build/custom/phaser-split')

const speed = 4

window.onload = function () {
  const Phaser = window.Phaser
  //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
  //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
  //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

  let tile, snake
  console.log(phaserImg)
  function preload () {
    game.load.image('logo', './' + phaserImg)
    game.load.image('body_tile', `./${bodyTile}`)
  }

  function create () {
    tile = game.add.sprite(game.world.centerX, game.world.centerY, 'body_tile')
    tile.anchor.setTo(0.5, 0.5)
    snake = new Snake(15, 400, 40, 60)
    snake.render(game)
  }

  const snakeSpeed = 65
  const update = () => {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      tile.x -= speed
      snake.move(snakeSpeed, 0)
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      tile.x += speed
      snake.move(-snakeSpeed, 0)
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      snake.move(0, -snakeSpeed)
      tile.y += speed
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      tile.y -= speed
      snake.move(0, snakeSpeed)
    }
    snake.render(game)
  }
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload,
    update,
    create
  })
}

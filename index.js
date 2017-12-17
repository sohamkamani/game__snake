import phaserImg from './assets/phaser.png'
import bodyTile from './assets/tile.png'

const Snake = require('./snake')

window.PIXI = require('phaser-ce/build/custom/pixi')
window.p2 = require('phaser-ce/build/custom/p2')
window.Phaser = require('phaser-ce/build/custom/phaser-split')

const speed = 4
const tileSize = 44

window.onload = function () {
  const Phaser = window.Phaser

  let tile, snake
  console.log(phaserImg)
  function preload () {
    game.load.image('logo', './' + phaserImg)
    game.load.image('body_tile', `./${bodyTile}`)
  }

  function create () {
    tile = game.add.sprite(game.world.centerX, game.world.centerY, 'body_tile')
    tile.anchor.setTo(0.5, 0.5)
    snake = new Snake(game, 15, 400, 40, tileSize)
    snake.render(game)
  }

  const update = () => {
    snake.move()
    if(game.physics.arcade.collide(snake.head.sprite, tile)){
      console.log('collide!!')
      snake.addTile()
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      tile.x -= speed
      snake.moveLeft()
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      tile.x += speed
      snake.moveRight()
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      snake.moveDown()
      tile.y += speed
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      tile.y -= speed
      snake.moveUp()
    }
    snake.render(game)
  }

  const render = () => {
    game.debug.pointer(game.input.pointer1)
  }
  var game = new Phaser.Game('100', '100', Phaser.AUTO, '', {
    preload,
    update,
    create,
    render
  })
}

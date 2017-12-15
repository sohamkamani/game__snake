import phaserImg from './assets/phaser.png'
import bodyTile from './assets/tile.png'

window.PIXI = require('phaser-ce/build/custom/pixi')
window.p2 = require('phaser-ce/build/custom/p2')
window.Phaser = require('phaser-ce/build/custom/phaser-split')

const speed = 4

window.onload = function () {
  const Phaser = window.Phaser
  //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
  //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
  //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

  let tile
  console.log(phaserImg)
  function preload () {
    game.load.image('logo', './' + phaserImg)
    game.load.image('body_tile', `./${bodyTile}`)
  }

  function create () {
    tile = game.add.sprite(game.world.centerX, game.world.centerY, 'body_tile')
    tile.anchor.setTo(0.5, 0.5)
  }

  const update = () => {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      tile.x -= speed
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      tile.x += speed
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      tile.y += speed
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      tile.y -= speed
    }
  }
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload,
    update,
    create
  })
}

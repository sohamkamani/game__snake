import phaserImg from './assets/phaser.png'

window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
window.Phaser = require('phaser/build/custom/phaser-split')

window.onload = function () {
  const Phaser = window.Phaser
  //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
  //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
  //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create
  })
console.log(phaserImg)
  function preload () {
    game.load.image('logo', './' + phaserImg)
  }

  function create () {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo')
    logo.anchor.setTo(0.5, 0.5)
  }
}

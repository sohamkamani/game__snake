const Snake = function (snakeLength, x, y, tileSize) {
  this.tiles = []
  this.ticker = 0
  for (let i = 0; i < snakeLength; i += 1) {
    let tile = {
      x: x - i * tileSize,
      y: y,
      fresh: true
    }
    this.tiles.push(tile)
    if (i === 0) {
      this.head = tile
    }
  }
}

Snake.prototype.render = function (game) {
  this.tiles.forEach((tile) => {
    if (tile.fresh) {
      tile.sprite = game.add.sprite(tile.x, tile.y, 'body_tile')
      tile.fresh = false
      return
    }
    tile.sprite.x = tile.x
    tile.sprite.y = tile.y
  })
}

const tickSpeed = 30
Snake.prototype.tick = function(){
  this.ticker += 1
  if (this.ticker >= tickSpeed){
    this.ticker = 0
    return true
  }
  return false
}

Snake.prototype.move = function (speedX, speedY) {
  if (!this.tick()){
    return
  }
  let previous = this.head
  this.tiles.forEach((tile, i) => {
    const tmp = Object.assign({}, previous)
    previous = Object.assign({},tile)
    tile.x = tmp.x
    tile.y = tmp.y
  })
  this.head.x += speedX
  this.head.y += speedY
}

module.exports = Snake

const spaceBetweenTilesRatio = 0.1
const scale = 0.5

const directions = {
  L: 0,
  U: 1,
  R: 2,
  D: 3
}

const getVelocity = (speed) => ({
  0: { x: -speed, y: 0 },
  1: { x: 0, y: -speed },
  2: { x: speed, y: 0 },
  3: { x: 0, y: speed }
})

const Snake = function (game, snakeLength, x, y, tileSize) {
  const spaceBetweenTiles = tileSize * spaceBetweenTilesRatio
  this.speed = (tileSize + spaceBetweenTiles) * scale
  this.velocity = getVelocity(this.speed)
  this.tiles = []
  this.snake = game.add.group()
  this.ticker = 0
  this.direction = directions.R
  this.tileSpace = (tileSize + spaceBetweenTiles) * scale
  this.head = {
    x,
    y,
    fresh: true
  }
  this.tiles.push(this.head)
  for (let i = 0; i < snakeLength; i += 1) {
    this.addTile()
  }
}

Snake.prototype.addTile = function () {
  const lastTile = this.tiles[this.tiles.length - 1]
  const velocity = this.velocity[this.direction]
  let tile = {
    x: lastTile.x - velocity.x * this.tileSpace / this.speed,
    y: lastTile.y - velocity.y * this.tileSpace / this.speed,
    fresh: true
  }
  this.tiles.push(tile)
}

Snake.prototype.render = function (game) {
  this.tiles.forEach((tile) => {
    if (tile.fresh) {
      tile.sprite = this.snake.create(tile.x, tile.y, 'body_tile')
      tile.sprite.scale.set(scale)
      tile.fresh = false
      return
    }
    tile.sprite.x = tile.x
    tile.sprite.y = tile.y
  })
}

const tickSpeed = 30
Snake.prototype.tick = function () {
  this.ticker += 1
  if (this.ticker >= tickSpeed) {
    this.ticker = 0
    return true
  }
  return false
}

Snake.prototype.move = function () {
  if (!this.tick()) {
    return
  }
  let previous = this.head
  this.tiles.forEach((tile, i) => {
    const tmp = Object.assign({}, previous)
    previous = Object.assign({}, tile)
    tile.x = tmp.x
    tile.y = tmp.y
  })
  const velocity = this.velocity[this.direction]
  this.head.x += velocity.x
  this.head.y += velocity.y
}

Snake.prototype.moveDown = function () {
  if (this.direction === directions.D || this.direction === directions.U) {
    return
  }
  this.direction = directions.D
}
Snake.prototype.moveUp = function () {
  if (this.direction === directions.D || this.direction === directions.U) {
    return
  }
  this.direction = directions.U
}
Snake.prototype.moveLeft = function () {
  if (this.direction === directions.R || this.direction === directions.L) {
    return
  }
  this.direction = directions.L
}
Snake.prototype.moveRight = function () {
  if (this.direction === directions.R || this.direction === directions.L) {
    return
  }
  this.direction = directions.R
}

module.exports = Snake

const wallWidth = 10

const Border = function (x, y, w, h, tileSize) {
  Object.assign(this, { x, y, w, h, tileSize })
}

Border.prototype.render = function (game) {
  const heightScale = this.h / this.tileSize
  const widthScale = this.w / this.tileSize
  const wallWidthScale = wallWidth / this.tileSize
  this.group = game.add.group()
  this.group.enableBody = true
  this.borders = {}
  this.borders.left = this.group.create(this.x, this.y, 'body_tile')
  this.borders.left.scale.set(wallWidthScale, heightScale)
  this.borders.right = this.group.create(this.x + this.w - wallWidth, this.y, 'body_tile')
  this.borders.right.scale.set(wallWidthScale, heightScale)
  this.borders.top = this.group.create(this.x, this.y, 'body_tile')
  this.borders.top.scale.set(widthScale, wallWidthScale)
  game.physics.arcade.enable(this.borders.top)
  this.borders.bottom = this.group.create(this.x, this.y + this.h - wallWidth, 'body_tile')
  this.borders.bottom.scale.set(widthScale, wallWidthScale)
}

module.exports = Border

const IGNORE = /\.(md|markdown|example)$/

module.exports = function (fileName) {
  return (fileName.search(IGNORE) > 0)
}

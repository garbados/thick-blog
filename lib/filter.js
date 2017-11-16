const IGNORE = /\.(md|markdown|hbs|handlebars)$/

module.exports = function (fileName) {
  return (fileName.search(IGNORE) > 0)
}

require './f-editor.styl'

FEditor = require './views/editor.cjsx'

module?.exports = FEditor
if window?
  window.FEditor = FEditor
  window.addEventListener 'load', ->
    FEditor '.f-editor'

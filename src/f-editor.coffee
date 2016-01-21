require './test.cjsx'
require './f-editor.styl'
dom = require './dom.coffee'
parse = require './parse.coffee'
{ debounce } = require './timing.coffee'

FEditor = (editor) ->
  if typeof editor is 'string'
    console.log editor
    return (FEditor node for node in document.querySelectorAll editor)
  console.log 'Window loaded!', editor
  editor.contentEditable = yes
  editor.style.whiteSpace = 'pre-wrap'
  handle = debounce 200, -> parse editor
  dom.on editor, 'copy paste cut drop focus blur keypress input textInput DOMNodeInserted', handle

module?.exports = FEditor
if window?
  window.FEditor = FEditor
  window.addEventListener 'load', FEditor.bind null, '.f-editor'

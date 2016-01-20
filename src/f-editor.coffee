parse = require './parse.coffee'
#getSelectionCoords = require './getSelectionCoords.coffee'

debounce = (delay, fn) ->
  waiting = no
  last = 0
  (args...) ->
    unless waiting
      waiting = yes
      next = delay - (Date.now() - last)
      if next < 0 then next = 0
      timer = setTimeout =>
        waiting = no
        last = Date.now()
        fn.apply @, args
    timer

began = Date.now()
d = debounce 1000, -> console.log Date.now() - began
setInterval ->
  d()
  d()
  d()
  d()
  d()
  d()
  d()
  d()
  d()
, 30

FEditor = (editor) ->
  if typeof editor is 'string'
    console.log editor
    return (FEditor node for node in document.querySelectorAll editor)
  console.log 'Window loaded!', editor
  editor.contentEditable = yes
  editor.style.whiteSpace = 'pre-wrap'
  for type in ['copy', 'paste', 'cut', 'drop', 'focus', 'blur', 'keypress', 'input', 'textInput', 'DOMNodeInserted']
    do (type) ->
      editor.addEventListener type, ->
        console.log "#{type}"

module?.exports = FEditor
if window?
  window.FEditor = FEditor
  window.addEventListener 'load', FEditor.bind null, '.f-editor'

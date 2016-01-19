parse = require './parse.coffee'
#getSelectionCoords = require './getSelectionCoords.coffee'

FWysiwyg = (editor) ->
  if typeof node is 'string'
    return (FWysiwyg node for node in document.querySelectorAll editor)
  console.log 'Window loaded!', editor
  editor = document.querySelector '.fwysiwyg'
  editor.contentEditable = yes
  editor.style.whiteSpace = 'pre-wrap'
  for type in ['copy', 'paste', 'cut', 'drop', 'focus', 'blur', 'keypress', 'input', 'textInput', 'DOMNodeInserted']
    do (type) ->
      editor.addEventListener type, ->
        console.log "#{type}"

window?.addEventListener 'load', FWysiwyg.bind null, '.fwysiwyg'

React = dom = require '../dom.coffee'
parse = require '../parse.coffee'
{ debounce } = require '../timing.coffee'
Toolbar = require './toolbar.cjsx'

module.exports = class FEditor
  constructor: (editor) ->
    if typeof editor is 'string'
      return (FEditor node for node in document.querySelectorAll editor)
    if /\bf-editor-enhanced\b/.test editor?.className then return editor
    unless editor?.tagName is 'TEXTAREA'
      throw new Error 'Editor not of type <textarea />'
    dom.className editor, 'f-editor-enhanced'
    parent = editor.parentElement
    editable = <div contenteditable style={ whiteSpace: 'pre-wrap' } />
    editable.innerHTML = localStorage.editableHTML
    toolbar = Toolbar editor
    handle = debounce 300, ->
      console.log parse editable
      localStorage.editableHTML = editable.innerHTML
    dom.on editable, 'copy paste cut drop focus blur keypress input textInput DOMNodeInserted', handle

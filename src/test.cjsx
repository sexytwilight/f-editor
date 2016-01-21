React = dom = require './dom.coffee'
window.addEventListener 'load', ->
  document
    .querySelector 'body'
    .appendChild (
      <button something is here onclick={ -> dom.class document.querySelector('.f-editor'), '~show-tags' }> Click Me! </button>
    )

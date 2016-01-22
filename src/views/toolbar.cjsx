React = dom = require '../dom.coffee'
module.exports = class Toolbar
  constructor: (editorParent) ->
    @element = (
      <div fe-toolbar>
        <button ui-button ui-widget ui-state-default ui-corner-all
          onclick={ -> dom.className editorParent, '~fe-show-tags'}> Show Tags </button>
      </div>
    )

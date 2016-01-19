module.exports = (editor) ->
  editor
    .innerHTML
    .replace /<.*?>/g, (match) ->
      if /br/.test match then return '\n'
      ''

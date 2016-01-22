dom = module.exports = (element, options, children...) ->
  if typeof element is 'string'
    element = document.createElement element
  # unless element instanceof HTMLElement
  #   [options, children] = arguments
  #   element = document.createElement options.tagName
  for own attributeKey, attributeValue of options or {}
    if /^on/.test attributeKey
      dom.on element, attributeKey, attributeValue
    else if attributeKey is 'style'
      dom.style element, attributeValue
    else if attributeKey is 'className'
      dom.className element, attributeValue
    else
      if attributeValue is yes
        dom.className element, attributeKey
      element[attributeKey] = attributeValue
  if children.length
    for child in children
      element.appendChild (
        if typeof child is 'string'
          document.createTextNode child
        else
          child
      )
  element
Object.assign dom, {
  dom
  createElement: dom
  className: (element, classNames) ->
    classes = new Set element.className.split /\w+/g
    unless Array.isArray classNames
      classNames = classNames.split /\w+/g
    for className in classNames
      if /^!/.test className
        classes.remove className.substring 1
      else if /^~/.test className
        className = className.substring 1
        if classes.has className
          classes.remove className
        else
          classes.add className
      else
        classes.add className
    element.className = Array.from(classes).join ' '
  on: (element, types, handler) ->
    if typeof types is 'string'
      types = types.split /\s+/g
    for type in types when type
      if /^on/i.test type
        type = type.substring 2
      element.addEventListener type, handler
    ->
      dom.off element, types, handler
  off: (element, types, handler) ->
    if typeof types is 'string'
      types = types.split /\s+/g
    for type of types
      if /^on/i.test type
        type = type.substring 2
      element.removeEventListener type, handler
  style: (element, styles) ->
    if typeof styles is 'string'
      element.style = styles
    else
      for own style, value of styles
        element.style[style] = value
}

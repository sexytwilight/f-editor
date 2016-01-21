# [b]bold[/b] = bold
# [i]italic[/i] = italic
# [u]underline[/u] = underline
# [s]strikethrough[/s] = strikethrough
# [url=http://www.example.com]url tag[/url] = url tag
# [icon]lif[/icon] =
# [user]Lif[/user] = lif
# [session=Size Queens]ADH-727c0351b0d42f7c45aa[/session] = Size Queens
# [channel]Frontpage[/channel] = Frontpage
# [sub]sub tag[/sub] = sub tag
# [sup]sup tag[/sup] = sup tag
# [noparse][b]bbcode example[/b][/noparse] = [b]bbcode example[/b]

module.exports = (editor) ->
  console.log editor.textContent

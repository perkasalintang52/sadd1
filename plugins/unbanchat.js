let handler = async (m, { conn }) => {
  global.db.data.chats[m.chat].isBanned = false
  m.reply('*SAD BOTZ*')
}
handler.help = ['u']
handler.tags = ['owner']
handler.command = /^u|bannd$/i
handler.owner,handler.mods = true

module.exports = handler

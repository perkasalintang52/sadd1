let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('*SAD BOTZ*')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['b']
handler.tags = ['owner']
handler.command = /^b|bnc$/i
handler.owner = true

module.exports = handler

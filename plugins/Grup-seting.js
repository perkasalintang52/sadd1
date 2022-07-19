let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'b': 'not_announcement',
        't': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Format salah! Contoh :*
  *○ ${usedPrefix + command} tutup (t)*
  *○ ${usedPrefix + command} buka (b)*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['gc *b / t*']
handler.tags = ['group']
handler.command = /^(gc)$/i

handler.admin = true
handler.botAdmin = true

module.exports = handler

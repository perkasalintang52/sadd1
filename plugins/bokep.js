let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'βΏππ₯πππ§π’π₯β’πππ¦π©π² ππ¨π§\nSubscribe : https://www.youtube.com/channel/UCZoVmApPxtLYgUWwBD4nbCw', m)
}
handler.help = ['bkp']
handler.tags = ['asupan']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
handler.limit = 1
module.exports = handler



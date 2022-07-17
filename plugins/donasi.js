let handler = async m => m.reply(`
            .✵.SAWERIA.✵.

            https://saweria.co/joceylintangg
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

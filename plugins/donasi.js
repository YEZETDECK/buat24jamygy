let handler = async m => m.reply(`
╭─「 Donasi • Gopay 」
│ •  [0878-4413-3060]
│ •  [0878-4413-3060]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
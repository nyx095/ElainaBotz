let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  let neww = performance.now()
  await conn.send2Button(m.chat, 'Silahkan Pilih salah satu kak', 'Made By Johannes', 'Enable public', '#on public', 'Disable public', '#off public', { quoted: m, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply :{
mediaUrl: 'https://www.instagram.com/p/CEOnVoVAdXQ3V5KhCHm6fArQwc7msEgbbHuBjE0/?utm_medium=copy_link',
mediaType: 2,
title: 'silahkan pilih salah satu enable & disable',
body: 'Made By Johannes',
thumbnailUrl: 'https://i.ibb.co/HTR3r8P/307737381d69.jpg'
}}})  
}
handler.help = ['mode']
handler.tags = ['owner']

handler.owner = true

handler.command = /^(mode)$/i
module.exports = handler

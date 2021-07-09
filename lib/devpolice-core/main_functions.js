const { conf } = require('../../settings/config')
const { color } = require('../functions/default')
const moment = require('moment-timezone')

const verification_on_chatupdate = (mei) => {
    if (!mei.hasNewMessage) return false
    mei = JSON.parse(JSON.stringify(mei)).messages[0]
    if (!mei.message) return false
    if (mei.key && mei.key.remoteJid == 'status@broadcast') return false
    if (mei.key.fromMe) return false
    return mei
}

const console_colors = async (mei, client, body) => {
    const from = mei.key.remoteJid
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const isCmd = body.startsWith(conf.prefix)
    const isGroup = from.endsWith('@g.us')
    const sender = isGroup ? mei.participant : mei.key.remoteJid
    const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
    const groupName = isGroup ? groupMetadata.subject : ''

    const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
    if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
}

const isUrl = url => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }

const isNumber = n => { return !isNaN(parseFloat(n)) && isFinite(n); }

const verificar_pontos = async () => {
    let binario = Math.floor(Math.random() * (1 * 2) / 1)
    binario ? console.log('Salvo') : console.log('Banido')
}

module.exports = { verification_on_chatupdate, console_colors, isUrl, isNumber, verificar_pontos }
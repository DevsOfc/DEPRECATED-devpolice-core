const { MessageType } = require('@adiwajshing/baileys')
const { defaultfuncswitch } = require('./switchdefault')
const { text } = MessageType

const switchfunctions = async (mei, client, body, budy) => {

    const content = JSON.stringify(mei.message)
    const isFakenews = content.includes('forwardingScore')
    const from = mei.key.remoteJid
    const isGroup = from.endsWith('@g.us')
    const groupsender = isGroup ? mei.participant : mei.key.remoteJid

    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()

    const reply = async (texto) => {
        await client.sendMessage(from, texto, text, { quoted: mei })
    }

    switch (command) {
        case 'addpon':
            break
        case 'addm':
            break
        case 'ban':
            break
        case 'on':
        case 'off':
            break
        default:
            defaultfuncswitch(isGroup, budy, client, from, groupsender, mei, isFakenews, reply)
    }
}

module.exports = { switchfunctions }
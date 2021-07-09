const { MessageType } = require('@adiwajshing/baileys')
const { text } = MessageType
const { verificar_pontos } = require('../devpolice_core-core/main_functions')
const { linkdogrupo } = require('./functions')

const to_ban_some_how = async (usms, client, from, sender, mei, isFakenews) => {
    if (usms.length > 30000) {
        await verificar_pontos()
    } // -1000pts ban instantâneo

    if (isFakenews) {
        const fowardtimes = mei.message.extendedTextMessage.contextInfo.forwardingScore
        if (fowardtimes > 100) {
            await verificar_pontos() // -900pts
            client.sendMessage(from, 'A sua mensagem parece ser um tipo de corrente e você perdeu 900pts por isso. *NÃO COMPARTILHEM ISSO.*\n Essa mensagem foi encaminhada ' + fowardtimes + ' vezes', text, { quoted: mei })
        }
    }
}

const startsmsverification = async (budy, client, from, sender, mei, isFakenews, reply) => {
    let usms = budy.slice(0).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    to_ban_some_how(usms, client, from, sender, mei, isFakenews)
    let islinkdogrupo = await linkdogrupo(usms)
    if (islinkdogrupo > 0) {
        let invitelinkgroup = await client.groupInviteCode(from)
        reply('O link de convite deste grupo é: https://chat.whatsapp.com/' + invitelinkgroup)
    }
}

module.exports = { startsmsverification }
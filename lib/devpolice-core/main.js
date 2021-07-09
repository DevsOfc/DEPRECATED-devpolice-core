const { color } = require('../functions/default')
const { switchfunctions } = require('./switch')
const { verification_on_chatupdate, console_colors } = require('./main_functions')
const { conf } = require('../../settings/config')

const verifi_block_list = async (json) => {
    let blocked = []
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
}

const start_onchatupdade = async (mei, client) => {
    try {
        mei = verification_on_chatupdate(mei)
        if (!mei) return
        const type = Object.keys(mei.message)[0]
        body = (type === 'conversation' && mei.message.conversation.startsWith(conf.prefix)) ? mei.message.conversation : (type == 'imageMessage') && mei.message.imageMessage.caption.startsWith(conf.prefix) ? mei.message.imageMessage.caption : (type == 'videoMessage') && mei.message.videoMessage.caption.startsWith(conf.prefix) ? mei.message.videoMessage.caption : (type == 'extendedTextMessage') && mei.message.extendedTextMessage.text.startsWith(conf.prefix) ? mei.message.extendedTextMessage.text : ''
        budy = (type === 'conversation') ? mei.message.conversation : (type === 'extendedTextMessage') ? mei.message.extendedTextMessage.text : ''
        console_colors(mei, client, body)
        switchfunctions(mei, client, body, budy)
    } catch (e) {
        console.log('Error start_onchatupdade: ', color(e, 'red'))
    }
}

module.exports = { verifi_block_list, start_onchatupdade }
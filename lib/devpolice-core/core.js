const { start, success, banner, color } = require('../functions/default')

const fs = require('fs')

const corestart = async (client) => {
    client.logger.level = 'warn'
    console.log(banner.string)

    client.on('qr', () => { console.log(color(' Escaneie o código QR acima usando o whatsapp', 'green')) })

    fs.existsSync('./conectionW.json') && client.loadAuthInfo('./conectionW.json')

    client.on('connecting', () => { start('2', 'Conectando...') })

    client.on('open', () => { success('2', 'Conectado com sucesso :)') })

    await client.connect({ timeoutMs: 30 * 1000 })

    fs.writeFileSync('./conectionW.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
}

module.exports = { corestart }
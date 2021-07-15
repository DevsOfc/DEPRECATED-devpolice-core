const { WAConnection } = require('@adiwajshing/baileys')
const { corestart } = require('./lib/devpolice-core/core')
const { verifi_block_list, start_onchatupdade } = require('./lib/devpolice-core/main')

const start = () => {

	const client = new WAConnection()

	corestart(client)

	client.on('group-participants-update', async (datainfo) => { group_participants_update(datainfo, client) })

	client.on('CB:Blocklist', async (json) => { verifi_block_list(json) })

	client.on('chat-update', async (mei) => { start_onchatupdade(mei, client) })
}

start()

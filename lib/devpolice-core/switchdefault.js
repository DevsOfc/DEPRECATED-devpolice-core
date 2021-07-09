const { startsmsverification } = require('../group/smsverfier')
const { pvdevpolice_core } = require('../pv/main')

const defaultfuncswitch = async (isGroup, budy, client, from, sender, mei, isFakenews, reply) => {
    if (isGroup) {
        startsmsverification(budy, client, from, sender, mei, isFakenews, reply)
    } else {
        pvdevpolice_core()
    }
}

module.exports = { defaultfuncswitch }
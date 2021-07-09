const chalk = require('chalk')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
    return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const getBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (e) {
        console.log(`getBuffer error path lib/functions/default : ${e}`)
    }
}

const getGroupAdmins = (participants) => {
    admins = []
    for (let i of participants) {
        i.isAdmin ? admins.push(i.jid) : ''
    }
    return admins
}

const getRandom = ext => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = {
    "interval": 120,
    "frames": [
        "🕐",
        "🕑",
        "🕒",
        "🕓",
        "🕔",
        "🕕",
        "🕖",
        "🕗",
        "🕘",
        "🕙",
        "🕚",
        "🕛"
    ]
}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
    if (!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins });
    return globalSpinner;
}

spins = getGlobalSpinner(false)
const start = (id, text) => { spins.add(id, { text: text }) }
const info = (id, text) => { spins.update(id, { text: text }) }
const success = (id, text) => { spins.succeed(id, { text: text }) }
const close = (id, text) => { spins.fail(id, { text: text }) }

const banner = cfonts.render(('DEVPOLICE|6.0'), {
    font: 'chrome',
    color: 'candy',
    align: 'center',
    gradient: ["green", "blue"],
    lineHeight: 3
});

module.exports = {
    getBuffer, getGroupAdmins, getRandom, start, info, success, banner, close, color, bgcolor
}

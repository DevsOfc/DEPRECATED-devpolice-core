const linkdogrupo = async (usms) => {
    let prograwords = ["link desse grupo", "link deste grupo", "tem o link do grupo", "enviar o link do grupo", "link daqui do grupo", "the group link", "the group url"]
    let wordcount = 0
    for (let i = 0; i < prograwords.length; i++) {
        if (usms.includes(prograwords[i])) wordcount++
    }
    return wordcount;
}

module.exports = { linkdogrupo }
module.exports = {
    name: 'donate',
	cooldown: 2,
    description: 'Support me and the bot!',
    execute(message, args) {
		message.channel.send('Like Faceless Bot? Want to support it? Then become a patron! https://www.patreon.com/facelessBot \nCan\'t Donate? Then donate your time and contribute to the bot! https://github.com/Magicperson1/FacelessBot')
    },
};

const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js')
const client = new Discord.Client();
module.exports = {
    name: 'faceless',
	cooldown: 2,
    description: 'Show a random faceless image',
    execute(message, args) {
		var facelessId = Math.floor(Math.random() * Math.floor(11))
		const attachment = new Attachment(`./faceless-images/${facelessId}.jpg`)
		message.channel.send(attachment)
    },
};

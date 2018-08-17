const Discord = require('discord.js');
const client = new Discord.Client()
module.exports = {
	name: 'warn',
	cooldown: 2,
	description: 'allows you to warn a user',
	execute(message, args) {
		if (message.member.permissions.has('KICK_MEMBERS')) {
			
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		else {
			const channel = message.guild.channels.find(ch => ch.name === 'member-log');
            if (!channel) message.channel.send('The channel "member-log" is required'); 
            if (!channel) return;
			message.guild.channels.find(c => c.name === "member-log").send(`${args[0]} Was warned for: ${message.content.slice(args[0].length + 6)} \nResponsible Staff: ${message.author}`)
			console.log(args[0].length)
			var reason = message.content.slice(args[0].length + 6)
			return message.channel.send(`${args[0]} You have made a mistake, Do not repeat it! \nReason for warn: ` + reason);
			
			message.delete()
		}
        console.log('command worked')
		}
		else {
			message.channel.send('You do not have the permissions required to run this command!')
		}
	},
};

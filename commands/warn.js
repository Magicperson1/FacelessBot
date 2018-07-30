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
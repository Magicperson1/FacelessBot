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
			return message.channel.send(`${args[0]} You have made a mistake, Do not repeat it!`);
		}
        console.log('command worked')
		message.channel.send(`First argument: ${args[0]}`);
		}
		else {
			message.channel.send('You do not have the permissions required to run this command!')
		}
	},
};
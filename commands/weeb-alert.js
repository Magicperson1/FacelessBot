module.exports = {
	name: 'weeb-alert',
	cooldown: 2,
	description: 'alerts everyone online who is being a weeb',
	execute(message, args) {
		if (!args.length) {
			message.channel.send(`You didn't provide any weebs, ${message.author}!`);
			message.delete()
		}
		else {
			console.log(args[0].length)
			message.delete()
			message.channel.send(`@here Looks like ${args[0]} is being a weeb!`);
		}
	},
};
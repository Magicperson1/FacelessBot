module.exports = {
    name: 'leave',
	cooldown: 2,
    description: 'leaves the server',
    execute(message, args) {
		if (message.member.permissions.has('KICK_MEMBERS')) {
		message.channel.send(`Thank you for adding Faceless bot and I are sorry that you feel the need to remove me, I will see myself out`)
        message.guild.leave()
		}
		else {
			message.channel.send(`${message.author}, **You do not have the required permissions!**`)
		}
    },
};
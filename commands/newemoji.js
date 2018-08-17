module.exports = {
    name: 'newemoji',
	cooldown: 2,
    description: 'creates a new emoji',
    execute(message, args) {
                if (!args.length) {
			message.channel.send('Send _newemoji <image link> <name>')
		}
		else {
        if (message.member.permissions.has('KICK_MEMBERS')) {
            message.guild.createEmoji(args[0], args[1])
            message.channel.send(`created new emoji: ${args[1]}`)
        }
        else {
            message.channel.send('You do not have the proper permissions')  
        }
        }
    },
};

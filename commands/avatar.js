module.exports = {
    name: 'avatar',
	cooldown: 2,
    description: 'shows user avatar',
    execute(message, args) {
	if (!args.length) {	
        message.channel.send(message.author.avatarURL)
    } 
	else {
		message.channel.send(message.mentions.users.first().avatarURL)
	}
	    
	},
	
};
module.exports = {
    name: 'about',
	cooldown: 2,
    description: 'shows user information',
    execute(message, args) {
	if (!args.length) {	
        message.channel.send('Username: ' + message.author.username + '\nYour ID: ' + message.author.id + '\nYour Avatar:')
		message.channel.send(message.author.avatarURL)
    } 
	else {
		message.channel.send('Username: ' + message.mentions.users.first().username + '\nID: ' + message.mentions.users.first().id + '\nAvatar:')
		message.channel.send(message.mentions.users.first().avatarURL)
	}
	
	},
	
};
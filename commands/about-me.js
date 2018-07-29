module.exports = {
    name: 'about-me',
	cooldown: 2,
    description: 'shows user information',
    execute(message, args) {
        message.channel.send('Username: ' + message.author.username + '\nYour ID: ' + message.author.id + '\nYour Avatar:')
		message.channel.send(message.author.avatarURL)
    },
};
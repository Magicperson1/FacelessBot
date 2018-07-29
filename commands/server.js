module.exports = {
    name: 'server',
	cooldown: 2,
    description: 'displays server information',
    execute(message, args) {
        message.channel.send(message.channel.send('This server\'s name is ' + message.guild.name + ' and has ' + message.guild.memberCount + ' members!'));
    },
};
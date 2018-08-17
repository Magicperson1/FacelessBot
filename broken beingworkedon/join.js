module.exports = {
    name: 'join',
	cooldown: 2,
    description: 'Joins a voice channel',
    execute(message, args) {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
            .then(connection => {
            message.channel.send('**Connection established**')
            })
        }
        else {
        message.channel.send('Join a voice channel')
        }
    }
};

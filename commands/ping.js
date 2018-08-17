module.exports = {
    name: 'ping',
	cooldown: 2,
    description: 'Ping!',
    execute(message, args) {
		var pingTime = new Date().getTime() - message.createdTimestamp
        message.channel.send(`Pong! ${pingTime} ms`);
    },
};

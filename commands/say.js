const { prefix } = require('../config.json');
module.exports = {
    name: 'say',
	cooldown: 2,
    description: 'repeats a command',
    execute(message, args) {
		message.delete()
        message.channel.send(message.content.slice(4));
    },
};
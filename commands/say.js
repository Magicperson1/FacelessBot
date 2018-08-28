const { prefix } = require('../config.json');
module.exports = {
    name: 'say',
	cooldown: 2,
    description: 'repeats a command',
    execute(message, args) {
		if (message.content.includes('@everyone') || message.content.includes('@here')) {
			message.channel.send('I wont ping everyone for you instead here, ' + message.author)
			return
		}
		else {
		message.delete()
        message.channel.send(message.content.slice(4));
	    }
    },
};

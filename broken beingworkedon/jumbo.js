const twemoji = require('twemoji');
module.exports = {
    name: 'jumbo',
	cooldown: 2,
    description: 'makes an emoji bigger',
    execute(message, args) {
		const emoji = args
        message.channel.send(`https://cdn.discordapp.com/emojis/` + message.emojis.first().id + `.png`);
    },
};
const twemoji = require('twemoji');
module.exports = {
    name: 'jumbo',
	cooldown: 2,
    description: 'makes an emoji bigger',
    execute(message, args) {
		const emoji = message.content.slice(6);
        message.channel.send(`https://cdn.discordapp.com/emojis/` + emoji.url + `.png`);
    },
};
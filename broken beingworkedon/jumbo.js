const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'jumbo',
	cooldown: 2,
    description: 'makes an emoji bigger',
    execute(message, args) {
        //if (args[0].url) {
        console.log(args[0].name)
            console.log(`https://cdn.discordapp.com/emojis/${client.emojis.find(e => e.name === args[0].name)}.png?v=1`)
			message.channel.send(args[0].url)
		//}
		/*else {
			message.channel.send('**This command is for custom emojis only!**')
		}*/
    },
};

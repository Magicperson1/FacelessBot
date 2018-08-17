const snekfetch = require('snekfetch');
const Discord = require('discord.js');
module.exports = {
    name: 'urban',
	cooldown: 2,
    description: 'searches urban dictionary',
    execute(message, args) {
		const trim = (str,max) => (str.length > max) ? `${str.slice(0, max - 3)}...` : str;
        if (message.channel.nsfw) {
            async function urban() {
                if(!args.length) {
                    return message.channel.send('You didnt search anything')
                }
            
                const { body } = await snekfetch.get('https://api.urbandictionary.com/v0/define').query({ term: args.join(' ') });
                if (!body.list.length) {
                    return message.channel.send('**No definitions found!**')
                }
                else {
                    //message.channel.send(body.list[0].definition)
                    const [answer] = body.list;
                    message.channel.send({
					embed: {
						color: 0x0099ff,
						fields: [
						 {
                             name: 'Word',
                             value: trim(answer.word),
                         },
						 {
                             name: 'Definition',
                             value: trim(answer.definition, 1024),
                         },
                         {
                             name: 'Example',
                             value: trim(answer.example, 1024),
                         },
						],
						timestamp: new Date(),
                        footer: {
                        text: 'Created By Faceless',
                        icon_url: 'https://cdn.discordapp.com/avatars/469157269771124736/1744e8c44fcaeaef2a52eeea0e658f96.png?size=2048',
                        },
					}
					})
                }
            }
            urban()
        }
        else {
            message.channel.send(`**${message.author}, This command can only be used in nsfw channels!**`)
        }
    },
};

module.exports = {
    name: 'avatar',
	cooldown: 2,
    description: 'shows user avatar',
    execute(message, args) {
	if (!args.length) {	
        message.channel.send({
    embed: {
        color: 0x0099ff,
   
        fields: [
            {
                name: 'Username: ',
                value: message.author.username,
			}
        ],
        image: {
            url: message.author.avatarURL,
        },
        timestamp: new Date(),
        footer: {
            text: 'Created By Faceless',
            icon_url: 'https://cdn.discordapp.com/avatars/469157269771124736/1744e8c44fcaeaef2a52eeea0e658f96.png?size=2048',
        },
    },
});
		
    } 
	else {
		message.channel.send({
		embed: {
        color: 0x0099ff,
   
        fields: [
            {
                name: 'Username: ',
                value: message.mentions.users.first().username,
			}
        ],
        image: {
            url: message.mentions.users.first().avatarURL,
        },
        timestamp: new Date(),
        footer: {
            text: 'Created By Faceless',
            icon_url: 'https://cdn.discordapp.com/avatars/469157269771124736/1744e8c44fcaeaef2a52eeea0e658f96.png?size=2048',
        },
	}
	})
	}
	    
	},
	
};
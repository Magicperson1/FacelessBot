module.exports = {
    name: 'about',
	cooldown: 2,
    description: 'shows user information',
    execute(message, args) {
	if (!args.length) {	
        //message.channel.send('Username: ' + message.author.username + '\nYour ID: ' + message.author.id + '\nYour Avatar:')
		//message.channel.send(message.author.avatarURL)

		message.channel.send({
    embed: {
        color: 0x0099ff,
   
        fields: [
            {
                name: 'Username: ',
                value: message.author.username,
            },
            {
                name: 'ID: ',
                value: message.author.id,
            },
            {
                name: 'Joined Discord: ',
                value: message.author.createdAt,
                inline: true,
            },
            {
                name: 'Is Bot?: ',
                value: message.author.bot,
                inline: true,
            },

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
		//message.channel.send('Username: ' + message.mentions.users.first().username + '\nID: ' + message.mentions.users.first().id + '\nAvatar:')
		//message.channel.send(message.mentions.users.first().avatarURL)
				message.channel.send({
    embed: {
        color: 0x0099ff,
   
        fields: [
            {
                name: 'Username: ',
                value: message.mentions.users.first().username,
            },
            {
                name: 'ID: ',
                value: message.mentions.users.first().id,
            },
            {
                name: 'Joined Discord: ',
                value: message.mentions.users.first().createdAt,
                inline: true,
            },
            {
                name: 'Is Bot?: ',
                value: message.mentions.users.first().bot,
                inline: true,
            },

        ],
        image: {
            url: message.mentions.users.first().avatarURL,
        },
        timestamp: new Date(),
        footer: {
            text: 'Created By Faceless',
            icon_url: 'https://cdn.discordapp.com/avatars/469157269771124736/1744e8c44fcaeaef2a52eeea0e658f96.png?size=2048',
        },
    },
});
	}
	
	},
	
};
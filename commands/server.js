module.exports = {
    name: 'server',
	cooldown: 2,
    description: 'displays server information',
    execute(message, args) {
        //message.channel.send(message.channel.send('This server\'s name is ' + message.guild.name + ' and has ' + message.guild.memberCount + ' members!'));
		message.channel.send({
    embed: {
        color: 0x0099ff,
   
        fields: [
            {
                name: 'Guild Name: ',
                value: message.guild.name,
            },
            {
                name: 'Member Count: ',
                value: message.guild.memberCount,
            },
            {
                name: 'Owner: ',
                value: message.guild.owner.user.username,
            },
            {
                name: 'Created: ',
                value: message.guild.createdAt,
            },

        ],
        image: {
            url: message.guild.iconURL,
        },
        timestamp: new Date(),
        footer: {
            text: 'Created By Faceless',
            icon_url: 'https://cdn.discordapp.com/avatars/469157269771124736/1744e8c44fcaeaef2a52eeea0e658f96.png?size=2048',
        },
    },
});
    },
};

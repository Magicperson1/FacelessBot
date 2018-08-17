module.exports = {
    name: 'ship',
	cooldown: 2,
    description: 'Ships 2 people',
    execute(message, args) {
		if (args.length == 2) {
        var SName1 = args[0].slice(0, args[0].length / 2)
        var SName2 = args[1].slice(args[1].length / 2)
        		message.channel.send({
    embed: {
        color: 0x0099ff,
   
        fields: [
            {
                name: 'First Name: ',
                value: args[0],
            },
            {
                name: 'Second Name: ',
                value: args[1],
            },
            {
                name: 'Ship name: ',
                value: SName1 + SName2,
            },

        ],
        timestamp: new Date(),
        footer: {
            text: 'Created By Faceless',
            icon_url: 'https://cdn.discordapp.com/avatars/469157269771124736/1744e8c44fcaeaef2a52eeea0e658f96.png?size=2048',
        },
    },
})
    }
    else {
		message.channel.send('You need 2 people to ship!')
	}
    }
};

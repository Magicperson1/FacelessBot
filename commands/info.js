		const Discord = require('discord.js');
		const client = new Discord.Client();
		var os = require('os-utils')
module.exports = {
    name: 'info',
	cooldown: 2,
    description: 'Displays various bot stats and facts',
    execute(message, args) {
		var pingTime = new Date().getTime() - message.createdTimestamp
        os.cpuUsage(function(v) {
        message.channel.send({
    embed: {
        color: 0x0099ff,
   
        fields: [
            {
                name: 'Response Time: ',
                value: `${pingTime} ms`,
            },
            {
                name: 'Memory Usage: ',
                value: (((process.memoryUsage().rss - (process.memoryUsage().heapTotal - process.memoryUsage().heapUsed) / 1024) / 1024).toFixed(2) / 1024).toFixed(2) + ' MB'//`${(os.totalmem() - os.freemem())} Used out of ${os.totalmem}`,
            },
            {
                name: 'CPU Usage: ',
                value: v.toFixed(2) + '%',
            },
            {
                name: 'Bot Team: ',
                value: '**Lead Dev**: magic_person#1200 \n **Support Server Staff**: a B B Baka, Escape, eggleton, and many more \n **Good People**: Everyone on on the discord bot list server for being such a great resource, All of you for adding and supoorting my bot',
            },

        ],
        timestamp: new Date(),
        footer: {
            text: 'Created By Faceless',
            icon_url: 'https://cdn.discordapp.com/avatars/469157269771124736/1744e8c44fcaeaef2a52eeea0e658f96.png?size=2048',
        },
    },
});
})
    },
};

module.exports = {
    name: 'botsetup',
	cooldown: 2,
    description: 'Sets up various channels for the bot',
    execute(message, args) {
		const channel = message.guild.channels.find(ch => ch.name === 'report-log');
		if (!channel) {
        message.guild.createChannel('report-log', 'text')
        message.guild.channels.find(c => c.name === 'report-log').overwritePermissions(guild.id, {
			SEND_MESSAGES: false
		})
	    }
		if (!message.guild.channels.find(ch => ch.name === 'member-log')) {
		message.guild.createChannel('member-log', 'text')
        message.guild.channels.find(c => c.name === "member-log").overwritePermissions(guild.id, {
			SEND_MESSAGES: false
		})
	    }
    },
};

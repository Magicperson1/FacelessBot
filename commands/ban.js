module.exports = {
    name: 'ban',
	cooldown: 2,
    description: 'Bans a user',
    execute(message, args) {
        var member = message.mentions.users.first()
        if (message.member.permissions.has('BAN_MEMBERS')) {
            const channel = message.guild.channels.find(ch => ch.name === 'member-log');
            if (!channel) message.channel.send('The channel "member-log" is required'); 
            if (!channel) return;
		console.log(member)
		message.guild.channels.find(c => c.name === "member-log").send(`${args[0]} Was banned for: ${message.content.slice(args[0].length + 6)} \nResponsible Staff: ${message.author}`)
        message.guild.member(member).ban();    
		message.channel.send(`**You have banned:** ${member}`)
    }
}
}

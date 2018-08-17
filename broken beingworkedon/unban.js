module.exports = {
    name: 'ban',
	cooldown: 2,
    description: 'Bans a user',
    execute(message, args) {
        var member = message.mentions.users.first()
        if (message.member.permissions.has('BAN_MEMBERS')) {
		console.log(member)
        message.guild.member(member).unban();    
		message.channel.send(`**You have unbanned:** ${member}`)
    }
}
}

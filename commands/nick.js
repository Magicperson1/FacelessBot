module.exports = {
    name: 'nick',
	cooldown: 2,
    description: 'sets your nickname',
    execute(message, args) {
	if (args.length) {	
	    message.member.setNickname(message.content.slice(5))
		message.channel.send(`**Changed nickname to:** ${message.content.slice(5)}`)
    }
	else {
		message.member.setNickname(message.content.slice(5))
		message.channel.send(`**Reset ${message.author}'s nickname**`)
	}
	}
}

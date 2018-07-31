module.exports = {
    name: 'invite',
	cooldown: 2,
    description: 'Generates a bot invite link',
    execute(message, args) {
		var inviteMsg = Math.floor(Math.random() * Math.floor(3))
        if (inviteMsg == 1) {
		    console.log(`message1`)
			message.channel.send(`It's dangerous to go alone, Take this! \nhttps://discordapp.com/oauth2/authorize?client_id=469157269771124736&scope=bot`)
        }
		if (inviteMsg == 0) {
			console.log(`message2`)
			message.channel.send(`Use this to be the very best, Like no one ever was! \nhttps://discordapp.com/oauth2/authorize?client_id=469157269771124736&scope=bot`)
        }
		if (inviteMsg == 2) {
			console.log(`message3`)
			message.channel.send(`Sorry Mario, but your princess is in another castle, Try this one! \nhttps://discordapp.com/oauth2/authorize?client_id=469157269771124736&scope=bot`)
		}
		console.log(inviteMsg)
		
	}, 
}; 
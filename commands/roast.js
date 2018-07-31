module.exports = {
    name: 'roast',
	cooldown: 2,
    description: 'roasts a user',
    execute(message, args) {
	var roastId = Math.floor(Math.random() * Math.floor(6))	
	if (!args.length) {	
        if (roastId == 0) {
		    message.channel.send(`${message.author}, Your momma so fat, Her splash attack does damage!`)
	    }
	    if (roastId == 1) {
		    message.channel.send(`${message.author}, You practically look like a before picture!`)
		}
		if (roastId == 2) {
			message.channel.send(`${message.author}, I'd give you a nasty look but you've already got one!`)
		}
		if (roastId == 3) {
			message.channel.send(`${message.author}, If laughter is the best medicine, Your face must be curing the world`)
		}
		if (roastId == 4) {
			message.channel.send(`${message.author}, If I wanted a bitch, I'd have bought a dog`)
		}
		if (roastIf == 5) {
			message.channel.send(`${message,author}, Your family tree must be a cactus becuase everyone on it is a prick`)
		}
    } 
	}
}


module.exports = {
    name: 'roast',
	cooldown: 2,
    description: 'roasts a user',
    execute(message, args) {
		if (!args.length) {
        var response = [`${message.author}, Your momma so fat, Her splash attack does damage`, `${message.author}, You practically look like a before picture!`, `${message.author}, I'd give you a nasty look but you've already got one!`, `${message.author}, If laughter is the best medicine, Your face must be curing the world`, 'no' ,`${message.author}, If I wanted a bitch, I'd have bought a dog`, `${message.author}, Can you die of constipation? Becuase im worried about how full of shit you are`, `While its a lot of fun teasing ${message.author}, we need to have respect for them, it takes a lot of resolve not to kill yourself with *that* face`, `${message.author}, The only culture you have is your bacteria`, `${message.author}, My phone battery lasts longer than your relationships`, `${message.author}, I've seen people like you before but i had to pay admission`, `${message.author}, You'll never be the man your mother was`, `${message.author} no u`]
        var responseId = Math.floor(Math.random() * Math.floor(response.length))
        message.channel.send(response[responseId])
	}
	else {
		var response = [`${message.mentions.users.first()}, Your momma so fat, Her splash attack does damage`, `${message.mentions.users.first()}, You practically look like a before picture!`, `${message.mentions.users.first()}, I'd give you a nasty look but you've already got one!`, `${message.mentions.users.first()}, If laughter is the best medicine, Your face must be curing the world`, 'no' ,`${message.mentions.users.first()}, If I wanted a bitch, I'd have bought a dog`, `${message.mentions.users.first()}, Can you die of constipation? Becuase im worried about how full of shit you are`, `While its a lot of fun teasing ${message.mentions.users.first()}, we need to have respect for them, it takes a lot of resolve not to kill yourself with *that* face`, `${message.mentions.users.first()}, The only culture you have is your bacteria`, `${message.mentions.users.first()}, My phone battery lasts longer than your relationships`, `${message.mentions.users.first()}, I've seen people like you before but i had to pay admission`, `${message.mentions.users.first()}, You'll never be the man your mother was`, `${message.mentions.users.first()} no u`]
        var responseId = Math.floor(Math.random() * Math.floor(response.length))
        message.channel.send(response[responseId])
	}
	/*var roastId = Math.floor(Math.random() * Math.floor(10))	
	if (!args.length) {	
        if (roastId == 0) {
			console.log(0)
		    message.channel.send(`${message.author}, Your momma so fat, Her splash attack does damage!`)
	    }
	    if (roastId == 1) {
			console.log(1)
		    message.channel.send(`${message.author}, You practically look like a before picture!`)
		}`${message.author}, You'll never be the man your mother was`
		if (roastId == 2) {
			console.log(2)
			message.channel.send(`${message.author}, I'd give you a nasty look but you've already got one!`)
		}
		if (roastId == 3) {
			console.log(3)
			message.channel.send(`${message.author}, If laughter is the best medicine, Your face must be curing the world`)
		}
		if (roastId == 4) {
			console.log(4)
			message.channel.send(`${message.author}, If I wanted a bitch, I'd have bought a dog`)
		}
		if (roastId == 5) {
			console.log(5)
			message.channel.send(`${message.author}, Can you die of constipation? Becuase im worried about how full of shit you are`)
		}
		if (roastId == 6) {
			console.log(6)
			message.channel.send(`While its a lot of fun teasing ${message.author}, we need to have respect for them, it takes a lot of resolve not to kill yourself with *that* face`)
		}
		if (roastId == 7) {
			console.log(7)
			message.channel.send(`${message.author}, The only culture you have is your bacteria`)
			
		}	
		if (roastId == 8) {
			console.log(8)
			message.channel.send(`${message.author}, My phone battery lasts longer than) you relationships`)
			
		}
		if (roastId == 9) {
			console.log(9)
			message.channel.send(`${message.author}, I've seen people like you before but i had to pay admission`)
		}
		if (roastId == 10) {
			console.log(10)
			message.channel.send(`${message.author}, You'll never be the man your mother was`)
		}	*/	
		}
    } 
    



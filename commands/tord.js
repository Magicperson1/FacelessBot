module.exports = {
    name: 'tord',
	cooldown: 2,
    description: 'Truth Or Dare',
    execute(message, args) {
    var td = Math.floor(Math.random() * Math.floor(6))
        if (!args.length) {
			message.channel.send('Send truth(t) or dare(d)')
		}
		else {
        if (args[0].startsWith('t')) {
            if (td == 0) {
                message.channel.send('What`s you darkest fear?')
            }
            if (td == 1) {
				message.channel.send('What`s your biggest weakness?')
			}
			if (td == 2) {
				message.channel.send('Who`s your crush?')
			}
			if (td == 3) {
				message.channel.send('What`s you middle name?')
			}
			if (td == 4) {
				message.channel.send('What is your purpose in life?')
			}
			if (td == 5) {
				message.channel.send('When was the last time you peed yourself?')
			}
        
        }
        else if (args[0].startsWith('d')) {
			if (td == 0) {
                message.channel.send('Wear a shirt on your legs')
            }
            if (td == 1) {
				message.channel.send('Tell your mom you hate her')
			}
			if (td == 2) {
				message.channel.send('Run several laps around your house')
			}
			if (td == 3) {
				message.channel.send('Lick your toes')
			}
			if (td == 4) {
				message.channel.send('Put ketchup and mustard on a fruit and eat it')
			}
			if (td == 5) {
				message.channel.send('Put legos in your socks and take 5 steps')
			}
		}
	}
		
    },
};

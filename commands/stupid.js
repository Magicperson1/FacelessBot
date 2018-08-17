module.exports = {
    name: 'stupid',
	cooldown: 2,
    description: 'Does stupid stuff',
    execute(message, args) {
		var response = ['guess what? \nyour mom gay', 'Lick my elbows and smear honey in my toes', 'No', '*Proceeds to eat freef*', 'On a scale of 1-10, what`s your favorite color of the alphabet', 'guess what? \nChicken but', 'u', 'bees', 'your ancestors incestors', 'guess why? Chicken theigh', 'your family tree lgbt', 'Your brother a mother', 'Mitochondria is the powerhouse of the cell', 'your mom', 'iphone', '2 + 2 = fish', 'Real life', '*Long cow has arrived*', 'The duck went to another world.']
        var responseId = Math.floor(Math.random() * Math.floor(response.length))
        message.channel.send(response[responseId])
    
		
       /* var dumb = Math.floor(Math.random() * Math.floor(19))
        if (dumb == 0) {
            message.channel.send('guess what?')
            message.channel.send('you mom gay')        
	    }
	    if (dumb == 1) {
			message.channel.send('Lick my elbows and smear honey in my toes')			
		}
		if (dumb == 2) {
			message.channel.send('*Proceeds to eat freef*')
		}
		if (dumb == 3) {
			message.channel.send('On a scale of 1-10, what`s your favorite color of the alphabet', 'your ancestors incestors', 'guess why? \nChicken thiegh', 'your family tree lgbt', )
		}
		if (dumb == 4) {
			message.channel.send('guess what?')
			message.channel.send('chicken butt')
		}
		if (dumb == 5) {
			message.channel.send('u')'your family tree lgbt'
		}
		if (dumb == 6) {
			message.channel.send('your ancestors incestors')
		}
		if (dumb == 7) {'Mitochondria is the powerhouse of the cell'
			message.channel.send('guess why')
			message.channel.send('chicken theigh')
		}
		if (dumb == 8) {
			message.channel.send('your family tree lgbt')
		}
		if (dumb == 9) {
			message.channel.send('bees')
		}
		if (dumb == 10) {
			message.channel.send('Your brother a mother')
		}
		if (dumb == 11) {
			message.channel.send('Mitochondria is the powerhouse of the cell')
		}
		if (dumb == 12) {
			message.channel.send('your mom')
		}
		if (dumb == 13) {
			message.channel.send('iphone')
		} 
		if (dumb == 14) {
			message.channel.send('2 + 2 = fish')
		}
		if (dumb == 15) {
			message.channel.send('Real life')
		}
		if (dumb == 16) {
			message.channel.send('**E**')
		}
		if (dumb == 17) {
			message.channel.send('*Long cow has arrived*')
		}
		if (dumb == 18) {
			message.channel.send('The duck went to another world.')
		}*/
    },
};

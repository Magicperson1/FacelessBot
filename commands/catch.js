module.exports = {
    name: 'catch',
	cooldown: 2,
    description: 'catch a pokemon',
    execute(message, args) {
		var pkmnId = Math.floor(Math.random() * Math.floor(807))
		message.channel.send('https://www.pokedex.org/#/pokemon/' + pkmnId)
        message.channel.send('**Catching pokemon will be added in the future**');
    },
};
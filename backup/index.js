const Discord = require('discord.js');
const { prefix, token }= require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

//the following code is for commands
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
	if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}	
else if (command === 'kick') {
    if (!message.mentions.users.size) {
    return message.reply('you need to tag a user in order to kick them!');
}// grab the "first" mentioned user from the message
    // this will return a `User` object, just like `message.author`
    const taggedUser = message.mentions.users.first();

    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
}
    if (message.content === '!ping') {
	    message.channel.send('**Pong!**')
    }
	else if (message.content.startsWith(`${prefix}catch`)) {
        message.channel.send('**Catching pokemon will be added in the future**');
	}
	else if (message.content === (prefix + 'server')) {
		message.channel.send('This server\'s name is ' + message.guild.name + ' and has ' + message.guild.memberCount + ' members!');
	}
	else if (message.content === (prefix + 'about-me')) {
		message.channel.send('Username: ' + message.author.username + '\nYour ID: ' + message.author.id)
	}
});
	
client.login(token);


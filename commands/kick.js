const discord = require('discord.js');
module.exports = {
    name: 'kick',
	cooldown: 2,
    description: 'currently a test command',
    execute(message, args) {
    if (!message.mentions.users.size) {
    return message.reply('you need to tag a user in order to kick them!');
    }// grab the "first" mentioned user from the message
    // this will return a `User` object, just like `message.author`
    var member = message.mentions.users.first();
    if (message.member.permissions.has('KICK_MEMBERS')) {
        message.mentions.kick();      
	}	
    message.channel.send(`You have kicked: ${member.username}`);
    }
};
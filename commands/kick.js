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
    var member = message.mentions.users.first()

    if (message.member.permissions.has('KICK_MEMBERS')) {
            const channel = message.guild.channels.find(ch => ch.name === 'member-log');
            if (!channel) message.channel.send('The channel "member-log" is required'); 
            if (!channel) return;
		console.log(member)
        message.guild.member(member).kick();    
		message.channel.send(`**You have kicked:** ${member}`)
		message.guild.channels.find(c => c.name === "member-log").send(`${args[0]} Was kicked for: ${message.content.slice(args[0].length + 6)} \nResponsible Staff: ${message.author}`)
	}	
	else {
		message.channel.send(`${message.author} **You do not have the proper permissions!**`)
	}
    }
};

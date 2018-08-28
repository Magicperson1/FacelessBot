const fs = require('fs');
const Discord = require('discord.js');

const snekfetch = require('snekfetch');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ2OTE1NzI2OTc3MTEyNDczNiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTMzMjU3NjkwfQ.-rcmp1jyQq0D18zZTY44FzvBzBTjmnJLhAvNohDEMGU',client);
var os = require('os-utils')
module.exports = {
    name: 'eval',
	cooldown: 2,
    description: 'A bot owner only command',
    execute(message, args, Discord, client) {
    if (message.author.id == '223995150051835904') {
            message.channel.send('```' + eval(args.join(' ')) + '```')
    }
    else {
		message.channel.send('No, No, No, This command no for u!')
	}
}
}

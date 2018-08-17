const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token }= require('./config.json');

const snekfetch = require('snekfetch');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ2OTE1NzI2OTc3MTEyNDczNiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTMzMjU3NjkwfQ.-rcmp1jyQq0D18zZTY44FzvBzBTjmnJLhAvNohDEMGU',client);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}
    const cooldowns = new Discord.Collection();
client.on('ready', () => {
    console.log('Ready!');
	client.user.setActivity('_help | Helping ' + client.guilds.size + ' servers');
	setInterval(() => {
		dbl.postStats(client.guilds.size);
	}, 1800000);
})

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;
    //creates a new canvas
	//const canvas = Canvas.createCanvas(700,250);
	//const ctx = canvas.getContext('2d');
	
	//const background = await canvas.loadImage('./wallpaper.jpg');
	//ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	//const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
	
    channel.send(`Welcome to the server, ${member}!`);
    
});

client.on('guildCreate', guild => {
	//guild.role.create({
		//data: {
			//name: 'Faceless',
			//color: 'GREEN',
		//}
		client.user.setActivity('_help | Helping ' + client.guilds.size + ' servers');
	})
	//Faceless.setPermissions(['ADMINISTRATOR'])
//
//the following code is for commands
client.on('emojiCreate', emoji => {
    const channel = emoji.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`New emoji created, ${emoji}!`);
})
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
	
	    if (command.args && !args.length) {
			return message.channel.send(`you didn't provide any arguments, ${message.author}!`);
		}
	if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
    }
   /* if (message.mentions.users.first().id == client.user.id) {
		message.channel.send({
    embed: {
        color: 0x0099ff,
   
        fields: [
            {
                name: 'Prefix: ',
                value: prefix,
            },
            {
                name: 'Bot Owner: ',
                value: '**magic_person**',
            },
        ],
        image: {
            url: 'https://cdn.discordapp.com/avatars/469157269771124736/1744e8c44fcaeaef2a52eeea0e658f96.png?size=2048',
        },
        timestamp: new Date(),
        footer: {
            text: 'Created By Faceless',
            icon_url: 'https://cdn.discordapp.com/avatars/469157269771124736/1744e8c44fcaeaef2a52eeea0e658f96.png?size=2048',
        },
    },
})*/
		
	//}
 
	const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

	
    if (!timestamps.has(message.author.id)) {
         timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }
    else {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the command.`);
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }
    
	if (!client.commands.has(command)) return;
	
	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command');
	}
});
client.login(token);


module.exports = {
    name: 'report',
	cooldown: 2,
    description: 'Reports a problem to the server`s owner',
    execute(message, args) {
        if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
			message.delete
		}
		else {
			const channel = message.guild.channels.find(ch => ch.name === 'report-log');
            if (!channel) message.channel.send('The channel "report-log" is required, Tell the staff to add this channel!'); 
            if (!channel) return;
            message.delete
			message.guild.channels.find(c => c.name === "report-log").send(`A report was sent from: ${message.author} \nIt was protaining to: ${message.content.slice(8)}`)
			return message.channel.send(`**Report Sent!**`);
			
			message.delete()
		}
        console.log('command worked')
		}
};

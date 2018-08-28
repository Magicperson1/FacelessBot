module.exports = {
    name: 'purge',
	cooldown: 2,
    description: 'deletes a certain number of messages',
    execute(message, args) {
    if (message.member.permissions.has('MANAGE_MESSAGES') || message.author.id == '223995150051835904') {   
		if (args.length) {
			
			if (typeof parseInt(args[0]) == 'number') {
				if (args[0] < 101) {
	   async function purge() {
			message.delete();
			
			const fetched = await message.channel.fetchMessages({limit: args[0]})
			console.log(fetched.size + ' messages found, now deleting')
			message.channel.bulkDelete(fetched)
			    .catch(error => message.channel.send(`${error}`))
		}
		purge();
	}
	else {
		message.channel.send('**You can\'t purge more than 100 messages at a time!**')
	}
    }
	else {
		message.channel.send(`**${args[0]} is not a number!**`)
	}
}
	else {
		message.channel.send('**You didnt specify how many messages to delete!**')
	}
    }
    else {
        message.channel.send('**You do not have the proper permissions!**')
	}	
    }
    
    }

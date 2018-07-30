module.exports = {
    name: 'purge',
	cooldown: 2,
    description: 'deletes a certain number of messages',
    execute(message, args) {
    if (message.member.permissions.has('MANAGE_MESSAGES')) {   
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
        message.channel.send('**You do not have the proper permissions!**')
	}	
    },
};
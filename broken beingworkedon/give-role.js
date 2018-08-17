module.exports = {
    name: 'give-role',
	cooldown: 2,
    description: 'gives a user a role',
    execute(message, args) {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            var DRole = message.content.slice(args[0].length + 6).role.id
            message.mentions.users.first().addRoles(DRole)
            message.channel.send('Gave ${message.mentions.users.first()} the role of ${message.content.slice(args[0].length + 6)}')
        }
    },
};

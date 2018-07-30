module.exports = {
    name: 'support',
	cooldown: 2,
    description: 'sends you to the support server',
    execute(message, args) {
        message.channel.send('discord.gg/rNyPS9B')
    }
};
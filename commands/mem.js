module.exports = {
    name: 'mem',
	cooldown: 2,
    description: 'Shows system memory usage',
    execute(message, args) {
        message.channel.send((((process.memoryUsage().rss - (process.memoryUsage().heapTotal - process.memoryUsage().heapUsed)) / 1024) / 1024).toFixed(2) + ' MB')
    },
};

module.exports = {
    name: 'math',
	cooldown: 2,
    description: 'Ping!',
    execute(message, args) {
        if (args[1] == '+') {
        message.channel.send(parseInt(args[0]) + parseInt(args[2]));
        }
        if (args[1] == '-') {
        message.channel.send(parseInt(args[0]) - parseInt(args[2]));
        }
        if (args[1] == '/') {
        message.channel.send(parseInt(args[0]) / parseInt(args[2]));
        }
        if (args[1] == '*') {
        message.channel.send(parseInt(args[0]) * parseInt(args[2]));
        }
    },
};

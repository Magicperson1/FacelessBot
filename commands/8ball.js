module.exports = {
    name: '8ball',
	cooldown: 2,
    description: 'Works like a magic 8 ball',
    execute(message, args) {
        var response = ['Focus and ask again later', 'It is certain', 'No', 'It is doubtful', 'My sources say no', 'Results Hazy, ask again later']
        var responseId = Math.floor(Math.random() * Math.floor(response.length))
        message.channel.send({
    embed: {
        color: 0x0099ff,
   
        fields: [
            {
                name: 'Question: ',
                value: message.content.slice(6),
            },
            {
                name: 'Answer: ',
                value: response[responseId],
            },


        ],
        timestamp: new Date(),
        footer: {
            text: 'Created By Faceless',
            icon_url: 'https://cdn.discordapp.com/avatars/469157269771124736/1744e8c44fcaeaef2a52eeea0e658f96.png?size=2048',
        },
    },
});
    },
};

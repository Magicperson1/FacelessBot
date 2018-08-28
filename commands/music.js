const YouTube = require("discord-youtube-api")
const youtube = new YouTube("AIzaSyCTiF57JjrM0iBLtsgnVb2inFNh-xbfwW4")
const yltd = require('ytdl-core')
module.exports = {
    name: 'music',
	cooldown: 2,
    description: 'Plays a song, will be improved soon',
    execute(message, args) {
		let searchRequest = message.content.slice(6)
		async function play() {
			let video1 = await youtube.searchVideos(searchRequest)
			console.log(video1)
			let videoUrl = video1.url
			console.log('worked')
			if (message.member.voiceChannel) {
				console.log('worked2')
				message.member.voiceChannel.join()
					.then(connection => {
						message.channel.send(`Now playing ${video1.title}`)
						let stream = yltd(videoUrl, { filter: 'audioonly' })
						let dispatcher = connection.playStream(stream)
						
						//dispatcher.on('end', () => voiceChannel.leave())
						/*console.log(videoUrl)
						message.channel.send('**Joined Your channel!**')
						connection.playArbitraryInput(video1.url)
						message.channel.send(`Now playing ${video1.title}`)
						console.log('wokred3')*/
					})
					.catch(console.log)
			}
			else {
				console.log('worked4')
				message.channel.send("**Join a voice channel first!**")
			}
		}
		play()
		},
    }


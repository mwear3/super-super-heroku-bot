const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$indexfull') {
    	message.reply('```1.0, 1.0.1, 1.1, 1.2.1, 1.2.2, 1.2.3, 1.2.5, 1.3.1, 1.3.2, 1.4.2, 1.4.4, 1.4.5, 1.4.6, 1.4.7, 1.5, 1.5.1, 1.5.2, 1.6.1, 1.6.2, 1.6.4, 1.7.2, 1.7.4, 1.7.5, 1.7.6, 1.7.7, 1.7.8, 1.7.9, 1.7.10, 1.8```');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

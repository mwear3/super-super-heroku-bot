const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$indexfull') {
    	message.reply('```1.0, 1.0.1, 1.1, 1.2.1, 1.2.2, 1.2.3, 1.2.5, 1.3.1, 1.3.2, 1.4.2, 1.4.4, 1.4.5, 1.4.6, 1.4.7, 1.5, 1.5.1, 1.5.2, 1.6.1, 1.6.2, 1.6.4, 1.7.2, 1.7.4, 1.7.5, 1.7.6, 1.7.7, 1.7.8, 1.7.9, 1.7.10, 1.8, 1.8.1, 1.8.2, 1.8.3, 1.8.4, 1.8.5, 1.8.6, 1.8.7, 1.8.8, 1.8.9, 1.9, 1.9.1, 1.9.2, 1.9.3, 1.9.4, 1.10, 1.10.1, 1.10.2, 1.11, 1.11.1, 1.11.2, 1.12, 1.12.1, 1.12.2, 1.13, 1.13.1, 1.13.2```');
  	}
});
client.on('message', message => {
    if (message.content === '$indexhelp') {
    	message.reply('Do $indexfull for the list of the full release versions of Minecraft Java.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

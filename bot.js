const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$index') {
    	message.reply('The release stage of Minecraft's development started on November 18, 2011, and has continued until the present day. At this point of development, the game was considered "complete", both having an "ending" and being ready for ratings and reviews. The game's price also increased from what it was in Beta, but users who previously bought the game were not charged extra.1.13Version	Release date1.13.2	October 22, 20181.13.1	August 22, 20181.13 (Update Aquatic)	July 18, 20181.12Version	Release date1.12.2	September 18, 20171.12.1	August 3, 20171.12 (World of Color Update)	June 7, 20171.11Version	Release date1.11.2	December 21, 20161.11.1	December 20, 20161.11 (Exploration Update)	November 14, 20161.10Version	Release date1.10.2	June 23, 20161.10.1	June 22, 20161.10 (Frostburn Update)	June 8, 20161.9Version	Release date1.9.4	May 10, 20161.9.3	May 10, 20161.9.2	March 30, 20161.9.1	March 30, 20161.9 (Combat Update)	February 29, 20161.8Version	Release date1.8.9	December 9, 20151.8.8	July 28, 20151.8.7	June 5, 20151.8.6	May 25, 20151.8.5	May 22, 20151.8.4	April 17, 20151.8.3	February 20, 20151.8.2	February 19, 20151.8.1	November 24, 20141.8 (Bountiful Update)	September 2, 20141.7Version	Release date1.7.10	June 26, 20141.7.9	April 14, 20141.7.8	April 11, 20141.7.7	April 9, 20141.7.6	April 9, 20141.7.5	February 26, 20141.7.4	December 10, 20131.7.2 (The Update that Changed the World)	October 25, 20131.6Version	Release date1.6.4	September 19, 20131.6.2	July 8, 20131.6.1 (Horse Update)	July 1, 20131.5Version	Release date1.5.2	May 2, 20131.5.1	March 21, 20131.5 (Redstone Update)	March 13, 20131.4Version	Release date1.4.7	January 9, 20131.4.6	December 20, 20121.4.5	November 20, 20121.4.4	November 14, 20121.4.2 (Pretty Scary Update)	October 25, 20121.3Version	Release date1.3.2	August 16, 20121.3.1	August 1, 20121.2Version	Release date1.2.5	April 4, 20121.2.4	March 22, 20121.2.3	March 2, 20121.2.2	March 1, 20121.2.1	March 1, 20121.1Version	Release date1.1	January 12, 20121.0Version	Release date1.0.1 (Server only)	November 24, 20111.0.0	November 18, 2011');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

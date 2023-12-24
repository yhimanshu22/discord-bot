const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
     intents: [GatewayIntentBits.Guilds,
               GatewayIntentBits.GuildMessages,
               GatewayIntentBits.MessageContent,
               ] ,
    });

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    else{
        if (message.content === 'Hello') {
            message.reply('hello from bot');
        }
        else if (message.content === 'How are You') {
            message.reply('Fine, and you?');
        }
        else if (message.content === 'What are you doing') {
            message.reply('I am doing nothing, just waiting for you');
        }
        else if (message.content === 'me too') {
            message.reply('nice to meet you');
        }
        else {
           return message.reply('Hi from bot');
        }
    }

   

});

client.on('interactionCreate',async (interaction) => { 
    interaction.reply('Pong!');
});

client.login(TOKEN);
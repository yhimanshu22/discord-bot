const { REST, Routes }  = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTE4ODU3MTI2NTE1MDIzODgxMg.GC5nE8.2ED03xlpQ1lc8yWJQFUVjjLDFF8eIh04wbQ3y4');

(async ()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands('1188571265150238812'), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }

})();

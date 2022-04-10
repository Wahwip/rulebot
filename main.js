const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});
 
const prefix = '^';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Codelyon is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    } 
    else if (command == 'sepi'){
        client.commands.get('sepi').execute(message, args, Discord);
    }
    else if (command == 'halo'){
        client.commands.get('halo').execute(message, args, Discord);
    }
    else if (command == 'aturan') {
        client.commands.get('aturan').execute(message, args, Discord);
    }
});
 
client.login('OTYxNTcwMDc4MDg2ODIzOTc2.Yk656w.ezv-UBVMmc99LRxyv0TJJoXy3R0');
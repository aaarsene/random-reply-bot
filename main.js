const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const config = require('./settings/config.json');

client.on('ready', (message) => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  if (message.author.bot) return;

  let botIsMentioned = message.isMentioned(client.user);

  if (botIsMentioned) {
    let replies = JSON.parse(fs.readFileSync('./settings/replies.json', 'utf8'));
    let reply = randomItem(replies);
    message.channel.send(reply);
  }
});

client.login(config.token);


function randomItem(array) {
  return array[Math.floor(Math.random()*array.length)];
}

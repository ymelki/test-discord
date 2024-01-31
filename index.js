const {messageCreate,  Events, SlashCommandBuilder, Client, GatewayIntentBits, EmbedBuilder,Permissions, Message } = require('discord.js');
const Fuse = require('fuse.js');

const getDataFromMongoDB = require('./data'); // Assurez-vous que le chemin du fichier est correct
const coursData = getDataFromMongoDB();


const bot = new Client({
  intents: [GatewayIntentBits.Guilds,
           GatewayIntentBits.GuildMessages,
           GatewayIntentBits.MessageContent,
           GatewayIntentBits.GuildMessageReactions,
           GatewayIntentBits.DirectMessages,
   ]
   }
   );

// Configuration de Fuse.js
const options = {
 keys: ['cours'], // Champs à rechercher
 threshold: 0.6,   // Niveau de seuil pour la correspondance (ajustez selon vos besoins)
};

// Initialisation de Fuse avec les données et les options
const fuse = new Fuse(coursData, options);


bot.on('ready', function () {
 console.log("Je suis connecté !")
 bot.user.setActivity("test23");
 console.log(`Thunder bot is ready! Tag is ${bot.user.tag}`);


 
})

bot.on('messageCreate', (message) => {
 if (message.author.bot) return;

 const lowerContent = message.content.toLowerCase();
 // Utilisation de Fuse pour effectuer la recherche
 const result1 = fuse.search(lowerContent);
 const result=result1.map(item => item.item);

 // Affichage des résultats
 console.log("Resultat: "+ result);
   if (result.length > 0) {
     const lienHypertexte = '[Cliquez ici](https://www.example.com)';
     const resultString = result.map(
       part => `- ${part.title} </a> -  ${lienHypertexte}`).join('\n');
     message.reply(resultString);
   }
       
 }); 

 bot.login("MTIwMDg4ODQ4NTc3NTY4MzY2Ng.GSQrz7.4HY_zgX72mXdseQuq9zAa-7TcRDnsJyU39ofCk");
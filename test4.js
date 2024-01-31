const {messageCreate,  Events, SlashCommandBuilder, Client, GatewayIntentBits, EmbedBuilder,Permissions, Message } = require('discord.js');
const Fuse = require('fuse.js');
require('dotenv').config();



async function main() {

    const getDataFromMongoDB = require('./data'); // Assurez-vous que le chemin du fichier est correct
    const coursData =await getDataFromMongoDB();

   // console.table(coursData);
    console.log("je test");
   // console.table(coursData)
    
// Configuration de Fuse.js
const options = {
    keys: ['cours'], // Champs à rechercher
    threshold: 0.6,   // Niveau de seuil pour la correspondance (ajustez selon vos besoins)
};

// Initialisation de Fuse avec les données et les options
const fuse = new Fuse(coursData, options);



const bot = new Client({
    intents: [GatewayIntentBits.Guilds,
             GatewayIntentBits.GuildMessages,
             GatewayIntentBits.MessageContent,
             GatewayIntentBits.GuildMessageReactions,
             GatewayIntentBits.DirectMessages,
     ]
     }
     );

     
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
    
    // Affichage des résultats
    const formattedResult = result1.map(item => ({ 
        cours: item.item.cours ,
        lien : item.item.liens
    }));

        
    console.table(formattedResult);

    //console.log("Resultat: "+ result);
    if (result1.length > 0) {
        

    const resultString = formattedResult.map(
        part => `- ${part.cours} 
        Cliquez sur [ce lien](${part.lien})
        `).join('\n');
    console.log("Resultat : " + resultString);
    message.reply(`Les cours en liens sont " ${resultString}`);
    }
}); // Ajout de l'accolade fermante ici
bot.login(process.env.TOKEN);


}

main();

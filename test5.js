const {messageCreate,  Events, SlashCommandBuilder, Client, GatewayIntentBits, EmbedBuilder,Permissions, Message } = require('discord.js');
const Fuse = require('fuse.js');



const coursData = [
  { id: 'php-html', title: 'Ecrire du HTML de façon dynamique : La balise PHP', duration: '1 heure' },
  { id: 'variables', title: 'Stocké des chaines de caractères : Les variables', duration: '1 heure' },
  { id: 'concatenation', title: 'La concaténation', duration: '1 heure' },
  { id: 'numeric-type', title: 'Le type numérique', duration: '1 heure' },
  { id: 'conditions-if-else', title: 'Les conditions (if else)', duration: '1 heure' },
  { id: 'conditions-switch', title: 'Les conditions (switch)', duration: '1 heure' },
  { id: 'loops-for', title: 'Les boucles (for)', duration: '1 heure' },
  { id: 'function-call', title: 'Appel de fonctions', duration: '1 heure' },
  { id: 'arrays-indexed', title: 'Les tableaux indexé numériquement [partie 1]', duration: '1 heure' },
  { id: 'arrays-associative', title: 'Les tableaux associatifs [partie 2]', duration: '1 heure' },
  { id: 'arrays-foreach', title: 'Les boucles sur les tableaux (foreach) [partie 3]', duration: '1 heure' },
  { id: 'arrays-multidimensional', title: 'Les tableaux multidimensionnels [partie 4]', duration: '1 heure' },
  { id: 'function-creation1', title: 'La création de fonction [Partie 1]', duration: '1 heure' },
  { id: 'function-creation2', title: 'La création de fonction avec des paramètre [Partie 2]', duration: '1 heure' },
  { id: 'function-creation3', title: 'La création de fonction qui retourne une variable [Partie 3]', duration: '1 heure' },
  { id: 'algorithm-exercise', title: 'Exercice algorithmique', duration: '3 heures' },
  { id: 'debug', title: 'Debug', duration: '1 heure' },
  { id: 'ffd',   title: 'PHP: Failed to open stream: No such file or directory in => Vérifiz le chemin de votre indiquez à la ligne de votre erreur Installez lextension PHP Intelephense Puis vérifiez bien le chemin'
     , duration : 'ff', lien : 'http://google.fr'  }
];

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
  keys: ['title'], // Champs à rechercher
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
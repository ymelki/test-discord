const { MongoClient } = require('mongodb');

// Remplacez l'URL de connexion par celle de votre propre base de données MongoDB
const url = 'mongodb+srv://ymelki:Decembre2020@cluster0.ew68j8b.mongodb.net/';
const dbName = 'cours';
const collectionName = 'cours';
// Fonction principale asynchrone
async function getDataFromMongoDB() {
  // Connexion à la base de données
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect(); // Connexion au serveur MongoDB
    console.log('Connecté à la base de données');

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Récupération des données
    const query = {}; // Vous pouvez spécifier un filtre ici si nécessaire
    const result = await collection.find(query).toArray();

    console.log('Données récupérées :', result);
  } finally {
    await client.close(); // Fermeture de la connexion à la base de données
    console.log('Déconnecté de la base de données');
  }
}

// Appel de la fonction principale
getDataFromMongoDB();

const coursData = [
    { id: 'algo', title: 'Algo', duration: '1 heure' },
    { id: 'html-php', title: 'Ecrire du HTML de façon dynamique : La balise PHP', duration: '1 heure' },
    { id: 'variables', title: 'Stocké des chaines de caractères : Les variables', duration: '1 heure' },
    { id: 'concatenation', title: 'La concaténation', duration: '1 heure' },
    { id: 'numeric-type', title: 'Le type numérique', duration: '1 heure' },
    { id: 'conditions-if-else', title: 'Debug Les conditions (if else)', duration: '1 heure' },
    // ... Ajoutez d'autres parties du cours en suivant le même modèle
    { id: 'debug', title: 'Debug', duration: '1 heure' }
  ];
  const searchTerm = 'Debug';
const regex = new RegExp(searchTerm, 'i');

const matchingParts = coursData.filter(part => regex.test(part.title));
console.log(matchingParts);

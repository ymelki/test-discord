
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
    { id: 'debug', title: 'Debug', duration: '1 heure' }
  ];

  const rec="  html ";

  // Liste de mots à exclure
  const motsAExclure = [
    'de', 'je', 'que', 'et', 'les', 'la', 'le', 'un', 'une', 'du', 'au', 'aux', 'des', 'ce', 'cette', 'ces',
    'il', 'elle', 'nous', 'vous', 'leur', 'eux', 'si', 'pour', 'avec', 'sur', 'sous', 'dans', 'par', 'à', 'un', 'une',
    'est', 'sont', 'soit', 'sois', 'était', 'étaient', 'sera', 'serai', 'seront', 'as', 'a', 'ont', 'auras', 'aurait',
    'aussi', 'trop', 'peu', 'plus', 'moins', 'doit', 'devrait', 'peut', 'pourrait', 'être', 'avoir', 'avait', 'avez', 'avons',
    'aie', 'ait', 'aient', 'ayez', 'ayons', 'faire', 'fait', 'faits', 'faite', 'faites', 'façon', 'partie', 'parties',
    'prendre', 'prend', 'pris', 'prise', 'prises', 'prends', 'prendra', 'prendrai', 'prendrait', 'cours', 'chapitre', 'partie'
   ];
   console.log(rec);

// Retire les mots à exclure de la chaîne rec
const recFiltre = rec
  .toLowerCase()
  .split(/\s+/)
  .filter(mot => mot.trim() !== '' && mot.length > 2)
  .filter(mot => !motsAExclure.includes(mot))
  .join(' ');


  console.log(recFiltre);

// Crée une expression régulière avec tous les mots de la chaîne rec
const regex1 = new RegExp(recFiltre.split(/\s+/).join('|'), 'i');
const regex = new RegExp("\\b" + recFiltre.split(/\s+/).join('\\b|\\b') + "\\b", 'i');

// Filtrer le tableau en fonction de l'expression régulière
const result2 = coursData.filter(part => regex.test(part.title));
const result = coursData.filter(part => {
    const lowercaseTitle = part.title.toLowerCase();
     return lowercaseTitle.includes(recFiltre.trim()) && lowercaseTitle.length > 0 && recFiltre !== '';
});
console.log(result);
console.table(rec);

console.table(recFiltre);

console.log("rr"+recFiltre);
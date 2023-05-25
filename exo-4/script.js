// you can write js here

console.log('exo-4');

//Nous allons retravailler le contenu de ce tableau :
var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

 
//1. Utiliser une méthode pour enlever le dernier élément du tableau `secretMessage`.
let last = secretMessage.pop()
console.log (secretMessage)

//2. Utiliser une méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau.
let newLength = secretMessage.push("to","program")
console.log (secretMessage)

//3. Changer le mot 'easily' par 'right' en accédant au bon index du tableau.
//supprime 1 élément à partir de l'index 6, et insère "right"
var enleves = secretMessage.splice(6,1,"right")
console.log (secretMessage)

//4. Utiliser une méthode pour supprimer le premier élément du tableau.
// supprime 1 élément à partir de l'index 0
enleves = secretMessage.splice(0, 1)
console.log (secretMessage)

//5. Utiliser une méthode pour ajouter la chaine "Programming" en début de tableau.
// insère à l'index 0
enleves = secretMessage.splice(0, 0, 'Programming');
console.log (secretMessage)

//6. Utiliser une méthode pour remplacer la série de cinq mots : 'get', 'right', 'the', 'first', 'time' par un seul mot : 'know'.
// Exemple : supprime 2 éléments à partir de l'index 0, et insère "perroquet", "anémone" et"bleu"
// enleves = mesPoissons.splice(0, 2, "perroquet", "anémone", "bleu");

enleves = secretMessage.splice(5,5,"know" )
console.log (secretMessage)

//7. Utiliser la méthode `.join` pour afficher le message secret dans la console.
enleves = secretMessage.join ()
console.log (enleves)



// you can write js here

console.log('exo-5');

//Les baleines traduisent les phrases comme : 'Turpentine and turtles' par : 'UEIEAUE'.
//Comment ? Il y a trois règles simples :
//- pas de consonnes, que des voyelles
//- pas d'espace
//- toutes les lettres en majuscules (uppercase).

//Pour faire cette traduction, nous allons utiliser des boucles.


//1. Créer une variable `input` qui prend pour valeur n'importe quelle phrase ou mot à traduire.
// Faire n'importe quelle phrase qui me passe par la tête
var input = "Objectif : une semaine sans sucre ajoute"
console.log (input)

//2. Créer maintenant un tableau de lettres. Puisque la langue des baleines ne contient que des voyelles, créer une variable `vowels` de type tableau, contenant toutes les voyelles de l'alphabet.
var vowels = ["a","e","i","o","u","y"]
console.log (vowels)

//3. On aura besoin de stocker la chaine traduite dans un tableau. Pour cela, créer une variable `resultArray` dont la valeur est un tableau vide, pour le moment.

var resultArray = []


//4. Essayons maintenant de trouver toutes les voyelles dans notre chaine initiale : on peut le faire en vérifiant si chaque lettre de notre texte est une voyelle. Pour cela, on peut regarder si la première lettre est une voyelle, puis la deuxième, etc.
//Créer donc une boucle qui parcourt toutes les lettres de notre chaine de caractères. À l'intérieur de cette boucle, afficher la lettre courante dans la console.
console.log("--------------")
for (i=0 ; i < input.length ; i++)  {
 console.log (i,input [i])   
}

//5. Maintenant nous devons vérifier si la lettre courante est une voyelle ; autrement dit, si la lettre courante est une lettre du tableau `vowels`. Utiliser la méthode `indexOf` des tableaux pour le faire.
console.log("--------------")
for (i=0 ; i < input.length ; i++){
    console.log (vowels.indexOf (input [i]),input[i]);
}

//Note : le code du "4." a été dupliqué dans le code du "5." => en vrai le code du "4." (lignes 30 & 31) peuvent être supprimées étant donné que tout se retrouve dans le code du "5."

//6. Bonus : à la place de `indexOf`, écrire une seconde boucle pour trouver l'index de la voyelle recherchée.
//7. Si la lettre est une voyelle, utiliser la méthode `.push()` sur le tableau `resultArray` afin d'y ajouter la lettre courante `input[i]`. Vérifier que le tableau `resultArray` ne contient que des voyelles.
console.log("--------------")
function langageDeBaleine (){
    for (i=0 ; i < input.length ; i++) {
        for (j=0 ; j<vowels.length ; j++) {
            //console.log ((i,input [i]), (j, vowels [j]))  
            if (input [i].toLowerCase() === vowels [j]) {
               resultArray.push (input [i])
            } 
        }
    }
}
langageDeBaleine();
console.log (resultArray.join("").toUpperCase())

//8. En affichant la valeur de `resultArray`, on observe qu'il y a des virgules entre chaque élément. Utiliser les méthodes `join()` et `toUpperCase()` pour un bon formatage.

//ligne 57 : ".join("")" et ".toUpperCase()"


//9. Lancer votre programme, chanter la traduction et être heureux de tout ce que vous êtes parvenu à faire jusqu'alors !

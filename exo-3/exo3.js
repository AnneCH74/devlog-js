// you can write js here
console.log('exo-3')

//Créer une variable `var playerInput = prompt("Your choice ( rock, paper, scissors) ?")` correspondant au choix de l'utilisateur
var playerInput = prompt ("Your choice ( rock, paper, scissors) ?")

let mauvaisChoix = "Veuillez choisir entre rock, paper ou scissors"

//Créer une fonction `getPlayerChoice()` qui prend en paramètre un seul argument `playerInput`
function getPlayerChoice (playerInput){
    
    //Nous devons être insensibles à la casse : nous allons dans un premier temps utiliser la fonction [`toLowerCase()`] pour transformer en minuscules la chaine de caractères `playerInput`
    playerInput = playerInput.toLowerCase()

    //écrire une condition qui vérifie que la valeur entrée par l'utilisateur est bien l'une de ces trois valeurs attendues (rock, paper ou scissors)
    if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") {
        //Si c'est le cas, la fonction retourne la chaine de caractères `playerInput`
        return (playerInput)
    //sinon afficher un message d'erreur dans la console.
    }else{
        return mauvaisChoix
    }

}
//Pour afficher le résultat de la condition dans la console
console.log(getPlayerChoice(playerInput))


//C'est maintenant à l'ordinateur de faire un choix
//Créer une nouvelle fonction `getComputerChoice()` qui ne prend pas de paramètre
function getComputerChoice(){
    //A l'intérieur, en utilisant la fonction [`Math.random()`], tirer un nombre aléatoire entre 0 et 2 inclus

       let getRandomInt = Math.floor(Math.random() * 3)
      console.log(getRandomInt)

    //Suivant le résultat, la fonction doit retourner une valeur parmi {'rock', 'paper', 'scissors'}
if (getRandomInt  == 0) {
    return "rock"
} if (getRandomInt == 1) {
 return "paper"
} if (getRandomInt == 2) {
   return "scissors"
}
}

//Pour afficher le résultat de la fonction getComputerChoice() dans la console
console.log(getComputerChoice())


//Créer une fonction `findWinner()` qui prend deux paramètres, `playerChoice` et `computerChoice`
//Cette fonction va comparer les choix et va retourner un de ces 3 résultats : 
//Tied : égalité
//Won : l'utilisateur a gagné
//Lost : l'utilisateur a perdu




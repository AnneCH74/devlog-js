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
    if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors" || playerInput == "bomb") {
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
        console.log(getRandomInt)
        return "rock"
    } if (getRandomInt == 1) {
        console.log(getRandomInt)
        return "paper"
    } if (getRandomInt == 2) {
        console.log(getRandomInt)
        return "scissors"
    }
}

//Pour afficher le résultat de la fonction getComputerChoice() dans la console
//console.log(getComputerChoice())


//Créer une fonction `findWinner()` qui prend deux paramètres, `playerChoice` et `computerChoice`
//Cette fonction va comparer les choix et va retourner un de ces 3 résultats : 
//Tied : égalité
//Won : l'utilisateur a gagné
//Lost : l'utilisateur a perdu

function findWinner(playerChoice , computerChoice){
     
    if (playerChoice == "bomb"){
        return "Won"
    }else if (playerChoice == computerChoice) {
        return "Tied"
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        return "Won"
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        return "Won"
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        return "Won"
    } else {
        return "lost"
    }
}

console.log (findWinner(getPlayerChoice(playerInput) , getComputerChoice()))


//1ère partie :Créer une fonction `playGame()` à l'intérieur de laquelle créer une variable `uChoice` qui prend pour valeur le résultat de la fonction `getPlayerChoice()`;
// ajouter l'argument de votre choix : 'rock', 'paper', ou 'scissors'.
//Récupérer le résultat de l'appel de fonction `getComputerChoice()` dans une autre variable : `computerChoice`.

// 2ème partie : Affichons maintenant le vainqueur.
// A l'intérieur de la fonction `playGame()`, appeller la fonction `findWinner()` avec en paramètre les variables `uChoice` et `computerChoice`. Pour connaitre le vainqueur vous devez mettre l'appel de la fonction à l'intérieur d'un `console.log()`.
//Maintenant appeler la fonction `playGame()`

function playGame(){
    var uChoice = getPlayerChoice ("rock")
    var computerChoice = getComputerChoice ()
   //console.log(uChoice,computerChoice)

function findWinner(uChoice,computerChoice) {
    if (uChoice == Won) {
        return "player"
    } else if (computerChoice == Won) {
        return "computer"
    } else{
        return "Tied"
    }
   }
}
//Afficher chacune de ces variables dans la console.
// /!\Bien penser à appeler la fonction playGame() afin qu'elle s'affiche dans la console
playGame()
console.log (findWinner(getPlayerChoice(playerInput) , getComputerChoice()))


//On va ajouter un petit code secret (cheat code) afin d'être certain de gagner dans tous les cas : si l'utilisateur entre 'bomb' alors il a gagné. Modifier votre code en fonction.
// Cf lignes 16 et 62

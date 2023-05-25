// you can write js here
console.log('hello from file');

//Cette variable permet d'afficher une boite de dialogue et de paramétrer grâce à l'utilisateur la variable kelvins
var kelvins= prompt("Quelle est la température en Kelvins aujourd'hui ?")
// La variable nommée Celsius correspond à la valeur de la variable "kelvins" - 273
let Celsius = kelvins - 273;
console.log (Celsius);

//la variable nommée Fahrenheits correspond à la valeur de la variable Celsius *(9/5)+32
let Fahrenheits = Celsius*(9/5) +32;
//code initial = console.log (Fahrenheits); En ajoutant la fonction Math.floor + la variable entre parenthèses cela permet d'arrondir à l'entier le plus proche le
console.log (Math.floor(Fahrenheits));

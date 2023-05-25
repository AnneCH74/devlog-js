// you can write js here
console.log('exo-2')

//Ces variables permettent d'afficher deux boites de dialogue, l'une après l'autre, et de paramétrer grâce à l'utilisateur les variables jour et heure
//var TestOnDay= prompt ("Merci de renseigner le jour que vous souhaitez tester")
//var TestOnHour= prompt ("Merci de renseigner l'heure que vous souhaitez tester")
let isTesting = true
if (isTesting) {
    var date = prompt ("Merci de renseigner le jour que vous souhaitez tester")
    var hour = prompt ("Merci de renseigner l'heure que vous souhaitez tester")
}else{
    var date = myDate.getDay()
    var hour = myDate.getHours()
}


//céation d'une variable assignée à un objet Date 
const myDate = new Date ( '22 May,2023 8:00')
console.log (myDate)

//Initialisation de la variable semaine et de la variable week-end
let semaine ="C'est la semaine"
let weekend = "C'est le week-end"
//let hour = myDate.getHours()


//Déclaration d'une variable de type string contenant le message à afficher si nous sommes un jour de week-end
//let messageAAfficherWeekEnd = ("C'est le week-end !");
const jourSemaine = myDate.getDay()
console.log (jourSemaine)

//Création d'une variable de type boléen 
//Test activé (true): lancer notre programme en rentrant manuellement le jour et l'heure pour le tester.
//Test désactivé (false): faire tourner le programme avec le jour et l'heure du moment.

console.log (isTesting)


//La méthode "Intl.DateTimeFormat" permet d'afficher le nom complet du jour
//var options = { weekday: 'long'};
//console.log(new Intl.DateTimeFormat('fr-FR', options).format(myDate));
// Mardi
//console.log(new Intl.DateTimeFormat('de-DE', options).format(myDate));
// Dienstag


//Déclaration d'une variable de type string contenant le message à afficher si nous sommes un jour de semaine ou un jour de week-end
//Attention système américain : 0=dimanche, 1=lundi, etc.
//Cette opération se découpe en deux parties
//Première partie : déterminer si nous sommes un jour de la semaine (de 1 à 5 inclus) ou du week-end (6 et 0) => résultat de type boléen
function isWeek (myDateParameter) {
    return myDateParameter > 0 
    && myDateParameter < 6
}
//console.log (isWeek(myDate))
//Deuxième partie : déterminer le message à afficher dans la console en fonction du jour de la semaine que nous sommes
//if (isWeek (myDate)) {
 //console.log (semaine)
//}else{
 //console.log (weekend)
//}

//En conservant ce premier test, ajouter la nouvelle condition suivante : le vendredi après 17h, afficher le message du weekend.
//Pour cela, créer une nouvelle variable correspondant à l'heure actuelle, toujours à partir de notre variable initiale _myDate_, puis tester cette variable.
function hourFriday (date) {
 return hour >= 17
 && date == 5
}


//créer une nouvelle condition si nous sommes un lundi avant 9h, afficher le message du weekend.
function hourMonday(date) {
    return hour < 9
    && date == 1
   }
   
   if (isWeek(date) 
   && (hourMonday(date) == false)
   && (hourFriday (date) == false)) {
   console.log (semaine)
   }else{
       console.log (weekend)
   }









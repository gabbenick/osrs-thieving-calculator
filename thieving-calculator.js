/* Bidimensional array getting all the data from thievable npcs from oldschool runescape 
and organizing all the data into the same indexes. [0] name, [1] level and [2] exp */

const thieving = [
    ['Man', 1, 8], ['Farmer', 10, 14.5], ['Fem HAM', 15, 18.5],
    ['Mal HAM', 20, 22.2], ['Al-Kharid warrior', 25, 26], ['Villager', 30, 8],
    ['Rogue', 32, 36.5], ['Cave goblin', 36, 40], ['Master Farmer', 38, 43],
    ['Guard', 40, 46.8], ['Fremmenik Citizen', 45, 65], ['Bearded Pollnivnian Bandit', 45, 65],
    ['Desert Bandit', 53, 79.4], ['Knight of Ardougne', 55, 84.3], ['Pollnivian Bandit', 55, 84.3],
    ['Yanille Watchman', 65, 137.5], ['Menaphite Thug', 65, 137.5], ['Paladin', 70, 151.8],
    ['Gnome', 75, 198.3], ['Hero', 80, 273.3], ['Vyre', 82, 306.9], ['Elf', 85, 353.3],
    ['TzHaar-Hur', 90, 103.4]
];

/* Code to transform my thieving array into an object.

var thievingObject = {};
for (var i = 0; i < thieving.length; i++)
    thievingObject[i] = {'npc': thieving[i][0], 'lvl': thieving[i][1], 'exp': thieving[i][2]}
console.log(thievingObject) */

const thievingObject = {
    '0': { npc: 'Man', lvl: 1, exp: 8 },
    '1': { npc: 'Farmer', lvl: 10, exp: 14.5 },
    '2': { npc: 'Fem HAM', lvl: 15, exp: 18.5 },
    '3': { npc: 'Mal HAM', lvl: 20, exp: 22.2 },
    '4': { npc: 'Al-Kharid warrior', lvl: 25, exp: 26 },
    '5': { npc: 'Villager', lvl: 30, exp: 8 },
    '6': { npc: 'Rogue', lvl: 32, exp: 36.5 },
    '7': { npc: 'Cave goblin', lvl: 36, exp: 40 },
    '8': { npc: 'Master Farmer', lvl: 38, exp: 43 },
    '9': { npc: 'Guard', lvl: 40, exp: 46.8 },
    '10': { npc: 'Fremmenik Citizen', lvl: 45, exp: 65 },
    '11': { npc: 'Bearded Pollnivnian Bandit', lvl: 45, exp: 65 },
    '12': { npc: 'Desert Bandit', lvl: 53, exp: 79.4 },
    '13': { npc: 'Knight of Ardougne', lvl: 55, exp: 84.3 },
    '14': { npc: 'Pollnivian Bandit', lvl: 55, exp: 84.3 },
    '15': { npc: 'Yanille Watchman', lvl: 65, exp: 137.5 },
    '16': { npc: 'Menaphite Thug', lvl: 65, exp: 137.5 },
    '17': { npc: 'Paladin', lvl: 70, exp: 151.8 },
    '18': { npc: 'Gnome', lvl: 75, exp: 198.3 },
    '19': { npc: 'Hero', lvl: 80, exp: 273.3 },
    '20': { npc: 'Vyre', lvl: 82, exp: 306.9 },
    '21': { npc: 'Elf', lvl: 85, exp: 353.3 },
    '22': { npc: 'TzHaar-Hur', lvl: 90, exp: 103.4 }
  }

/* Now the code gets the user level input and runs a for loop to show the user 
what npcs he can pickpocket, the level required for each npc and the exp. */

let lvlInput = '80';
let objectLength = Object.keys(thievingObject).length;

console.log(objectLength)
for(i = 0; i < thievingObject.length; i++) {
    if (lvlInput >= thievingObject[i].lvl[i]) {
console.log('npc: ' + thievingObject.npc[i] + ' lvl: ' + 
thievingObject.lvl[i] + ' exp per action: ' + thievingObject.exp[i]);
}}

/* let npcInput = 'man'

switch (npcInput) {
    case 'man': 
       if (lvlInput > thievingObject.lvl[0]) {
        console.log(successRate = (0.2449 * lvlInput + 69.7551));
       }
        break;
    
    default:console.log('select a valid npc')
} */



/* function actionsAndTimeNeeded (expNeeded, expPerAction, expPerHour, hoursPerDay) {
    expToFloat = parseFloat(expNeeded);
    actions = expToFloat / expPerAction;
    time = expToFloat / expPerHour;
    days = time / hoursPerDay;
    console.log("Total exp: " + Math.ceil(expToFloat));
    console.log("Total actions " + Math.ceil(actions));
    console.log("Total time:" + Math.ceil(time));
    console.log("Total days:" + Math.ceil(days));
}
 */
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

/* Code to transform every element from thieving [[name, level, exp]]
into an independent array constructed from those elements. */

/* 
let npc = [];
let lvl = [];
let exp = [];
for (i = 0; i < thieving.length; i++) {
    npc.push(thieving[i][0]);
    lvl.push(thieving[i][1]);
    exp.push(thieving[i][2]);
}
console.log(npc);  
console.log(lvl);
console.log(exp);
*/
/* Then i get all the console.log data and paste it into an object. */

const thievingObject = { npc: ['Man', 'Farmer', 'Fem HAM', 'Mal HAM', 'Al-Kharid warrior', 'Villager', 'Rogue', 'Cave goblin', 'Master Farmer', 'Guard', 'Fremmenik Citizen', 'Bearded Pollnivnian Bandit', 'Desert Bandit', 'Knight of Ardougne', 'Pollnivian Bandit', 'Yanille Watchman', 'Menaphite Thug', 'Paladin', 'Gnome', 'Hero', 'Vyre', 'Elf', 'TzHaar-Hur'], 
lvl: [1, 10, 15, 20, 25, 30, 32, 36, 38, 40, 45, 45, 53, 55, 55, 65, 65, 70, 75, 80, 82, 85, 90], 
exp: [8, 14.5, 18.5, 22.2, 26, 8, 36.5, 40, 43, 46.8 , 65, 65, 79.4, 84.3, 84.3, 137.5, 137.5, 151.8, 198.3, 273.3, 306.9, 353.3, 103.4], }




/* Now the code gets the user level input and runs a for loop to show the user 
what npcs he can pickpocket, the level required for each npc and the exp. */

let lvlInput = '80'

for(i = 0; i < thievingObject.npc.length; i++) {
    if (lvlInput >= thievingObject.lvl[i]) {
console.log('npc: ' + thievingObject.npc[i] + ' lvl: ' + 
thievingObject.lvl[i] + ' exp per action: ' + thievingObject.exp[i]);
}}

let npcInput = 'man'

switch (npcInput) {
    case 'man': 
       if (lvlInput > thievingObject.lvl[0]) {
        console.log(successRate = (0.2449 * lvlInput + 69.7551));
       }
        break;
    
    default:console.log('select a valid npc')
}



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
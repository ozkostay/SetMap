import Team from './team';
import Character from './character';

const myTeam = new Team();

const hero1 = new Character('Hero-1');
const hero2 = new Character('Hero-2');
const hero3 = new Character('Hero-3');
const hero5 = new Character('Hero-5');
myTeam.add(hero1);
myTeam.add(hero2);
myTeam.add(hero3);
myTeam.add(hero1);
myTeam.add(hero5);
myTeam.toArray();
console.log(myTeam.members);

// Метож addAll
const myTeamAll = new Team();
myTeamAll.addAll(hero1, hero2, hero3, hero1);
myTeamAll.toArray();
console.log(myTeamAll.members);

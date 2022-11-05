import Team from './team';
import Character from './character';

const myTeam = new Team();
myTeam.add(new Character('111'));
myTeam.add(new Character('222'));
myTeam.add(new Character('333'));
myTeam.add(new Character('111'));
myTeam.add(new Character('555'));
myTeam.toArray();
console.log(myTeam.members);

// Метож addAll
const myTeamAll = new Team();
myTeamAll.addAll(new Character('Hero-1'), new Character('Hero-2'), new Character('Hero-3'), new Character('Hero-1'));
myTeamAll.toArray();
console.log(myTeamAll.members);

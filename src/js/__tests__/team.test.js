import Team from '../team';
import Character from '../character';

test('Team add()', () => {
  const myTeam = new Team();
  const hero1 = new Character('Hero-1');
  const hero2 = new Character('Hero-2');
  myTeam.add(hero1);
  myTeam.add(hero2);
  myTeam.add(hero1);
  const testSet = new Set();
  testSet.add(hero1);
  testSet.add(hero2);
  expect(myTeam.members).toEqual(testSet);
});

test('Team addAll()', () => {
  const myTeam = new Team();
  const hero1 = new Character('Hero-1');
  const hero2 = new Character('Hero-2');
  myTeam.addAll(hero1, hero2, hero1);
  const testSet = new Set();
  testSet.add(hero1);
  testSet.add(hero2);
  expect(myTeam.members).toEqual(testSet);
});

test('Team toArray()', () => {
  const myTeam = new Team();
  const hero1 = new Character('Hero-1');
  const hero2 = new Character('Hero-2');
  myTeam.addAll(hero1, hero2);
  const testSet = [];
  testSet.push(hero1);
  testSet.push(hero2);
  myTeam.toArray();
  expect(myTeam.members).toEqual(testSet);
});

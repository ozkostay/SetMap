import Team from '../team';
import Character from '../character';

test('Team add()', () => {
  const myTeam = new Team();
  myTeam.add(new Character('111'));
  myTeam.add(new Character('222'));
  const testSet = new Set();
  testSet.add({ name: '111' });
  testSet.add({ name: '222' });
  expect(myTeam.members).toEqual(testSet);
  myTeam.add(new Character('111'));
  expect(myTeam.members).toEqual(testSet);
});

test('Team addAll()', () => {
  const myTeam = new Team();
  myTeam.addAll(new Character('111'), new Character('222'));
  const testSet = new Set();
  testSet.add({ name: '111' });
  testSet.add({ name: '222' });
  expect(myTeam.members).toEqual(testSet);
  myTeam.addAll(new Character('111'));
  expect(myTeam.members).toEqual(testSet);
});

test('Team toArray()', () => {
  const myTeam = new Team();
  myTeam.addAll(new Character('111'), new Character('222'));
  const testSet = [];
  testSet.push({ name: '111' });
  testSet.push({ name: '222' });
  myTeam.toArray();
  expect(myTeam.members).toEqual(testSet);
});

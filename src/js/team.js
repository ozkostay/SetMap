export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(item) {
    try {
      this.members.forEach((element) => {
        if (element.name === item.name) {
          throw new Error(`элемент ${item.name} уже имеется`);
        }
      });
      this.members.add(item);
    } catch (element) {
      console.log(element);
    }
  }

  addAll(...heroes) {
    for (const arg of heroes) {
      try {
        this.members.forEach((element) => {
          if (element.name === arg.name) {
            throw new Error(`элемент ${arg.name} уже имеется`);
          }
        });
        this.members.add(arg);
      } catch (element) {
        // console.error(element);
      }
    }
  }

  toArray() {
    this.members = [...this.members];
    return this.members;
  }
}

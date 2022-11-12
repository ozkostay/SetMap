export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(item) {
    try {
      if (this.members.has(item)) {
        throw new Error(`элемент ${item.name} уже имеется`);
      }
      this.members.add(item);
    } catch (element) {
      console.log(element);
    }
  }

  addAll(...heroes) {
    for (const arg of heroes) {
      try {
        if (this.members.has(arg)) {
          throw new Error(`элемент ${item.name} уже имеется`);
        }
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

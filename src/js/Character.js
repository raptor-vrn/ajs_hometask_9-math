export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this.stoned = false;
    this.attack = 100;
  }

  get attack() {
    let attack = (this.attackS - (this.distance - 1) * 10);
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return Math.round(attack);
  }

  set attack(value) {
    this.attackS = value;
    return this.attack;
  }

  get stoned() {
    return this.stonedS;
  }

  set stoned(value) {
    if (value) {
      this.stonedS = true;
    }
  }
}

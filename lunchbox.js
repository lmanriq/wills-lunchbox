class LunchBox {
  constructor(box) {
    this.owner = box.owner;
    this.material = box.madeOf;
    this.shape = box.shape;
    this.color = box.color;
    this.handle = true;
    this.snacks = [];
  }

  acquireSnack(snack){
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }

  findHealthySnacks() {
    var healthySnacks = [];
    for (var i = 0; i < this.snacks.length; i ++) {
      if (this.snacks[i].healthy === true) {
        healthySnacks.push(this.snacks[i]);
      }
    }
    return healthySnacks;
  }
}

module.exports = LunchBox;

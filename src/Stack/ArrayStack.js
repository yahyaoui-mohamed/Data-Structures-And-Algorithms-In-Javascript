function Stack() {
  this.data = [];
  this.head = -1;

  this.push = function (val) {
    this.data.push(val);
    this.head++;
  }

  this.pop = function () {
    if (this.isEmpty()) return;
    this.data.length = this.head;
    this.head--;
  }

  this.top = function () {
    return this.data[this.head];
  }

  this.isEmpty = function () {
    return this.head === -1;
  }
  this.print = function () {
    for (val of this.data) {
      console.log(val);
    }
  }
}

export default Stack;
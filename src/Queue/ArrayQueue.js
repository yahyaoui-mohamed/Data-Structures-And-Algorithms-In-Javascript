function Queue() {
  this.data = [];

  this.push = function (val) {
    this.data.push(val);
  }

  this.pop = function () {
    return this.data.shift();
  }

  this.front = function () {
    if (this.data.length) {
      return this.data[0];
    }
    else {
      return null;
    }
  }

  this.rear = function () {
    if (this.data.length) {
      return this.data[this.data.length - 1];
    }
    else {
      return null;
    }
  }

  this.empty = function () {
    return !this.data.length;
  }
}

export default Queue;
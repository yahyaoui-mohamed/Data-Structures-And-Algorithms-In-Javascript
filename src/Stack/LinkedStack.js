import LinkedList from "../LinkedList/LinkedList.js";

function Stack() {
  this.data = new LinkedList();
  this.push = function (val) {
    this.data.append(val);
  }

  this.pop = function () {
    this.data.deleteLast();
  }

  this.top = function () {
    return this.data.getLast();
  }

  this.isEmpty = function () {
    return !this.data.head;
  }
  this.print = function () {
    let iterator = this.data.head;
    while (iterator) {
      console.log(iterator.val);
      iterator = iterator.next;
    }
  }
}

export default Stack;
function Node(val, next) {
  this.val = val ? val : 0;
  this.next = next ? next : null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
  
  this.print = function () {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.val + " -> ";
      curr = curr.next;
    }
    str += "NULL";
    console.log(str);
  }

  this.append = function (val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
    }
    else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  this.prepend = function (val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  this.deleteFirst = function () {
    if (!this.head) return;
    let current = this.head.next;
    this.head.next = null;
    this.head = current;
  }

  this.deleteValue = function (val) {
    if (!this.head) return;
    if (this.size === 1 && this.head.val === val) {
      this.head = null;
      this.size--;
      return;
    }
    let curr = this.head, prev;
    while (curr.next) {
      if (curr.val === val) {
        prev.next = curr.next;
        this.size--;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  this.deleteAt = function (index) {
    if (!this.head) return;
    if (index === 0) {
      let current = this.head;
      this.head = this.head.next;
      current = null;
      this.size--;
    }
    else if (index > this.size - 1) {
      throw new Error("Index out of bound.");
    }
    else {
      let current = this.head, prev;
      while (current) {
        if (index === 0) {
          prev.next = current.next;
          current = null;
          return;
        }
        prev = current;
        current = current.next;
        index--;
      }
    }
  }
  this.getLast = function () {
    if (!this.head) return null;
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    return curr.val;
  }
  this.insertAt = function (index, val) {
    if (index === 0) {
      this.prepend(val);
      this.size++;
      return;
    }
    let current = this.head, prev;
    while (current) {
      prev = current;
      current = current.next;
      index--;
      if (index === 0) {
        let node = new Node(val);
        prev.next = node;
        node.next = current;
        this.size++;
        return;
      }
    }
  }

  this.reverse = function () {
    if (!this.head || this.size === 1) return;
    let current = this.head, prev = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  this.indexOf = function (value) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (i === value) {
        return current.val;
      }
      i++;
      current = current.next;
    }
    return -1;
  }

  this.contains = function (value) {
    let current = this.head;
    while (current) {
      if (current.val === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  this.deleteLast = function () {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head, prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    current = null;
  }
}

export default LinkedList;
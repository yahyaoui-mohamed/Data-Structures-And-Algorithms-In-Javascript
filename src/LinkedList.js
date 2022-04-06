function Node(val, next) {
  this.val = val ? val : 0;
  this.next = next ? next : null;
}

function LinkedList() {
  let head = null;
  this.size = 0;

  this.print = function () {
    let curr = head;
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
    if (!head) {
      head = node;
    }
    else {
      let curr = head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  this.prepend = function (val) {
    let node = new Node(val);
    node.next = head;
    head = node;
    this.size++;
  }

  this.deleteFirst = function () {
    if (!head) return;
    let current = head.next;
    head.next = null;
    head = current;
  }

  this.deleteValue = function (val) {
    if (!head) return;
    if (this.size === 1 && head.val === val) {
      head = null;
      this.size--;
      return;
    }
    let curr = head, prev;
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
    if (!head) return;
    if (index === 0) {
      let current = head;
      head = head.next;
      current = null;
      this.size--;
    }
    else if (index > this.size - 1) {
      throw new Error("Index out of bound.");
    }
    else {
      let current = head, prev;
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

  this.insertAt = function (index, val) {
    if (index === 0) {
      this.prepend(val);
      this.size++;
      return;
    }
    let current = head, prev;
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
    if (!head || this.size === 1) return;
    let current = head, prev = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    head = prev;
  }

  this.indexOf = function (value) {
    let current = head;
    let i = 0;
    while (current) {
      if (current.val === value) {
        return i;
      }
      i++;
      current = current.next;
    }
    return -1;
  }

  this.contains = function (value) {
    let current = head;
    while (current) {
      if (current.val === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  this.deleteLast = function () {
    if (!head) return;
    if (!head.next) {
      head = null;
      return;
    }
    let current = head, prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    current = null;
  }
}
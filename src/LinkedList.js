function Node(value, next){
  this.value = value ? value : 0;
  this.next = next ? next : null;
}

function LinkedList(){
  this.head = null;
  this.add = function(val){
    let node = new Node(val);
    if(this.head === null){
      this.head = node;
    }
    else{
      let curr = this.head;
      while(curr.next !== null){
        curr = curr.next;
      }
      curr.next = node;
    }
  }
  this.print = function(){
    let curr = this.head;
    while(curr !== null){
        console.log(curr.value);
        curr = curr.next;
    }
  }
}
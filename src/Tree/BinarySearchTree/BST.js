class TreeNode{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  insert(root, val){
    if(root === null){
      return new TreeNode(val);
    }
    if(val < root.val){
      root.left = this.insert(root.left, val);
    }
    else if(val > root.val){
      root.right = this.insert(root.right, val);
    }
    return root;
  }

  delete(root, val){
    if(!root) return null;
    if(root.val === val){
      if(!root.left && !root.right) return null;
      if (!root.left && root.right) return root.right;
      if (root.left && !root.right) return root.left;
      let node = root.right;
      while(node.left){
        node = node.left;
      } 
      root.val = node.val;
      root.right = this.delete(root.right, root.val);
    } 
    if (val < root.val) {
      root.left = this.delete(root.left, val)
    }
    if(val > root.val){
      root.right = this.delete(root.right, val);
    }
    return root;
  }

  contains(root, val){
    if(!root) return false;
    if(root.val === val) return true;
    if(val < root.val){
      return this.contains(root.left, val);
    }
    if (val > root.val) {
      return this.contains(root.right, val);
    }
  }
}

export default BinarySearchTree;
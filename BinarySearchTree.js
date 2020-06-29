class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // If the tree is empty then this key being inserted is the root node of the tree
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        /* If the tree already exists, then start at the root, 
           and compare it to the key you want to insert.
           If the new key is less than the node's key 
           then the new node needs to live in the left-hand branch */
        else if (key < this.key) {
            /* If the existing node does not have a left child, 
               meaning that if the `left` pointer is empty, 
               then we can just instantiate and insert the new node 
               as the left child of that node, passing `this` as the parent */
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            /* If the node has an existing left child, 
               then we recursively call the `insert` method 
               so the node is added further down the tree */
            else {
                this.left.insert(key, value);
            }
        }
        // Similarly, if the new key is greater than the node's key 
        //    then you do the same thing, but on the right-hand side */
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
    find(key) {
        // If the item is found at the root then return that value
        if (this.key == key) {
            return this.value;
        }
        /* If the item you are looking for is less than the root 
           then follow the left child.
           If there is an existing left child, 
           then recursively check its left and/or right child
           until you find the item */
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        /* If the item you are looking for is greater than the root 
           then follow the right child.
           If there is an existing right child, 
           then recursively check its left and/or right child
           until you find the item */
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        // You have searched the tree and the item is not in the tree
        else {
            throw new Error('Key Error');
        }
    }
    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            /* If the node only has a left child, 
               then you replace the node with its left child */
            else if (this.left) {
                this._replaceWith(this.left);
            }
            /* And similarly if the node only has a right child 
               then you replace it with its right child */
            else if (this.right) {
                this._replaceWith(this.right);
            }
            /* If the node has no children then
               simply remove it and any references to it 
               by calling "this._replaceWith(null)" */
            else {
                this._replaceWith(null);
            }
        }
        // if key is less than this key, recursive left
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        // if key is greater than this.key, then recursive right
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        // if key is not found, throw error
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        // if the node has a parent
        if (this.parent) {
            // wire up left and right pointers
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }
            // set the parent if node is not empty or null.
            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            // if node exists and isn't empty
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            // if node is empty
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
    // find the minimum on the left side of the tree. recursive until left is null.
    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

    // in-order traversal
    dfsInOrder(values = []) {
        if (this.left) {
            values = this.left.dfsInOrder(values);
        }

        values.push(this.value);

        if (this.right) {
            values = this.right.dfsInOrder(values);
        }
        return values;
    }

    // pre-order traversal
    dfsPreOrder(values = []) {
        values.push(this.value);

        if (this.left) {
            values = this.left.dfsPreOrder(values);
        }
        if (this.right) {
            values = this.right.dfsPreOrder(values);
        }
        return values;
    }

    // post-order traversal
    dfsPostOrder(values = []) {
        if (this.left) {
            values = this.left.dfsPostOrder(values);
        }
        if (this.right) {
            values = this.right.dfsPostOrder(values);
        }

        values.push(this.value);
        return values;
    }

    // breadth first search
    bfs(tree, values = []) {
        const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }

        return values;
    }
}

// let bin = [35,25,15,14,19,27,89,79,90,91]
// 14,19,15,27,25,79,91,90,89,35 - post
// let bin = [8,6,5,7,10,9,11]
// 5,7,6,9,11,10,8 - post

// let bin = [25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90]

function main(bin) {
  let tree = new BinarySearchTree;
  bin.map(item => tree.insert(item,item));
  console.log(tree)
  console.log(tree.dfsInOrder())
  console.log(tree.dfsPreOrder())
  console.log(tree.dfsPostOrder())
}

console.log(main(bin))

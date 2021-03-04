// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(new_data) {
        if (new_data > this.data) {
            !this.right ? this.right = new Node(new_data) : this.right.insert(new_data)
        } else if (new_data <= this.data) {
            !this.left ? this.left = new Node(new_data) : this.left.insert(new_data)
        }
    }

    contains(data) {
        if (this.data === data)  {
            return this;
        }

        if (this.data < data && this.right) {
             return this.right.contains(data)
        } else if (this.data > data && this.left) {
            return this.left.contains(data);
        }

        return null
    }
}
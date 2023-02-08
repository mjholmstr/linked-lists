// LinkedList class 
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node containing 'value' to the end of the list
    append(value) {

        if (this.head === null) {
            this.head = new Node(value);
        } else {
            //set tail
            let tail = this.head;
            //cycle through node tails until next is null
            while (tail.nextNode != null) {
                tail = tail.nextNode;
            }
            //once at end node, append newNode as next
            tail.nextNode = new Node(value);
        }
    }

    // Add a new node containing 'value' to the start of the list
    prepend(value) {
        let checkNode = null;
        if (this.head != null) {
            checkNode = this.head;
        }
        this.head = new Node(value);
        this.head.nextNode = checkNode;
    }

    // Return the total number of nodes in the list
    size() {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode != null) {
            counter++;
            currentNode = currentNode.nextNode
        }
        return counter;
    }

    // Return the first node in the list
    head() {
        return this.head;
    }

    // Return the last node in the list
    tail() {
        let currentNode = this.head;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    // Return the node at the given 'index'
    at(index) {
        let currentNode = this.head;
        for ( let i = 0 ; i < index ; i++) {
            currentNode = currentNode.nextNode;
            if (currentNode == null) {
                return "No item exists for index";
            }
        }
        return currentNode;
    }

    // Remove the last element from the list
    pop() {
        let currentNode = this.head;
        let previousNode = null;

        while (currentNode.nextNode != null) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        previousNode.nextNode = null;
    }

    // Return true if the passed value is in the list
    contains(value) {
        let currentNode = this.head;

        while (currentNode != null) {
            if (currentNode.value === value) {
                return true;
            }
            return false;
        }
    }

    // Return index of node containing value or null 
    find(value) {
        let currentNode = this.head;
        let nodeCount = 0;

        while (currentNode != null) {
            if (currentNode.value === value) {
                return nodeCount;
            }
            currentNode = currentNode.nextNode;
            nodeCount++;
        }
        return null;
    }

    // Represent LinkedList objects in easy to read string
    toString() {
        let currentNode = this.head;
        let stringList = "";

        while (currentNode != null) {
            stringList += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        return (stringList += "null");
    }

    // Insert new node at given index
    insertAt(value, index) {
        if (this.head == null) {
            this.prepend(value);
        } else {
            let currentNode = this.head;
            let previousNode = null;

            for (let i = 0 ; i < index ; i++) {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
                if (currentNode == null) {
                    break;
                }
            }
            const addedNode = new Node(value);
            previousNode.nextNode = addedNode;
            addedNode.nextNode = currentNode;
        }
    }


    // Remove node at given index
    removeAt(index) {
        if (this.head == null) {
            return "Empty list";
        }

        let currentNode = this.head;
        let previousNode = null;
        for (let i = 0 ; i < index ; i++) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            if (currentNode == null) {
                return "There is no item at this index";
            }
        }
        previousNode.nextNode = currentNode.nextNode;
    }
}


//Node class
class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

const testList = new LinkedList();
testList.prepend('test 1');
testList.append('test 3');
testList.prepend('test 2')
console.log(testList.toString());
console.log(testList.size())
console.log(testList.tail())
testList.insertAt('test 111', 1)
console.log(testList.toString())
testList.removeAt(1)
console.log(testList.toString())
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


    // Return index of node containing value or null 


    // Represent LinkedList objects in easy to read string
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
console.log(testList);
console.log(testList.size())
console.log(testList.tail())
console.log(testList.at(1));
console.log(testList.at(2));
console.log(testList.at(3));
console.log(testList.at(0));
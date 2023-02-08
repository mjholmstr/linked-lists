// LinkedList class 
class LinkedList {
    constructor() {
        this.head = null;
    }

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
}


//Node class
class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

const testList = new LinkedList();
testList.append('test 1');
testList.append('test 2');
console.log(testList);
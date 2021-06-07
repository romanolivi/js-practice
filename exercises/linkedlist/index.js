// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data; 
        this.next = next;
    }

     
}
 
class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while(node) {
            counter++;
            node = node.next
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        
        let node = this.head;
        
        while(node) {
            if(!node.next) {
                return node;
            }

            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        } else {
            this.head = this.head.next;
        }
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }
        
        let previous = this.head; 
        let node = this.head.next;

        while(node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(int) {
        if (!this.head) {
            return null;
        }

        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === int) {
                return node;
            }
            counter++;
            node = node.next
        }

        return null;
    } 

    removeAt(int) { 
        if (!this.head) {
            return;
        }

        if (int === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(int - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }
  
    insertAt(data, int) {
        
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (int === 0) {
            this.head = new Node(data, this.head)
        }

        const previous = this.getAt(int - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

}



module.exports = { Node, LinkedList };

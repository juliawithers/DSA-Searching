// QUEUE - First in First Out (FIFO)

class _Node {
    // create a node that will always have next as null because we are pointing in the other direction. null will always be first in the queue
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    // create variables first and last so we can track the queue (firstNode -> node2 -> node3 -> ...-> LastNode)
    constructor() {
        this.first = null;
        this.last = null;
    }

    // there are two primary functions for QUEUE, enqueue(data) - insertion and dequeue() - removal
    // enqueue can only insert at the end of the queue @ this.last
    // dequeue can only remove at the beginning of the queue @ this.first

    enqueue(data) {
        // create a new node = {value: data, next: null}
        const node = new _Node(data);

        // if first is null, it means the queue is empty so make this node equal to this.first
        if (this.first === null) {
            this.first = node;
        }
        // if this.last is true (meaning that it is not null and there is a queue), then we must make sure the last node is pointing to the new node (firstNode -> node2 -> node3 -> ...-> LastNode)
        if (this.last) {
            this.last.next = node;
        }

        // reset this.last to node as it is now the end of the queue
        this.last = node;
    }

    dequeue() {
        // if there is no queue
        if (this.first === null) {
            return;
        }
        // set node to the first node
        const node = this.first;
        // change the this.first variable so that it now equals the second node
        this.first = this.first.next;

        // if the node is equal to last, that means the queue will be empty after this removal
        if (node === this.last) {
            this.last = null;
        }

        // return the value of the node being dequeued.
        return node.value;
    }
}

module.exports = Queue;
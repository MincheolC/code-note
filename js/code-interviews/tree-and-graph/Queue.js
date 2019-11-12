class Queue {
    constructor(...items) {
        this.queue = [...items];
    }

    enqueue(...items) {
        return this.queue.push(...items);
    }

    dequeue() {
        return this.queue.shift();
    }
}

module.exports = Queue;
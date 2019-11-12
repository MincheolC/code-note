const Queue = require('../Queue');

describe('Queue', () => {
    it('should enqueue items', () => {
        const queue = new Queue(4, 5);
        expect(queue.enqueue(1, 2, 3)).toEqual(5);
        expect(queue.queue).toEqual([4, 5, 1, 2, 3]);
    });

    it('should dequeue item', () => {
        const queue = new Queue(4, 5);
        queue.enqueue(1, 2, 3)
        expect(queue.dequeue()).toEqual(4);
    });
});
package LinkedList;

public class LinkedListNode {
    private Character val;
    private LinkedListNode next;

    LinkedListNode(Character c) {
        this.val = c;
    }

    LinkedListNode next() {
        return next;
    }

    Character get() {
        return val;
    }

    void setNext(LinkedListNode next) {
        this.next = next;
    }
}

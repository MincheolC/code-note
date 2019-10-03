package LinkedList;

import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsNull.nullValue;


public class LL21Test {
    LinkedListNode buildLinkedList(Character[] charList) {
        LinkedListNode prev = new LinkedListNode(charList[0]);
        LinkedListNode head = prev;
        for(int i = 1; i < charList.length; i++ ) {
            LinkedListNode node = new LinkedListNode(charList[i]);
            prev.setNext(node);
            prev = node;
        }
        return head;
    }

    @Test
    public void testDeleteDuplicatesInLinkedList() {
        Character[] charList = new Character[]{'a', 'b', 'c', 'd', 'a', 'b', 'e'};
        LinkedListNode head = buildLinkedList(charList);

        LL21.deleteDuplicates(head);
        LinkedListNode node = head;

        assertThat(node.get(), is('a'));
        node = node.next();
        assertThat(node.get(), is('b'));
        node = node.next();
        assertThat(node.get(), is('c'));
        node = node.next();
        assertThat(node.get(), is('d'));
        node = node.next();
        assertThat(node.get(), is('e'));
        node = node.next();
        assertThat(node, is(nullValue()));
    }
}

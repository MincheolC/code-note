package LinkedList;

import java.util.HashSet;

public class LL21 {
    public static void deleteDuplicates(LinkedListNode n) {
        HashSet<Character> set = new HashSet<>();
        LinkedListNode prev = null;
        while(n != null) {
            if (set.contains(n.get())) {
                prev.setNext(n.next());
            } else {
                set.add(n.get());
                prev = n;
            }
            n = n.next();
        }
    }
}

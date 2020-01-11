package Sort;

public class Listy {
    int[] arr;
    int size;
    int max = Integer.MAX_VALUE;

    public Listy(int[] arr) {
        this.arr = arr;
        this.size = arr.length;
    }

    public int elementAt(int i) {
        if (i >= size) {
            return -1;
        }
        return arr[i];
    }

    public int findIndex(int value) {
        boolean isFound = false;

        int maxIndex = max;
        int minIndex = 0;
        int index = 0;
        while(!isFound) {
            if (elementAt(maxIndex) == value) {
                isFound = true;
                index = maxIndex;
            } else if (elementAt(minIndex) == value) {
                isFound = true;
                index = minIndex;
            } else if (elementAt(maxIndex) == -1 || elementAt(maxIndex) > value) {
                maxIndex = (maxIndex + minIndex) / 2;
            } else {
                minIndex = maxIndex;
                maxIndex = maxIndex + minIndex/2;
            }
        }
        return index;
    }
}

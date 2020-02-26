package Sort;

public class Listy2 {
    int[] arr;

    public Listy2(int[] arr) {
        this.arr = arr;
    }

    private void track(int x) {

    }

    public int getRankOfNumber(int x) {
        int sameCount = 0;
        int lowerCount = 0;

        for (int i = 0; i < arr.length; i++ ) {
            if (arr[i] == x) {
                sameCount++;
            } else if (arr[i] < x) {
                lowerCount++;
            }
        }

        return sameCount + lowerCount - 1;
    }
}

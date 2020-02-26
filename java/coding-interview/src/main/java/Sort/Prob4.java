package Sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Prob4 {

    public static void main(String[] args) throws IOException {
        int arraySize, input;
        int[] arr;
        Listy listy;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        st = new StringTokenizer(br.readLine());
        arraySize = Integer.parseInt(st.nextToken());
        input = Integer.parseInt(st.nextToken());

        arr = new int[arraySize];
        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < arraySize; i++ ) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        listy = new Listy(arr);
        System.out.println(listy.findIndex(input));
    }

}

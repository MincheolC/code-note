package Sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Prob5 {
    public static void main(String[] args) throws IOException {
        int arraySize, inputSize, input;
        int[] arr;
        Listy2 listy2;

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        st = new StringTokenizer(br.readLine());

        arraySize = Integer.parseInt(st.nextToken());
        inputSize = Integer.parseInt(st.nextToken());

        arr = new int[arraySize];
        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < arraySize; i++ ) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        listy2 = new Listy2(arr);

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < inputSize; i++ ) {
            input = Integer.parseInt(st.nextToken());
            System.out.println(listy2.getRankOfNumber(input));
        }
    }
}

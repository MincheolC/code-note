package PaintFill;

import java.util.Random;

public class PaintFill {
    private int[][] view;
    private int size;

    public PaintFill(int size) {
        this.view = new int[size][size];
        this.size = size;
        this.initialize();
    }

    private static int getRandomNumberInRange(int min, int max) {
        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }

        Random r = new Random();
        return r.nextInt((max - min) + 1) + min;
    }

    private void initialize() {
        for(int i = 0; i < size; i++) {
            for(int j = 0; j < size; j++) {
                view[i][j] = getRandomNumberInRange(0, 4);
            }
        }
    }

    public void print() {
        for(int i = 0; i < size; i++) {
            for(int j = 0; j < size; j++) {
                System.out.print(view[i][j] + " ");
            }
            System.out.println();
        }
    }

    public void paintFill(int i, int j, int newColor) {
        paintFill(i, j, newColor, view[i][j]);
    }

    private void paintFill(int i, int j, int newColor, int oldColor) {
        if (i < 0 || j < 0 || view[i][j] != oldColor) {
            return ;
        }
        view[i][j] = newColor;
        paintFill(i - 1, j, newColor, oldColor); // Top
        paintFill(i + 1, j, newColor, oldColor); // Bottom
        paintFill(i, j - 1, newColor, oldColor); // Left
        paintFill(i, j + 1, newColor, oldColor); // Right
    }
}

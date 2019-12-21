package PaintFill;

public class Main {
    public static void main(String[] args) {
        PaintFill paintFill = new PaintFill(5);
        System.out.println("<Before>");
        paintFill.print();

        paintFill.paintFill(2, 3, 3);
        System.out.println("<After>");
        paintFill.print();
    }
}

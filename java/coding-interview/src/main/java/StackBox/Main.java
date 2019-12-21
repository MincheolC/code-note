package StackBox;

public class Main {
    public static void main(String[] args) {
        StackBox stackBox = new StackBox(1000);

        stackBox.printBoxList();
        System.out.println("===");
        System.out.println(stackBox.getMaxHeight());

    }
}

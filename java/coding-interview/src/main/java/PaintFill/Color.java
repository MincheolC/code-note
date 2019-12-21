package PaintFill;

public enum Color {
    WHITE(0),
    RED(1),
    GREEN(2),
    BLUE(3),
    BLACK(4);

    private int value;

    Color(int value) { this.value = value; }

    public int getValue() { return value; }
}

public class Card {
    private ShapeType shapeType;
    private int number;

    public Card (ShapeType shapeType, int number) {
        this.shapeType = shapeType;
        this.number = number;
    }

    public ShapeType getShapeType() {
        return shapeType;
    }

    public int getNumber() {
        return number;
    }
}

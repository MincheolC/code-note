package StackBox;

public class Box {
    private int height;
    private int width;
    private int depth;

    public Box(int height, int width, int depth) {
        this.height = height;
        this.width = width;
        this.depth = depth;
    }

    public int getDepth() {
        return depth;
    }

    public int getHeight() {
        return height;
    }

    public int getWidth() {
        return width;
    }

    public boolean canBeAbove(Box box) {
        if (box.getHeight() > height && box.getDepth() > depth && box.getWidth() > width) {
            return true;
        }
        return false;
    }
}

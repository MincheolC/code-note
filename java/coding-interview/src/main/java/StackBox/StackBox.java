package StackBox;

import CustomUtils.CustomUtils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class StackBox {
    ArrayList<Box> boxList;
    int boxCount;

    public StackBox(int count) {
        boxList = new ArrayList<Box>(count);
        boxCount = count;

        for (int i = 0; i < count; i++ ) {
            boxList.add(createRandomSizeBox());
        }

    }

    private Box createRandomSizeBox() {
        return new Box(
            CustomUtils.getRandomNumberInRange(1, 10),
            CustomUtils.getRandomNumberInRange(1, 10),
            CustomUtils.getRandomNumberInRange(1, 10)
        );
    }

    public void printBoxList() {
        for(int i = 0; i < boxCount; i++ ) {
            Box box = boxList.get(i);
//            System.out.println("Box[" + i + "] - height: " + box.getHeight() + ", width: " + box.getWidth() + ", depth: " + box.getDepth());
            System.out.println(box.getHeight() + " " + box.getWidth() + " " + box.getDepth());
        }
    }

    public int getMaxHeight() {
        Collections.sort(boxList, new BoxComparator());
        int maxHeight = 0;
        int[] stackMap = new int[boxList.size()];

        // 박스 풀을 조절? = 가방에 최적해
        for (int i = 0; i < boxList.size(); i++ ) {
            int height = this.getMaxHeight(boxList, i, stackMap);
            maxHeight = Math.max(height, maxHeight);
        }
        return maxHeight;
    }

    private int getMaxHeight(ArrayList<Box> boxes, int bottomIndex, int[] stackMap) {
        if (bottomIndex < boxes.size() && stackMap[bottomIndex] > 0) {
            return stackMap[bottomIndex];
        }

        Box bottomBox = boxes.get(bottomIndex);
        int maxHeight = 0;
        for(int i = bottomIndex + 1; i < boxes.size(); i ++ ) {
            if (boxes.get(i).canBeAbove(bottomBox)) {
                int height = this.getMaxHeight(boxes, i, stackMap);
                maxHeight = Math.max(height, maxHeight);
            }
        }
        maxHeight += bottomBox.getHeight();
        stackMap[bottomIndex] = maxHeight;
        return maxHeight;
    }

    class BoxComparator implements Comparator<Box> {
        @Override
        public int compare(Box b1, Box b2) {
            return b2.getHeight() - b1.getHeight();
        }
    }
}

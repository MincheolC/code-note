import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class Deck {
    private ArrayList<Card> cardList = new ArrayList<Card>();

    public Deck() {
        for (int i = 1; i <= 13; i++ ) {
            cardList.add(new Card(ShapeType.SPADES, i));
            cardList.add(new Card(ShapeType.HEARTS, i));
            cardList.add(new Card(ShapeType.DIAMONDS, i));
            cardList.add(new Card(ShapeType.CLUBS, i));
        }
        this.shuffle();
    }

    public void shuffle() {
        if (cardList.size() > 0)
            Collections.shuffle(cardList, new Random(System.currentTimeMillis()));
    }

    public Card getCard() {
        int lastIndex = cardList.size() - 1;
        Card card = cardList.get(lastIndex);
        cardList.remove(lastIndex);
        return card;
    }

    public int size() {
        return cardList.size();
    }
}

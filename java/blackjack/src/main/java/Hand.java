import java.util.ArrayList;

public abstract class Hand {
    private ArrayList<Card> cardList = new ArrayList<Card>();

    public void addCard(Card c) {
        cardList.add(c);
    };

    public int score() {
        int sum = 0;
        for(int i = 0; i < cardList.size(); i++ ) {
            sum = sum + cardList.get(i).getNumber();
        }
        return sum;
    };
}

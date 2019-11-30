import java.util.Scanner;

public class BlackJackGame {
    public static void main(String[] args) {
        Deck deck = new Deck();
        UserHand userHand = new UserHand();
        DealerHand dealerHand = new DealerHand();

        System.out.println("Welcome~ BlackJack Game started!!");
        System.out.println("Hits");

        // deal
        for(int i = 0; i < 2; i++) {
            userHand.addCard(deck.getCard());
            dealerHand.addCard(deck.getCard());
        }
        System.out.println("User current score : " + userHand.score());

        String cmd;
        Scanner scan = new Scanner(System.in);

        while(true) {
            System.out.print("input : ");
            cmd = scan.nextLine();

            if (cmd.equals("stand")) {
                while(dealerHand.score() < 17) {
                    dealerHand.addCard(deck.getCard());
                }
                break;
            } else if (cmd.equals("deal")) {
                userHand.addCard(deck.getCard());
                if (userHand.score() > 22) {
                    System.out.println("You Lose...");
                    return;
                }
                System.out.println("User current score : " + userHand.score());
            } else {
                System.out.println("Wrong command");
            }
        }
        int dealerScore = dealerHand.score();
        int userScore = userHand.score();

        System.out.println("Dealer score : " + dealerScore + ", Your score : " + userScore);
        if (dealerScore > 21 || (dealerScore < userScore)) {
            System.out.println("You win!!");
        } else {
            System.out.println("You Lose...");
        }
    }
}

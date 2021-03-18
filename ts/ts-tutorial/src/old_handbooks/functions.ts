console.log('\n===== Functions =====');
/*
 * Optional Parameters & Default-initialized
 */
function optionalParams(a: number, b?: number): number {
  if (!b) return a;
  return a + b;
}

function defaultInitialized(a: number, b = 2): number {
  return a + b;
}

console.log(
  '[Optional Parameters & Default-initialized] ',
  optionalParams(1, 2),
  defaultInitialized(1)
);

/*
 * Rest Parameters
 */

function restParams(owner: string, ...restUsers: string[]) {
  return owner + ' ' + restUsers.join(' ');
}
console.log('[Rest Parameters] ', restParams('Joseph', 'Samuel', 'Lucas', 'MacKinzie'));

/*
 * This
 */
interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

const deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

const cardPicker = deck.createCardPicker();
const pickedCard = cardPicker();

console.log('[This] card: ' + pickedCard.card + ' of ' + pickedCard.suit);

/*
 * This in callbacks
 */

interface UIElement {
  addClickListener(onclick: (this: void, c: Card) => void): void;
}

class Handler {
  info: string | undefined;
  onClickBad = (c: Card) => {
    this.info = c.suit;
  };
}

const uiElement: UIElement = {
  addClickListener: (onclick) => {
    const card: Card = { suit: 'spade', card: 1 };
    onclick(card);
  },
};
const h = new Handler();
uiElement.addClickListener(h.onClickBad);

/*
 * Overload
 */

const suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  if (typeof x == 'object') {
    const pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x == 'number') {
    const pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

const myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 },
];

const pickedCard1 = myDeck[pickCard(myDeck)];
console.log('[Overload1] card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);

const pickedCard2 = pickCard(15);
console.log('[Overload2] card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);

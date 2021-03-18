"use strict";
console.log('\n===== Functions =====');
/*
 * Optional Parameters & Default-initialized
 */
function optionalParams(a, b) {
    if (!b)
        return a;
    return a + b;
}
function defaultInitialized(a, b = 2) {
    return a + b;
}
console.log('[Optional Parameters & Default-initialized] ', optionalParams(1, 2), defaultInitialized(1));
/*
 * Rest Parameters
 */
function restParams(owner, ...restUsers) {
    return owner + ' ' + restUsers.join(' ');
}
console.log('[Rest Parameters] ', restParams('Joseph', 'Samuel', 'Lucas', 'MacKinzie'));
const deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
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
class Handler {
    constructor() {
        this.onClickBad = (c) => {
            this.info = c.suit;
        };
    }
}
const uiElement = {
    addClickListener: (onclick) => {
        const card = { suit: 'spade', card: 1 };
        onclick(card);
    },
};
const h = new Handler();
uiElement.addClickListener(h.onClickBad);
/*
 * Overload
 */
const suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (typeof x == 'object') {
        const pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == 'number') {
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
//# sourceMappingURL=functions.js.map
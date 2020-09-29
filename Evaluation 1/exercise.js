"use strict";

const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

class Deck {
    constructor() {
        this.deck = new Array();

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }

    shuffle() {
        for (let repeat = 0; repeat < Math.floor(getRandomInt(1, 8)); repeat++) {
            this.deck = this.deck.slice(0, this.deck.length / 2) // use Faro shuffle technique
                .flatMap((card, i) => [card, this.deck[i + (this.deck.length / 2)]]);
        }
        return this.deck;
    }

}

// class Player {
//     constructor() {
//         this.one = _deck.splice(0, 5);
//         this.two = _deck.splice(0, 5);
//     }

//     initalDiscard(drawCard) {
//         drawCard = _deck.shift();
//         for (let each of suits) {
//             if (drawCard === `8 of ${each}`) {
//                 _deck.shuffle();
//             }
//         }
//         return drawCard;
//     }
    
//     discard() {
//         if (drawCard === null) this.initalDiscard();

//     }

//     hand() {
//         for (let each of this.one) {
//             console.log(each);
//         }
//     }

//     searchForMatch(drawCard, playCard) {
//         for (let each of playCard) {
//             if (each === drawCard) {
//                 this.discard(each);
//             }
//         }
//     }

//     takeTurn() {
//         this.discard();
//         this.searchForMatch(this.hand(), this.one);
//     }

//     playGame() {
//         // keep playing until there's a winner
//         while (!this.isDone()) {
//             this.takeTurn();
//         }
//     }

//     isDone() {
//         return this.one.isEmpty() || this.two.isEmpty();
//     }
// }

let _deck = new Deck().shuffle();
// let drawCard = null;
console.log(_deck);

// let player1 = new Player();
// console.log(player1.playGame());
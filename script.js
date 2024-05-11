// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
//
// for (let i = 0; i < friends.length; i++) {
//     string += friends[i];
//     if (i <= string.length - 1) {
//         string += ', ';
//     }
// }
//
// console.log(string)

// for

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = friends.join(', ');
// console.log(string)

// join()


const cards = [
    'карточка-1',
    'карточка-2',
    'карточка-3',
    'карточка-4',
    'карточка-5',
];

// cards.splice(0, 3);
// console.log(cards);
//splice()

// const index = cards.indexOf('карточка-2');
// console.log(index);
// indexOf()

// const newCard = 'нова-карточка';
// cards.splice(2, 0, newCard);
// console.log(cards)
//splice() or add

const indexToUpdate = 2;
const newvalue = 'оновлена-карточка';
cards[indexToUpdate] = newvalue;
console.log(cards);
//update for index
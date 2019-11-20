// const a = 100;
// console.log(a);
//
// let b = 1000;
// console.log(b);

// var a = 100;
//
// a = 10;
// a = 1;
//
// console.log(a)


// {
//     let x = 0;
//     console.log(x);
//     {
//         console.log('inside :' + x )
//     }
// }

// console.log(x);


// let x = prompt('Enter size: ');
// if (x < 5) {
//     console.log('small size');
// } else if (x < 10) {
//     console.log('right size!');
// } else {
//     console.log('big size');
// }
// && == and
// || == or
// ! == not

// if (x % 2 === 0 && x < 10 && x >= 5) {
//     console.log('even and right size');
// }
//
// if (x % 2 !== 0 && (x < 5 || x >= 10)) {
//     console.log('odd and wrong size');
// }


// let color = prompt('Enter color');
//
// if ( color === 'red') {
//     console.log('Krasnyi');
// } else if ( color === 'blue') {
//     console.log('Sinii');
// } else if ( color === 'green') {
//     console.log('Zelenyi');
// } else {
//     console.log('Unknown color!');
// }
//
// switch (color) {
//     case 'red':
//         console.log('krasnyi');
//         break;
//     case 'blue':
//         console.log('sinii');
//         break;
//     case 'green':
//         console.log('zelenyi');
//         break;
//     default:
//         console.log('unknown color!');
// }

//
// let array = [];
// for (let i = 0; i <=10 ; i++) {
//     console.log(i);
//     array[i] = 10 - i
// }
//
// console.log(array);
//
//
// let j = 0;
// while (j < 10) {
//     console.log("" + j + " - " + array[j]);
//     j++;
// }
//
// let k = 0;
// do {
//     console.log(k);
//     k++;
// } while (k < 0);
//
// console.log(k);
// console.log(array.length);
//
// for (i in [1, 2, 3]) {
//     console.log(i = 10);
// }
//
// function print(value) {
//     console.log(value);
// }
//
// print('Hello world!');
//
// function multiply(value) {
//     return value * 10
// }
// print(multiply(100));
//
// const myFunc = function (a, b) {
//     return a + b;
// };
// print(myFunc(1, 2));

// let key = 'size';
// const table = {
//     legs: 2,
//     'onTop': ['yogurt', 'note', 'phone'],
//     material: 'wood',
//     [key]: 'medium'
// };
//
// table['color'] = 'brown';
// table.place = 'Ground Floor';
//
// console.log(table);
// console.log(table.color);
// console.log(table['color']);
// console.log(table.onTop);
// console.log(table['onTop'][0]);
// console.log(table['place']);
//
// // table.color = 'white';
// // console.log(table);
//
//
// let person = {
//     firstName: 'Alisher',
//     lastName: 'Sartmamatov',
//     getFullName: function () {
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// };
//  person.getFullName();
//

let Donald = {
  name: 'Donald',
  color: 'white',
  old: '1 year',
  voice: 'Krya Krya!',
  getStr: function () {
      console.log(`${this.name}, ${this.color}, ${this.old}`)
  },
  say: function () {
      console.log(`${this.voice}`)
  },
};

Donald.getStr();
Donald.say();




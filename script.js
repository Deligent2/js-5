// const a = [1, 2, 3, 0, 4, 5, 6];
// const b = a.map(num => num * num);
// console.log(b);


// const a = [1, 2, 3, 0, 4, 5, 6];
// const b= a.every(num => num > 0);
// if (b) {
//   console.log('Все элементы в массиве больше нуля.');
// } else {
//   console.log('Не все элементы в массиве больше нуля.');
// }


// const a = [1, 2, -3, 0, 4, -5, 6];
// const b = a.some(num => num < 0);
// if (b) {
//   console.log('В массиве есть отрицательные элементы.');
// } else {
//   console.log('В массиве нет отрицательных элементов.');
// }


// const a = [1, 2, -3, 0, 4, 5, -6];
// const b = a.filter(num => num < 0);
// console.log(b);


// const a = [1, -2, 3, 0, 4, -5, 6];
// const b = a.filter(num => num % 2 === 0);
// console.log(b)


// const a = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even'];
// const b = a.filter(num => num.length > 5);

// console.log(b);


// const a = [1, 2, -3, 0, -4, 5, -6];
// const b = a.filter(num => num < 0);
// const c = b.length;

// console.log(`Количество отрицательных чисел в массиве: ${c}`);


// const a = [1, 2, 3, 4];
// const b = ['a', 'b', 'c', 'd'];
// const c = [...a, ...b];
// console.log(c);


// const a = [2, 3, 4, 5];
// const b = 'hello world';
// a.push(b);
// console.log(a);


// const a = [2, 3, 4, 5];
// const b = 'hello world';
// const c = b.split('');
// const d = [...a, ...c];
// console.log(d)


// const a = [2, 3, 4, 5];
// const b = 'hello world';
// const c = b.split('');
// const d = [...a, ...c, ...a];
// console.log(d);


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
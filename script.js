// let date = new Date();
// let now = new Date();
// console.log(now);

// let dateMilliseconds = Date.parse("2010-10-10");
// console.log(dateMilliseconds);
// console.log(Date.now() - dateMilliseconds)


// // Создать дату 18 декабря 2019 года, 12 часов, 20 минут


// let date1 = new Date(2019, 11, 18, 12, 20);
// console.log(date1);

// // Вывести какой день недели было 4 марта 2000 года  


// let date2 = new Date(2000, 02, 04);
// console.log(date2.getDay());


// // Вывести дату в формате dd.mm.yyyy hh:mm из количества 
// // миллисекунд: 1590749435756

// let date3 = new Date(1590749435756);
// console.log(`${date3.getDate()}. ${date3.getHours()} .${date3.getFullYear()}. ${date3.getMonth()}`);




// Генераторы

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// let sequence = generateSequence();
// // let val1 = sequence.next();
// // console.log(val1.value);
// // let val2 = sequence.next();
// // console.log(val2.value);
// // let val3 = sequence.next();
// // console.log(val3);

// for (let val of sequence) {
//     console.log(val);
// }

// // Создать генератор, который возвращает на каждый вызов четное число 
// // из промежутка, переданного в аргументы генератора: 
// // generator(from, to)

// function* generateSequence(from, to) {
//     for (let i = from; i <= to; i++)
//         if (i % 2 == 0)
//             yield i;
// }
// let sequence = generateSequence(0, 20);
// for (let value of sequence) {
//     console.log(value);
// }

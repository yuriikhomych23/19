//два способи створення регулярних виразів

// let regExp = new RegExp(); // приймає два параметри: стрічку і флажок 
// let regExp = /expresion/flags

// стрічкові методи які використовують патерни
// ''.split()
// ''.search()
// ''.match()

// RegExp.test() // тестує стрічку по тому патерну який ми вказуємо, повертає bolluen
// RegExp.exec() // показує кількість співпдінь в стрічці

//..............................
// let regExp = /Lviv/;

// console.log(regExp.test('I love Lviv')); // true
// console.log(regExp.test('Lviv I love')); // true
// console.log(regExp.test('Lvivs')); // true
// console.log(regExp.test('Lvi')); // false
//.......................................




// let regExp = /^Lviv/; // каретка, відповідає за початок стрічки

// console.log(regExp.test('I love Lviv')); // false
// console.log(regExp.test('Lviv I love')); // true
// console.log(regExp.test('Lvivs')); // true
// console.log(regExp.test('Lvi')); //false




// let regExp = /^Lviv$/; // якщо починаєть і закінчується на Lviv

// console.log(regExp.test('I love Lviv')); // false
// console.log(regExp.test('Lviv I love')); // false
// console.log(regExp.test('Lvivs')); // false
// console.log(regExp.test('Lvi')); //false
// console.log(regExp.test('Lviv')); // True




//Діапазон 

//[]: прописується в квадратних дужках, вказуємо що ми хочемо бачити але в кількості 1 літери 
//[ars]: a, r, s
//[a-z] всі літери в нижньому регістріа але тільки одна 
//[A-Z] всі літери в верхньому регістріа але тільки одна 
//[а-я] всі кириличні літери 




//Or | - або 

// let rexExp = /Santorini|Sant/

// console.log(rexExp.test('Santorini')); // true
// console.log(rexExp.test('Sant')); // true
// console.log(rexExp.test('San')); // false




// квантифікатори: ?, +, *, {n}, {n, m} {n,}
// let regExp = /^iPhone 11 Pro( Max)?$/
// console.log(regExp.test('iPhone 11 Pro')); // true
// console.log(regExp.test('iPhone 11 Pro Max')); // true

//? - повторюваність попереднього символу 0 або 1 раз: або він або його немає
//+ - повторюваність попередного символу 1 або більше раз, до безкінечності 
// \d - любе число 
// console.log(/^\d+$/.test('1')); // true
// console.log(/^\d+$/.test('12121311313')); //true
// console.log(/^\d+$/.test('123111111111111112112231')); // true
// console.log(/^\d+$/.test('a')); // false
// console.log(/^\d+$/.test('a1')); // false
// console.log(/^\d+$/.test('1a')); // false
// console.log(/^\d+$/.test(''))// false

//* - повторюваність попереднього символу або виразу 0 або більше раз 
// console.log(/^\d*$/.test('')); // true
// console.log(/^\d*$/.test('12121311313')); //true
// console.log(/^\d*$/.test('123111111111111112112231')); // true
// console.log(/^\d*$/.test('a')); // false
// console.log(/^\d*$/.test('a1')); // false
// console.log(/^\d*$/.test('1a')); // false
// console.log(/^\d*$/.test(''))// true


//{n} - повторюваність попереднього символу або виразу n разів 
// console.log(/^\d{3}$/.test('1')); // false
// console.log(/^\d{3}$/.test('11'));//false
// console.log(/^\d{3}$/.test('111')); // true 
// console.log(/^\d{3}$/.test('1111')); // false


//{n, m} - повторюваність попереднього символу або виразу від n до m  разів 

// console.log(/^\d{3,5}$/.test('1')); // false
// console.log(/^\d{3,5}$/.test('11')); // false
// console.log(/^\d{3,5}$/.test('111')); // true 
// console.log(/^\d{3,5}$/.test('1111')); // true 


//{n,} - повторюваність попереднього символу або виразу від n до безкінечності

// console.log(/^\d{4,}$/.test('1')); // false
// console.log(/^\d{4,}$/.test('11')); // false
// console.log(/^\d{4,}$/.test('111')); // false
// console.log(/^\d{4,}$/.test('1111')); // true




//ЕКРАНУВАННЯ - \
// \
// / 
// []
// {}
// ()
// ? 
// +
// *
// . 
// ^
// $
// |


// '27/02/2020'

// let regExp = /^\d{2}\/\d{2}\/\d{4}$/;

// console.log(regExp.test('27/02/2020')); // true
// console.log(regExp.test('27/02/20200')); // false 


//task
// 22.03.2020 23.59
// let dataReg = /^\d{2}\.\d{2}.\d{4}\s\d{2}:\d{2}$/
// console.log(dataReg.test('22.03.2020 23:59')); // true 


// //task 
// let number = /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
// console.log(number.test('+38(096)-196-69-86')); // true 
// console.log(number.test('+38(096)-196wejd-69-86')); // false 





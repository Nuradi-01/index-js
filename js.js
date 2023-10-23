//Первый урок

let str = "lorem";//string
let num = 123 //number
let bo = true; // boolean
//Если использовать typeof покажет какой тип данных
console.log(str,num,bo);

let name = prompt('Ваше имя');
let adress = prompt("Ваша Почта");
let phone = +prompt('Ваш номер телефона');

console.log(`Студент: ${name}. Адрес: ${adress}. Номер: ${phone}`);

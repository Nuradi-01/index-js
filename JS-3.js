//1
// let person = {
//     name: 'John',
//     age: 25,
//     job: "developer"
// };

// let car = {
//     brand: "Toyota",
//     model: 'Camry',
//     year:   2020,
//     color: "black",
// }


//2

//2,1
// function Person(name,age,job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }

// let person1 = new Person('John',25,'developer');
// console.log(person1);


//2,2
// function car(brand,model,year,color) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.color = color;
// }

// let car_1 = new car("ford",'focus',2018,'black');
// console.log(car_1);


//3 
// const person = {
//     name: "Boris",
//     age: 32,
//     job: "deveplor",
// };

// person.name = 'VLAD';
// person['age'] = 22;

// console.log(person);
//4 и 5
// let cat = {};

// cat.name = "Barbos";
// cat.age = 6;
// cat.pasport = true;

// delete cat.pasport;

// console.log(cat);


//6 
// let person = {
//     name: "John",
//     age: 25,
//     greet:function () {
//         return `hello ${this.name} how are you?`
//     },
// }
// console.log(person.greet());


// let calculator = {
//     add:function (a,b) {
//         return a+b; сложение
//     },
//     subtract:function (c,d) {
//         return c - d; вычетание 
//     },
//     multiply:function(x,y) {
//         return x* y; умножение
//     },
//     divide:function (r,z) {
//         return r/z; разделение
//     }

// }
// console.log(calculator.divide(60,2));//30


// let car = {
//     start:  () => {
//         alert("Машина запущена")
//     },
//     stop: () =>{
//         alert("Машина остановлена")
//     }
// }

// console.log(car.stop());

//7 
// let person = {
//     name: "",
//     age: 0,

// }
// let John = Object.create(person);

// John.name = 'John';
// John.age = 25;


// console.log(John);

// let animal = {
//     eat:function () {
//         alert("Животное кушает");
//     }
// }

// let dog = Object.create(animal);

// dog.eat();

// let shape = {
//     draw:function () {
//         alert("Фигура рисуется");
//     }
// }

// let rectangle = Object.create(shape);

// rectangle.draw();


// let number  = [12,13,14,15];
// let text = ['html','css','git','javascript'];
// let arr = ['lorem', 123, true];
// text.unshift("LOREM");//Добавляет в начало массива 
// arr.shift();//удаялет сначала массива
// number.pop();//удаляет с конца массива
// number.push(25);// добавляет в конец массива 
// console.log(number);

//slice()

// let num = [1,2,3,4,5,6,7];
// let newNum = num.slice(0,3)
// console.log(newNum);


// let text = ['lorem',"ipsum","dollar",'html'];
// let newText = text.slice(0,3);
// console.log(newText);


// let arr = ['html','css', 'git', 'react', 'javascript'];
// let newArr = arr.slice(2,5);
// console.log(newArr);


// const arr = ['lorem',123,true,'ipsum','dollar','html','css'];
// let newArr = arr.slice(1,4)
// console.log(newArr);



// let arr = [{a:10,b:20}, {x:40, y:70},{r:30, c:60},{k:40, e:60},{z:40, t:60}];
// let newArr = arr.slice(0,2);
// console.log(newArr);
// console.log(newArr[0],newArr[1]);//вот так покажет какие объекты выведены

//splice()

// let arr = [1,2,3,4,5,6,7,8];
// let newArr = arr.splice(1);
// console.log(newArr);


// let arr = ['lorem',true, 44,"ipsum"];
// let newArr = arr.splice(1);
// console.log(newArr);


// let arr_1 = ["lorem",'dollar',"html","css",'ipsum'];
// let newArr = arr_1.splice(arr_1.length -3,3);
// newArr.unshift("lorem");
// console.log(newArr);


// let arr = ['lorem','ipsum','dollar','regular','html','dollar','javascript'];
// let newArr = arr.splice(3);
// console.log(newArr);


// let arr_Ob = [{a:10,b:20}, {x:4, y:75},{r:45, c:42},{k:65, e:22}];
// let newArr = arr_Ob.splice(1);
// console.log(newArr);


//concat

// let arr_num = [1,2,3,4,5];
// let arr_num2 = [6,7,8,9,10];
// let newArr = arr_num.concat(arr_num2)
// console.log(newArr);


// let arr_1 = ["html",'css','git','javascript'];
// let arr_2 = ['nodejs','react','typescript'];
// let allArr = arr_1.concat(arr_2);
// console.log(allArr);

//2-3 похожи 

// let arr = ["lorem",true, 1324,424];
// let arr2 = ["html",'css','react'];
// let newArr = arr.concat(arr2);
// console.log(newArr);

// let arr = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10];
// let newArr = arr.concat(arr2,11,12,13);
// console.log(newArr);


//Map()
// let arr = [1,2,3,4,5];
// let arr_1 = arr.map( (item,inx) =>{
//     return item+1;
// });
// console.log(arr_1);


// let arr = ['lorem',"ipsum",'dollar'];
// let newArr = arr.map( (item) => {
//     return item.toUpperCase();
// });
// console.log(newArr);


// let arr = [{name: "Manin", age: 28},{name: "Dina", age: 22},{name: "Vlad", age: 25}];
// let newArr = arr.map((item) => {
//    return {...arr, fullName: item.name+item.age,}
// });
// console.log(newArr);


// let arr_1 = [2,4,5,8,9];
// let superArr = arr_1.map((item) => {
//     return item*item;
// });
// console.log(superArr);


// let arr = ['LOREM','HTML', 'CSS','REACT','DOLLAR'];
// let superArr = arr.map((item) => {
//     return item.toLowerCase();
// });
// console.log(superArr);


//filter()

// let arr = [3,4,5,6,7,8,256,48,9,88,75];
// let superArr = arr.filter((item) => {
//     return item%2===0;
// });
// console.log(superArr);


// let arr = ["lorem", "git","html","react","javascript"];
// let superArr = arr.filter( (item) =>{
//     return item.length>=5;
// });
// console.log(superArr);


// let arr = [{price:650},{price:1500},{price:2500,}];
// let superArr = arr.filter((item) => {
//     return item.price>1000;
// });
// console.log(superArr);


//reduce()

// let red = [25,44,16,25];
// let newRed = red.reduce(function (sum,item) {
//     return sum+item;
// },0);
// console.log(newRed);

// let red = ['lorem','ipsums','frontend','react'];
// let newRed = red.reduce(function (sum,item,inx) {
//     return sum+item;
// },0);
// console.log(newRed);


// let redux = [2,3,4,5];
// let newredux = redux.reduce((sum,item,) => {
//     return sum*item
// });
// console.log(newredux);


// let arr = [{name:'Sveta', age:19},{name:'Sveta', age:35},{name:'Sveta', age:27}];
// let newArr = arr.reduce((sum,item) => {
//     return item.age+item.age / sum;
// },3);
// console.log(newArr);


// let arr = [55,4,9,8,7,6,3,2];
// let arr_2 = arr.filter((item) => {
//     return item % 2===0;
// });
// let superArr = arr_2.reduce((sum,item) => {
//     return sum+item;
// },0);
// console.log(superArr);


//sort()

// let arr = [5,4,3,2,1];
// arr.sort();
// console.log(arr);


// let arr = ['b','d','c','a','e'];
// arr.sort();
// console.log(arr);


// let arr = [{name:"Vlad", age:21},{name:"Vika", age:25},{name:"lorem", age:18},];
// arr.sort((a,b) => { return  a.age - b.age });
// console.log(arr);


// let arr = [2,3,4,5,8,9];
// let newArr = arr.sort((a,b) => { return b - a });
// console.log(newArr);


// let arr = ['a','b','c','d','e'];
// arr.reverse() //Можно и таким способом )
// console.log(arr);


// //ForEach()


// let arr = [1,2,3,4,5];
//  arr.forEach((item) => { console.log(item); })


// let arr = ['lorem','dollar', 'html'];
// arr.forEach((item)=>{console.log(item)});


// let arr = [{name:'Alex', age: 25},{name:'Misha', age: 21},{name:'Alena', age: 19},{name:'Dina', age: 25}, ]
// arr.forEach((item)=>{console.log( item.name,item.age);})


// let num = [25,44,45,23];
// num.forEach((a,b)=>{console.log( a+a );});//Только та или метод reduce()


//find()

// let arr = [15,20,9,50,8,150];
// let newArr = arr.find((item) => { return item>10 });
// console.log(newArr);

// let arr = ["lorem", 'java', 'ipsum', 'react'];
// let newArr = arr.find((name) => { return name === "java";});
// console.log(newArr);


// let arr = [{name: 'luka', age:30,},{name: 'Alex', age:28,},{name: 'Dina', age:32,},{name: 'Vika', age:44,},];
// let found = arr.find((item) => { return item.age>30 });
// console.log(found);


// let arr = [5,9,7,2,5,4,3,325];
// let num = arr.find((item)=> { return item%2===0});
// console.log(num);

//5 точно такой же как и 2 Но думаю я его не понял сделал как умею 
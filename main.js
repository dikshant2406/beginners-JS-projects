// search bar with debounce

// let inputElement = document.querySelector('.input input') ;
// let input = ""

// const debounceCallApi = (func , delay) => {
//     let id ;
//     return function() {
//         let args = arguments ;
//         let context = this ;
//         clearTimeout(id) ;

//         id = setTimeout(() => {
//             func.apply(context, args);
//         }, delay);
//     }
// }

// const callApi = () => {
//     console.log('props api called') ;
// }
// inputElement.addEventListener('input', debounceCallApi(callApi, 3000)) ;


// --------------------

// clock 

// let time ;
// let clockElement = document.querySelector('.clock');
// const setTime = () => {
//     setInterval(() => {
//         time = new Date() ;
//         clockElement.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
//     }, 1000)
// }
// setTime();

// -------------------------------------

// throttle polyfill

// const throttleCallApi = (func, delay) => {
//     let lastCallTime = 0 ;
//     let id ;
//     return function() {
//         let context = this ;
//         let args = arguments ;
//         let currentTime = Date.now() ;

//         if(currentTime - lastCallTime >= delay) {
//             lastCallTime = currentTime ;
//             func.apply(context, args) ;
//         }else{
//             clearTimeout(id) ;
//             id = setTimeout(() => {
//                 lastCallTime = currentTime; 
//                 func.apply(context, args);
//             }, delay - (currentTime - lastCallTime))
//         }
//     }
// }
// inputElement.addEventListener('input', throttleCallApi(callApi, 3000)) ;

// --------------------------------------

// stopwatch 

// let hours = 0 ;
// let minutes = 0 ;
// let seconds = 60 ;
// let milliseconds = 0 ;
// let id ;


// let timeRef = document.querySelector('.stopwatch') ;
// let startRef = document.querySelector('.start') ;
// let resetRef = document.querySelector('.reset') ;
// let pauseRef = document.querySelector('.stop');

// startRef.addEventListener('click', () => {
//     if(id) {
//         clearInterval(id) ;
//     }
//     console.log('props inside start');
//     id = setInterval(updateTime, 10) ;
// })

// pauseRef.addEventListener('click', () => {
//     clearInterval(id) ;
// })

// resetRef.addEventListener('click', () => {
//     clearInterval(id) ;
//     hours = 0 ;
//     minutes = 0 ;
//     seconds = 0 ;
//     milliseconds = 0 ;
//     timeRef.innerHTML = "00: 00: 00: 000"

// })

// const updateTime = () => {
//     milliseconds += 10 ;
//     if(milliseconds >= 1000) {
//         milliseconds = 0 ;
//         seconds++ ;
//         if(seconds >= 60) {
//             seconds = 0 ;
//             minutes++ ;
//             if(minutes >= 60) {
//                 hours++ ;
//             }
//         }
//     }

//     console.log('prosp minutes', minutes, seconds, milliseconds);

//     let h = hours < 10 ?  "0" + hours : hours ;
//     let m = minutes < 10 ? "0" + minutes : minutes ;
//     let s = seconds < 10 ? "0" + seconds : seconds ;
//     let ms = milliseconds < 100 ? ( milliseconds < 10 ? "00" + milliseconds : "0" + seconds) : milliseconds ;

//     timeRef.innerHTML = `${h}: ${m}: ${s}: ${ms}`;
// }

// -----------------------------------


// Event listener



// var x = 10;
// function foo(a) {
//   var b = 20;

//   function bar(c) {
//     var d = 30;
//     return boop(x + a + b + c + d);
//   }

//   function boop(e) {
//     return e * -1;
//   }

//   return bar;
// }
// debugger
// var moar = foo(5); // Closure  
// /* 
//   The function below executes the function bar which was returned 
//   when we executed the function foo in the line above. The function bar 
//   invokes boop, at which point bar gets suspended and boop gets push 
//   onto the top of the call stack (see the screenshot below)
// */
// console.log(moar(15))


// var a = 5 ;

// foo()(20)

// function foo() {
//     var a = 10 ;

//     return function bar(b) {
//         console.log(a+b) ;
//     }
// }

// const fun = foo() ;
// fun() ;

/// var let and const 

// ---------------------------------


// printing 0-5 using var

// let list = []

// for(var i = 0 ; i < 5 ; i++) {

//     list.push(function() {
//         var a = i ;
//         return function() {
//             console.log(a)
//         }
//     }())

// }

// list.forEach((e) => e()) ;

//printing 0 to 5 using let 

// let list = []

// for(let i = 0 ; i < 5 ; i++) {

    // list.push(function() {
    //     list.push(function() {
    //         console.log(i);
    //     })
    // }
        

// }

// list.forEach((e) => e()) ;

// --------------------------------------

// this keyword in javascript

// const obj2 = { 
//     obj : {
//         b: function () {
//             console.log(this)
//         },
//         c: () => {
//             console.log(this)
//         }
//     }
// }


// obj2.obj.b()
// obj2.obj.c()

// ------------------------------------

// function fun(obj) {
//     obj.a = 4 ;
// }

// const obj = {
//     a: 2
// }

// console.log(obj)
// fun(obj) ;
// console.log(obj)

// -------------------------------------

// function multiply(x,y) {
//     console.log(x,y) ;
// }

// const multiplyByTwo = multiply.bind(this, 2) ;
// multiplyByTwo(3)
// console.log(multiplyByTwo)

// --------------------------------------------------------------

// let sum = function (a) {
//     return function(b) {
//         if(b) {
//             return sum(a+b) 
//         }

//         return a ;
//     }
// }

// let sum = a => b => b ? sum(a+b) : a ;
// console.log(sum(1)(2)(3)(4)()) ;

// ----------------------------------------------------------------


// Polyfill for bind
// let obj = {
//     name: "Dikshant",
//     age: 10 ,
//     print:  function(city) {
//         console.log(this.name + ' ' + this.age, ' ' + city) ;
//     }
// }

// let obj2 = {
//     name: "Demo",
//     age: 12,
// }

// obj.print.bind(obj2)();

// Function.prototype.myBind = function(...args) {
//     let obj = this ;
//     console.log(this)
//     return function(...args2) {
//         console.log(this)
//         obj.apply(args[0], [...args.slice(1), ...args2])
//     }
// }

// obj.print.myBind(obj2, "nagpur")()

// ------------------------------------------------------------------


//  promise ;

// let promise = fetch("https://google.com") ;
// console.log('promise', promise) ;
// promise.then(() => {
//     console.log(promise)
// })

// polyfill for push in  array

// Array.prototype.mypush = function(...args) {
//     console.log('this', this) ;
//     for(let i = 0 ; i < args.length ; i++){
//         this[this.length] = args[i] 
//     }
// }

// let a = [1,2] ;
// a.mypush(4,5)
// console.log(a)


// ---------------------------------

// this object

// console.log(this); //Global Execution Context : Window Object

// function a(){
//   console.log(this); //also Window Object
// }

// var b = function() {
//   console.log(this); //also Window Object
// };
// a();

// var c = {
//   name: 'The c object',
//   log: function() {
//     var self = this; //this can cover whole project
//     console.log(this)
//     this.name = 'Updated c object';
//     console.log(this); //c object

//     var setname = function(newname) {
//         console.log(this)
//       this.name = newname; //Window.name has been created (!?) internal function of object
//     }
//     setname('Updated again! the c object');
//   }
// };

// c.log();


// ---------------------------------------------

//  other promise api's all, allsettled, any, race
// let promiseAll = () => {
//   let promises = [] ;
 
//   promises.push(fetch('https://dummyjson.com/products'))
//   promises.push(fetch('https://dummyjson.com/products'))
  
//   let p3 = new Promise((res, rej) => {
//     setTimeout(() => {
//       return res(4) 
//     }, 4000)
//   })
//   promises.push(p3)
  
//   let appliedPromises = Promise.all(promises) ;
//   appliedPromises.then((r) => console.log(r))

//   console.log(promises, typeof promises[0]) ;
//   console.log(appliedPromises);
// }


// promiseAll()

// --------------------------------------

// async function always returns promise

//----------------
// polyfill for map

// Array.prototype.myMap = function(fn) {
//     let arr = [] ;
//     console.log(this)
//     for(let  i = 0 ; i < this.length ; i++) {
//         arr.push(fn.call(this, this[i], i, this )) ;
//     }
//     console.log(arr);
//     return arr ;
// }


// Promise.prototype.myAll = function(promises) {

// }
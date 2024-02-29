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



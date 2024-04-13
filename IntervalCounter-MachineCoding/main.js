const button = document.querySelector('#buttonId') ;
const label = document.querySelector('#labelId') ;

let count = 0 ;
let id ;
let ongoing = false ;

let handleClick = (e) => {
    if(!ongoing) {
        label.innerHTML = "Stop the counter";
        ongoing = true ;
        id = setInterval(() => {
            button.innerHTML = count + 1 ;
            count++ ;
        }, 1000)
    }else {
        label.innerHTML = "Resume the counter" ;
        ongoing = false
        clearInterval(id) ;
    }
}

button.addEventListener('click', handleClick)

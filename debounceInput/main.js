const search = document.getElementById('search')

const debouncedCall = (func, delay) => {
    let id ;
    return function() {
        clearTimeout(id)
        id = setTimeout(() => {
            func.apply(this, arguments)
        }, 0)
    }
}

search.addEventListener('input', debouncedCall(() => {
    console.log("call api")
}, 2000))
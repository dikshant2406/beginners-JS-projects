const grandfather = document.querySelector('.grandfather') 
const parent = document.querySelector('.parent') 
const child = document.querySelector('.child') 

console.log(grandfather)

grandfather.addEventListener('click', (e) => {
    console.log(3)
}, {capture: true})

parent.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log(2)
})

child.addEventListener('click', (e) => {
    console.log(1)
})
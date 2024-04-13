let button = document.querySelectorAll('button')
let toastBox = document.getElementById('toastBox')

let obj = {
    "success": "Success" ,
    "error": "Error" ,
    "invalid": "Invalid",
}
button.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let msg = e.target.innerHTML.toLowerCase();
        msg = obj[msg]
        let toast = document.createElement('div') ;
        toast.classList.add('toast')
        toast.innerHTML = msg ;
        toastBox.appendChild(toast)

        setTimeout(() => {
            toast.remove()
        }, 5000)
    })
})

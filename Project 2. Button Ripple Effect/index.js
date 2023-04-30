const buttonEl = document.querySelector(".btn") ;
buttonEl.addEventListener("mouseover", (event) => {
    const x = event.PageX - buttonEl.offsetLeft ;
    const y = event.PageY - buttonEl.offsetTop ;

    buttonEl.style.setProperty("--xPos", x + "px");
    buttonEl.style.setProperty("--yPos", y + "px");
})
window.scroll({
    top: 100,
    behavior: 'smooth'
})

window.addEventListener ("scroll", ()=>{
    let y = window.scrollY;
    let bilder = document.querySelectorAll ("img")

    bilder.forEach ((bild)=>{
        let positionY = bild.getBoundingClientRect().y;
        if(y>positionY+350){
            bild.classList.remove("stor")
        }
        else if(y>positionY){
            bild.classList.add("stor")
        }
        else{
            bild.classList.remove("stor")
        }
    })
})


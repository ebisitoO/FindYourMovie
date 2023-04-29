document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscar")){

        if (e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".pelicula").foreach(movie =>{

            movie.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?movie.classList.remove("filtro")
            :movie.classList.add("filtro")

        })
    }

})
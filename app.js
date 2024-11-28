
//Smooth scroll 
document.getElementById("scroll-contenido").addEventListener("click", function() {
    const target = document.getElementById("title-cards");
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const scrollStep = 20; 
    const intervalTime = 20; 

    const scrollInterval = setInterval(() => {
        const currentScroll = window.scrollY;

        if (currentScroll < targetPosition) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);//detiene el scroll donde corresponde
        }
    }, intervalTime);
});

//Borde temporal a las imagenes
function aplicarBorde() {
    const imagenes = document.querySelectorAll('.card-img-top');
    
    imagenes.forEach(imagen => {
        imagen.style.border = '5px solid black'; //para aplicar el borde

        //para eliminar el borde
        setTimeout(() => {
            imagen.style.border = '5px solid transparent';
        }, 3000); 
    });
}

setInterval(aplicarBorde, 8000); //duracion del bucle

//Read
const btnLeerMas = document.querySelector('.btn-mas');
const leer = document.querySelector('.leer');

btnLeerMas.addEventListener('click',(e)=>{
    leer.classList.toggle('mostrarMas');
    if(btnLeerMas.innerText === 'READ MORE'){ //cambia el boton para leer mas/menos
        btnLeerMas.innerText = 'READ LESS';
    } else {
        btnLeerMas.innerText = 'READ MORE'
    }
})

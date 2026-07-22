//Numero de colores//

const selectTipo = document.getElementById("tipo_color");
const select = document.getElementById("paletas");
const items = document.querySelectorAll(".colores li");
const boton = document.getElementById("boton");


function generarColorHSL() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 50%)`;
}
function generarColorHEX() {
  const letras = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }

  return color;
}

function actualizarCuadros(){

    items.forEach((item, index) => {
        const cantidad = Number(select.value);
        const texto = item.querySelector(".codigo");
        const botonCopiar = item.querySelector(".copiar");
        botonCopiar.addEventListener("click", () => {

            navigator.clipboard.writeText(texto.textContent);

            console.log("Copiado:", texto.textContent);})

        
        if (index < cantidad) {
        item.style.display = "flex"; 
            let color
            if (selectTipo === "hsl") {
                color = generarColorHSL();
            } else {
                color = generarColorHEX();
            }
                
            const bloqueColor = item.querySelector(".color");
            
            
            
            

            botonCopiar.style.display = "block";

            bloqueColor.style.backgroundColor = color;

            texto.textContent = color;

            
            
        } else {
        item.style.display = "none"; }
    });
}
    




boton.addEventListener("click", ( actualizarCuadros));




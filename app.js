function agregarAmigo() {
    //Obtener el valor del input
    let inputAmigo = document.getElementById("amigo");
    //obtener el valor escrito en el input (usuario)
    let nombre = inputAmigo.value;

    if (nombre == "") {
        alert("Por favor, ingrese un nombre de amigo");
    } else {
        //crear un nuevo elemento de lista
        let nuevoAmigo = document.createElement("li");
        //agregar el nombre del amigo al elemento de lista
        nuevoAmigo.textContent = nombre;
        //agregar el elemento de lista al elemento de lista existente
        document.getElementById("listaAmigos").appendChild(nuevoAmigo);
        //limpiar el input
        inputAmigo.value = "";
        
    }
    
}
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        agregarAmigo(); // Llamar a la función cuando se presiona Enter
    }
});

function sortearAmigo() {
    // Obtener la lista de amigos
    let listaAmigos = document.querySelectorAll("#listaAmigos li");

    // Verificar si la lista está vacía
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista");
        return;
    }

    // Obtener un número aleatorio entre 0 y la cantidad de amigos
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtener el amigo correspondiente al número aleatorio
    let amigoSeleccionado = listaAmigos[indiceAleatorio].textContent;

    // Crear un <span> para el nombre y darle una clase
    let nombreSpan = document.createElement("span");
    nombreSpan.textContent = amigoSeleccionado;
    nombreSpan.className = "nombre-seleccionado";

    // Limpiar resultados anteriores
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    // Crear un nuevo elemento <li> con el nombre sorteado
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = `El amigo seleccionado es: `;

    // Añadir el <span> al <li>
    nuevoElemento.appendChild(nombreSpan);

    // Agregar el resultado a la lista
    listaResultado.appendChild(nuevoElemento);
}

function nuevoJuego() {
    // Limpiar resultados anteriores del resultado
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    // Limpiar resultados anteriores de la lista de resultados
     let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigoIngresado = inputAmigo.value;
    //console.log(nombreAmigoIngresado);

    //Validar que el input no tenga string "vacio".
    if (nombreAmigoIngresado === "") {
        alert("¡Por favor, ingrese el nombre real de un amigo!");
        return;
    }

    //Validar que el nombre no este duplicado.
    if (nombresAmigos.includes(nombreAmigoIngresado)) {
        alert(`El nombre ${nombreAmigoIngresado} ya está, por favor pon otro.`);
        return;
    }

    nombresAmigos.push(nombreAmigoIngresado);
    //console.log(nombresAmigos);

    //Limpiar el campo del input.
    document.getElementById("amigo").value = "";

    actualizarNombresAmigos();
}

function actualizarNombresAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < nombresAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombresAmigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    //Validar que lista tenga nombre de amigos disponibles.
    if (nombresAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear, añade uno.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);

    //Obtener el nombre sorteado a través del índice aleatorio.
    let amigoSorteado = nombresAmigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El Amigo Elegido es: <strong>${amigoSorteado}</strong>`;
}
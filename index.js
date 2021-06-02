const cosasQueAprendimos = [
    {
        tema: "terminal",
        class: "",
    },
    {
        tema: "node",
        class: "",
    },
    {
        tema: "oop",
        class: "",
    },
    {
        tema: "typescript",
        class: "",
    },
    {
        tema: "css",
        class: "",
    },
    {
        tema: "dom",
        class: "special",
    },
];

// Función para borrar los li dentro de la lista
function borrarLi() {
    const liArray = document.querySelectorAll(".lista li");

    // Borro los li
    liArray.forEach((itemLi) => {
        itemLi.remove();
    });
}

// Función para crear elementos y hacerle el append al ul
function crearElementos() {
    // Obtengo la lista
    const elUl = document.getElementsByClassName("lista")[0];

    // Con un forEach, recorro todos los objetos, y creo los elementos
    cosasQueAprendimos.forEach((item) => {
        // Creo el elemento vacío
        let newEl = document.createElement("li");

        // Le asigno un contenido, y una clase
        newEl.textContent = item.tema;

        if (item.class != "") {
            newEl.setAttribute("class", item.class);
        }

        // Ahora, sólo hago el append
        elUl.appendChild(newEl);
    });
}

// Función principal
function main() {
    // Borro todos los li
    borrarLi();

    // Creo los elementos del array
    crearElementos();
}

// EJECUCION
main();

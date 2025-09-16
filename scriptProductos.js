const Productos = [
    {id: 1, nombre: "Mandarin sky", precio: 40000, stock: 12},
    {id: 2, nombre: "All Black", precio: 70000, stock: 102},
    {id: 3, nombre: "Bad Boy", precio: 130000, stock: 327},
    {id: 4, nombre: "blue de antonio banderas", precio: 80000, stock: 12},
    {id: 5, nombre: "9 pm", precio: 130000, stock: 50},
    {id: 6, nombre: "Nautica Blue", precio: 40000, stock: 34},
    {id: 7, nombre: "Aqua Di GIO", precio: 210000, stock: 123},
    {id: 8, nombre: "Power of seduction antonio banderas", precio: 160000, stock: 62},
    {id: 9, nombre: "Lamborghini Deo", precio: 430000, stock: 78},
];

const contenedorProductos = document.getElementById("productos");


function renderizarProductos() {
    contenedorProductos.innerHTML = "";

    Productos.forEach(prod => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <th scope="row">${prod.id}</th>
            <td>${prod.nombre}</td>
            <td>$${prod.precio.toLocaleString('es-CL')}</td>
            <td>${prod.stock} unidades</td>
            <td>
                <button class="btn btn-sm btn-outline-light" data-bs-toggle="modal" data-bs-target="#modalEditarProducto">
                    Editar
                </button>
            </td>
        `;
        contenedorProductos.appendChild(tr);
    });
}


function agregarProducto() {
 
    const nombre = document.getElementById("nuevoNombre").value;
    const precio = parseInt(document.getElementById("nuevoPrecio").value);
    const stock = parseInt(document.getElementById("nuevoStock").value);

    if (!nombre || isNaN(precio) || isNaN(stock)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }
    const nuevoId = Productos.length > 0 ? Math.max(...Productos.map(p => p.id)) + 1 : 1;

    const nuevoProducto = {
        id: nuevoId,
        nombre: nombre,
        precio: precio,
        stock: stock
    };

    Productos.push(nuevoProducto);

    renderizarProductos();

    document.getElementById("formularioNuevoProducto").reset();

 
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalAnadirProducto'));
    modal.hide();
}


renderizarProductos();
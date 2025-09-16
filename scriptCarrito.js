const Productos = [
    {id: 1, nombre: "Mandarin sky", precio: 40000,desc:"Fragancia masculina de la casa de diseño árabe Armaf"},
    {id: 2, nombre: "All Black", precio: 70000,desc:"es un eau de toilette oriental especiado para hombre, con notas de cardamomo, tonka y cedro"},
    {id: 3, nombre: "Bad Boy", precio: 130000,desc:"redefine la masculinidad moderna con un atrevido contraste de frescura e intensidad."},
    {id: 4, nombre: "blue de antonio banderas", precio: 80000,desc:"Seduction Hombre Edt 100 ml es una fragancia fresca y vibrante que combina notas principales de melón, bergamota, menta y capuchina, sobre un fondo de almizcle y maderas suaves, logrando un aroma acuático, cítrico y seductor."},
    {id: 5, nombre: "9 pm", precio: 130000,desc:"combinación dulce, especiada y frutal, destacando notas de salida como manzana, bergamota, canela y lavanda; un corazón de flor de azahar y lirio de los valles; y un fondo cálido de vainilla, haba tonka, ámbar y pachulí."},
    {id: 6, nombre: "Nautica Blue", precio: 40000,desc:"aroma Cítrico/Amaderado y un toque de esencia de almizcle. Ideal para el caballero que le gustan los aromas frescos y modernos, emana la presencia de un hombre sofisticado y contemporáneo."},
    {id: 7, nombre: "Aqua Di GIO", precio: 210000,desc:"Sus notas de salida combinan un corazón de bergamota, jengibre y la intensidad de las notas marinas; su corazón fusiona el corazón de geranio bourbon, la esencia de romero y el corazón de salvia sclarea, mientras que un fondo de maderas vibrantes, esencia de pachuli e incienso crea un halo de misterio."},
    {id: 8, nombre: "Power of seduction antonio banderas", precio:160000,desc:"Aroma: Aromática Marina. Notas de salida: Bergamota, manzana. Notas de corazón: Marina. Notas de fondo: Cedro, ámbar."},
    {id: 9, nombre: "Lamborghini Deo", precio: 430000,desc:"Deliciosas notas medias de lirio de los valles y jazmín con un sensual crescendo de maderas aterciopeladas. En el fondo, una elegante mezcla de almizcle, sándalo, vainilla y cedro"}
];

const contenedorProductos = document.getElementById("productos");
const carritoLista = document.getElementById("carrito");
const btnVaciar = document.getElementById("vaciarCarrito");
const totalElemento = document.getElementById("total-carrito");

//Renderizar los productos o cargarlos
Productos.forEach(prod=>{
    const div = document.createElement("div");
    div.className="col-md-4";
    div.innerHTML=`
        <div class="card mb-4 h-100">
            <img height="250"   class="card-img-top" src="assets/${prod.id}.webp" alt="">
            <div class="card-body d-flex flex-column"> 
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text"><strong>$${prod.precio.toLocaleString('es-CL')} CLP </strong> <br>${prod.desc}</p>
                <button class="btn btn-outline-primary mt-auto" onclick="agregarAlCarrito(${prod.id}); irAlFinal()">Agregar al carrito</botton>
            </div>
        </div>
    `;
    contenedorProductos.appendChild(div);
});
function irAlFinal() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' 
    });
}
//inicializar el carrito desde localStorage
//Si existe lo convierte a json si no esta es null
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//llamar a la fncion de renderizar
renderCarrito()
//funcion para agragar

function agregarAlCarrito(id){
    const producto = Productos.find(p => p.id == id);
    carrito.push(producto);
    guardarCarrito()
    renderCarrito();
}

//mostrar Carrito 
function renderCarrito(){
    carritoLista.innerHTML="";

//item = objeto de la lista
    carrito.forEach((item, index)=>{

        const li = document.createElement("li");
        li.className="list-group-item d-flex justify-content-between align-items-center bg-light";

        li.textContent=`${item.nombre} ~ $${item.precio.toLocaleString('es-CL')}`;

        //btn

        const btn = document.createElement("button");
        btn.textContent="x";
        btn.className="btn btn-danger";

        btn.onclick = () => eliminarDelCarrito(index);

        li.appendChild(btn);
        carritoLista.appendChild(li);//Como ultimo hijo del contenedor

    });
    const total = carrito.reduce((acumulador, item) => acumulador + item.precio, 0);

    totalElemento.textContent = `Total: $${total.toLocaleString('es-CL')} CLP`;
}

//eliminar
function eliminarDelCarrito(index){

    carrito.splice(index, 1)
    guardarCarrito();
    renderCarrito();
}

//Vaciar carrito
btnVaciar.addEventListener("click", () =>{
    carrito=[];
    guardarCarrito();
    renderCarrito();
});

//Guardar En localStorage
function guardarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


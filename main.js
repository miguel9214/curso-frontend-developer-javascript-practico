const emailNav = document.querySelector(".navbar-email");
const escritorioMenu = document.querySelector(".desktop-menu");
const imagenMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const imagenCarrito = document.querySelector(".navbar-shopping-cart");
const carritoCompras = document.querySelector(".product-detail");
const cardContenedor =document.querySelector(".cards-container");

imagenMenu.addEventListener("click", cambiarMenuMobile);

emailNav.addEventListener("click", cambiarMenu);

imagenCarrito.addEventListener("click", mostraCarrito);

function cambiarMenu() {
  const carritoComprasCerrado = carritoCompras.classList.contains("inactive");
  if (!carritoComprasCerrado) {
    carritoCompras.classList.add("inactive");
  }
  escritorioMenu.classList.toggle("inactive");
}

function cambiarMenuMobile() {
  const carritoComprasCerrado = carritoCompras.classList.contains("inactive");
  if (!carritoComprasCerrado) {
    carritoCompras.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function mostraCarrito() {
  const menuMobileCerrado = mobileMenu.classList.contains("inactive");
  const escritorioMenuCerrado = escritorioMenu.classList.contains("inactive");

  if (!menuMobileCerrado || !escritorioMenuCerrado) {
    mobileMenu.classList.add("inactive");
    escritorioMenu.classList.add("inactive");
  }

  carritoCompras.classList.toggle("inactive");
}
const productos = [];

productos.push({
  nombre: "bici",
  precio: 400,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productos.push({
  nombre: "compu",
  precio: 1000,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productos.push({
  nombre: "celular",
  precio: 700,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

// con esto creo un elemento desde javascritp
for (producto of productos) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const imagenContendero = document.createElement("img");
  imagenContendero.setAttribute("src", producto.imagen);

  const productInfo = document.createElement("div");
  productCard.appendChild(productInfo);

  productInfo.classList.add("product-info");
  const div = document.createElement("div");


  const parrafoPrecio = document.createElement("p");
  parrafoPrecio.innerText = "$" + producto.precio;
  const parrafoNombre = document.createElement("p");
  parrafoNombre.innerText = producto.nombre;
  
  const figura = document.createElement("figure");
  const imagenCart = document.createElement("img");
  imagenCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  figura.appendChild(imagenCart);
  div.appendChild(parrafoPrecio);
  div.appendChild(parrafoNombre);
  productCard.appendChild(imagenContendero);
  productCard.appendChild(productInfo);
  productInfo.appendChild(div)
  productInfo.appendChild(figura);
  cardContenedor.appendChild(productCard);

}

/*       <div class="product-card">
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
          <div class="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
          </div>
        </div> */

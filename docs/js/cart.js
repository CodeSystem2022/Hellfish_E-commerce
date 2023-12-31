const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";

    // Modal header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";

    modalHeader.append(modalClose);

    modalClose.addEventListener("click", ()=>{
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    })

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Carrito";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    // Modal body
    if (cart.length > 0) {
        cart.forEach((p) => {
            const mB = document.createElement("div");
            mB.className = "modal-body";
            mB.innerHTML = `
                <div class="product">
                    <img class="product-img" src="${p.img}">
                    <div class="product-info">
                        <h4>${p.productName}</h4>
                    </div>
                    <div class="quantity">
                        <span class="quantity-btn-decrease">-</span>
                        <span class="quantity-input">${p.quantity}</span>
                        <span class="quantity-btn-increase">+</span>
                    </div>
                    <div class="price">$ ${p.price * p.quantity}</div>
                    <div class="delete-product">x</div>
                </div>
                `
            modalContainer.append(mB);

            // decrease product
            const d = mB.querySelector(".quantity-btn-decrease");
            d.addEventListener("click", () => {
                if (p.quantity !== 1) {
                    p.quantity--;
                    displayCart();
                }
                displayCartCounter();
            })

            // increase product
            const i = mB.querySelector(".quantity-btn-increase");
            i.addEventListener("click", () => {
                p.quantity++;
                displayCart();
                displayCartCounter();
            })

            // delete product
            const dP = mB.querySelector(".delete-product");
            dP.addEventListener("click", () => {
                deleteCartProduct(p.id);
            })
        })

        // total
        const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

        // Modal footer
        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        modalFooter.innerHTML = `
            <div class="total-price">Total: ${total}</div>
            <button class="btn-primary" id="checkout-btn">COMPRAR</button>
            <div id="button-checkout"></div>
            `;
        modalContainer.append(modalFooter);

        const checkoutButton = modalFooter.querySelector("#checkout-btn");

        checkoutButton.addEventListener("click", function () {
            checkoutButton.remove();

            const modalText = document.createElement("div");
            modalText.className = "modal-body";
            modalText.innerHTML = `
            <div class="prueba-msg">
                <p>Esta versión de prueba no permite finalizar la compra</p>
                <p>Para más información, por favor <a href="https://github.com/elfabri/vigilant-dollop">revise nuestro repositorio de GitHub</a></p>
            </div>
            `;

            modalContainer.append(modalText);
        });

    } else {
        const modalText = document.createElement("H2");
        modalText.className = "modal-body";
        modalText.innerText = "¡Todavía no has seleccionado nada!";
        modalContainer.append(modalText);
    }
}

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
    const fId = cart.findIndex((elem) => elem.id === id);
    cart.splice(fId, 1);
    displayCart();
    displayCartCounter();
}

const displayCartCounter = () => {
    const cartLength = cart.reduce((acc, el) => acc + el.quantity, 0);
    if (cartLength > 0) {
        cartCounter.style.display = "block";
        cartCounter.innerText = cartLength;
    } else {
        cartCounter.style.display = "none";
    }
}

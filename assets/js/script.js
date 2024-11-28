document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelector(".cart-items");
    const summary = document.getElementById("summary");
    const cardInfo = document.getElementById("card-info");
    const addressInputs = document.querySelectorAll('input[name="address"]');
    const paymentInputs = document.querySelectorAll('input[name="payment"]');

    // Update total
    function updateTotal() {
        let total = 0;
        cartItems.querySelectorAll(".cart-item").forEach(item => {
            const price = parseFloat(item.querySelector(".product-price").textContent.replace("₫", "").replace(",", ""));
            const quantity = parseInt(item.querySelector(".quantity").textContent);
            const itemTotal = price * quantity;
            item.querySelector(".item-total-price").textContent = `₫${itemTotal.toLocaleString()}`;
            total += itemTotal;
        });
        summary.textContent = `Tổng tiền: ₫${total.toLocaleString()}`;
    }

    // Handle quantity buttons
    cartItems.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-increase") || e.target.classList.contains("btn-decrease")) {
            const quantityElem = e.target.closest(".cart-item").querySelector(".quantity");
            let quantity = parseInt(quantityElem.textContent);
            quantity += e.target.classList.contains("btn-increase") ? 1 : -1;
            if (quantity < 1) quantity = 1;
            quantityElem.textContent = quantity;
            updateTotal();
        }

        if (e.target.classList.contains("btn-delete")) {
            e.target.closest(".cart-item").remove();
            updateTotal();
        }
    });

    // Handle payment info
    paymentInputs.forEach(input => {
        input.addEventListener("change", () => {
            cardInfo.style.display = input.value === "card" ? "block" : "none";
        });
    });

    // Enable/disable address input
    addressInputs.forEach(input => {
        input.addEventListener("change", () => {
            document.getElementById("new-address").disabled = input.value !== "new";
        });
    });

    updateTotal();
});
const addToCartButton = document.querySelector('.add-to-cart');
const notification = document.querySelector('.notification');

addToCartButton.addEventListener('click', () => {
    notification.style.display = 'block';
    // Thêm logic để ẩn thông báo sau một khoảng thời gian
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
});
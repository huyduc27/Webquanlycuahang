const modal = document.getElementById("add-product-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const openModalButton = document.getElementById("open-modal-button");
const closeModalButton = document.getElementById("cancel-add-product");
const form = document.getElementById("add-product-form");

// Hiển thị modal
openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
    modalOverlay.style.display = "block";
});

// Ẩn modal khi nhấp vào nút Hủy hoặc lớp phủ
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
    form.reset();
});

    modalOverlay.addEventListener("click", (event) => {
        if(event.target === modalOverlay){
            modal.style.display = "none";
            modalOverlay.style.display = "none";
            form.reset();
        }
    })

// Xử lý submit form
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const productName = document.getElementById("product-name").value;
    const productPrice = document.getElementById("product-price").value;
    const productDescribe = document.getElementById("product-describe").value;
    const productImage = document.getElementById("product-image").value;

    if (productName === "" || productPrice === "" || productDescribe === "" || productImage === "") {
        alert("Vui lòng điền đầy đủ thông tin sản phẩm.");
        return;
    }

    alert("Thêm sản phẩm thành công!");
    form.reset();
    modal.style.display = "none";
            modalOverlay.style.display = "none";
});
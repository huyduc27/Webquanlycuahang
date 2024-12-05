const cartButtons = document.querySelectorAll(".add-to-cart");

// Gắn sự kiện click cho mỗi nút
cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  });
});
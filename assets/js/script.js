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



document.getElementById("loginForm").addEventListener("submit", function (event) {   
    event.preventDefault(); // Ngăn form tự động gửi đi    
  
    // Lấy giá trị từ input   
    const username = document.getElementById("username").value.trim();    
  
    if (username) {       
        // Kiểm tra nếu là tài khoản admin       
        if (username === "admin") {           
            // Lưu thông tin đăng nhập vào localStorage           
            localStorage.setItem("username", username);           
            // Hiển thị thông báo thành công           
            alert("Đăng nhập thành công với tài khoản Admin!");           
            // Chuyển hướng về trang quản trị admin.html           
            window.location.href = "admin/admin.html";       
        } else {           
            // Lưu thông tin đăng nhập tài khoản thường           
            localStorage.setItem("username", username);           
            // Hiển thị thông báo thành công           
            alert("Đăng nhập thành công!");           
            // Chuyển hướng về trang index.html           
            window.location.href = "indexlogin.html";       
        }   
    } else {       
        alert("Vui lòng nhập tên tài khoản!");   
    } 
  });
  
document.getElementById("cartLink").addEventListener("click", function (event) {
    const username = localStorage.getItem("username"); // Lấy thông tin đăng nhập từ localStorage
  
    if (!username) {
      // Nếu chưa đăng nhập, ngăn truy cập và yêu cầu đăng nhập
      event.preventDefault();
      alert("Vui lòng đăng nhập trước khi vào Giỏ hàng!");
      window.location.href = "login.html"; // Chuyển đến trang đăng nhập
    } else {
      alert(`Chào mừng ${username}, bạn có thể truy cập Giỏ hàng!`);
    }
  });

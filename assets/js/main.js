  

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


<<<<<<< HEAD


 //Hàm xử lý tìm kiếm
function handleSearch() {
    // Lấy giá trị tìm kiếm từ input
    const searchQuery = document.getElementById('searchInput').value.trim();

    // Kiểm tra xem người dùng có nhập từ khóa không
    if (searchQuery) {
        // Chuyển hướng sang trang "kết quả tìm kiếm" và đính kèm từ khóa tìm kiếm
        window.location.href = `foundresult.html`;
    } else {
        alert('Vui lòng nhập từ khóa để tìm kiếm!');
    }
}       

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
=======
        //Open Search Mobile 
        function openSearchMb() {
            document.querySelector(".header-middle-left").style.display = "none";
            document.querySelector(".header-middle-center").style.display = "block";
            document.querySelector(".header-middle-right-item.close").style.display = "block";
            let liItem = document.querySelectorAll(".header-middle-right-item.open");
            for(let i = 0; i < liItem.length; i++) {
                liItem[i].style.setProperty("display", "none", "important")
            }
        }

        
>>>>>>> 9e806a840ad718c7fe0d87e6334eced5a935fe47

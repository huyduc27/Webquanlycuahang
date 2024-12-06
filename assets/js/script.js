


const addToCartButton = document.querySelector('.add-to-cart');
const notification = document.querySelector('.notification');

addToCartButton.addEventListener('click', () => {
    notification.style.display = 'block';
    // Thêm logic để ẩn thông báo sau một khoảng thời gian
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
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

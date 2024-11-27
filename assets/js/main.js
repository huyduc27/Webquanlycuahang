function checkLogin() {
    // Giả sử trạng thái đăng nhập được lưu trong localStorage
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (isLoggedIn) {
        // Nếu đã đăng nhập, chuyển hướng đến giỏ hàng
        window.location.href = 'cart.html';
    } else {
        // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập`
        alert('Vui lòng đăng nhập trước khi vào giỏ hàng.');
        window.location.href = 'login.html';
    }
}
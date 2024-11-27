// Xử lý sự kiện đăng nhập
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn form submit lại trang

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Kiểm tra tên tài khoản và mật khẩu
  if (username === "user123" && password === "123") {
      // Lưu tên tài khoản vào localStorage
      localStorage.setItem("loggedInUser", username);
      // Chuyển hướng đến trang index
      window.location.href = "index.html";
  } else {
      // Hiển thị thông báo lỗi
      document.getElementById("error-message").style.display = "block";
  }
});
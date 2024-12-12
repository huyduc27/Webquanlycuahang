document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn form tự động gửi đi
  
    // Tạo tài khoản mặc định
    const username = "defaultUser";  // Tên tài khoản mặc định (có thể thay đổi theo nhu cầu)
  
    // Lưu thông tin đăng nhập vào localStorage
    localStorage.setItem("username", username);
  
    // Kiểm tra nếu là tài khoản admin
    if (username === "admin") {
      // Hiển thị thông báo thành công cho admin
      alert("Đăng nhập thành công với tài khoản Admin!");
      // Chuyển hướng về trang quản trị admin.html
      window.location.href = "admin/admin.html";
    } else {
      // Hiển thị thông báo thành công cho tài khoản thường
      alert("Đăng nhập thành công!");
      // Chuyển hướng về trang indexlogin.html
      window.location.href = "indexlogin.html";
    }
  });
  
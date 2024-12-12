document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn form reload lại trang

  // Giả lập quá trình đăng ký thành công mà không cần kiểm tra các trường nhập liệu
  alert("Đăng ký thành công! Quay lại trang chủ.");
  window.location.href = "index.html"; // Chuyển hướng về trang index
});

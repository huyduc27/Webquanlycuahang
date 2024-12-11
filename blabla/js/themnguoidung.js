// Lấy các phần tử
var modal = document.getElementById("addUserModal");
var btn = document.getElementById("addUserBtn");
var closeBtn = document.getElementById("closeBtn");
var successMessage = document.getElementById("successMessage-ADD");

// Khi nhấn nút "Thêm người dùng", mở modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Khi nhấn nút đóng, ẩn modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Khi người dùng nhấn ngoài modal, ẩn modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Xử lý form thêm người dùng (hiện tại chỉ hiển thị thông tin)
document.getElementById("addUserForm").onsubmit = function(event) {
    event.preventDefault();  // Ngừng gửi form

    // Lấy thông tin người dùng
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var status = document.getElementById("status").value;

    // In thông tin người dùng ra console (hoặc có thể gửi thông tin này tới server nếu cần)
    console.log("Tên: " + name);
    console.log("Email: " + email);
    console.log("Trạng thái: " + status);

    // Hiển thị thông báo thành công
    successMessage.style.display = "block";

    // Đóng modal sau khi thêm người dùng
    modal.style.display = "none";

    // Xóa form (tùy chọn)
    document.getElementById("addUserForm").reset();

    // Ẩn thông báo thành công sau 3 giây
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 3000);
}



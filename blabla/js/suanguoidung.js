// Hàm mở form sửa thông tin người dùng
function editUser(userId, name, email, status) {
    // Hiển thị form sửa
    document.getElementById('editUserForm').style.display = 'block';
    // Điền thông tin cũ vào form
    document.getElementById('editName').value = name;
    document.getElementById('editEmail').value = email;
    document.getElementById('editStatus').value = status;

    // Lưu thông tin đã chỉnh sửa
    document.getElementById('saveBtn').onclick = function() {
        // Lấy thông tin người dùng đã chỉnh sửa
        var updatedName = document.getElementById('editName').value;
        var updatedEmail = document.getElementById('editEmail').value;
        var updatedStatus = document.getElementById('editStatus').value;

        // Thực hiện cập nhật thông tin người dùng ở đây
        // Ví dụ: cập nhật trên server hoặc trong cơ sở dữ liệu (giả sử đã có API gọi)
        // Sau khi cập nhật thành công, hiển thị thông báo thành công

        showSuccessMessage();

        // Ẩn form sau khi lưu
        document.getElementById('editUserForm').style.display = 'none';
    }

    // Hủy form sửa khi nhấn "Hủy"
    document.getElementById('cancelBtn').onclick = function() {
        document.getElementById('editUserForm').style.display = 'none';
    }
}

// Hàm hiển thị thông báo thành công
function showSuccessMessage() {
    document.getElementById('successMessage-CHANGE').style.display = 'block';
    setTimeout(function() {
        document.getElementById('successMessage-CHANGE').style.display = 'none';
    }, 3000); // Ẩn thông báo sau 3 giây
}

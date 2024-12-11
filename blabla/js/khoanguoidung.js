// Hàm thay đổi trạng thái từ "Hoạt động" sang "Khóa" và ngược lại
function toggleStatus(userId) {
    var statusCell = document.getElementById('status' + userId);
    var currentStatus = statusCell.textContent; // Dùng textContent thay vì innerText

    var toggleButton = document.querySelector('button[onclick="toggleStatus(' + userId + ')"]');

    if (currentStatus === 'Hoạt động') {
        // Nếu trạng thái hiện tại là "Hoạt động", đổi thành "Khóa"
        statusCell.textContent = 'Khóa'; // Dùng textContent thay vì innerText
        toggleButton.textContent = 'Mở khóa'; // Cập nhật nút thành "Mở khóa"
        toggleButton.style.backgroundColor = '#4CAF50'; // Thay đổi màu nút
    } else {
        // Nếu trạng thái hiện tại là "Khóa", đổi thành "Hoạt động"
        statusCell.textContent = 'Hoạt động'; // Dùng textContent thay vì innerText
        toggleButton.textContent = 'Khóa'; // Cập nhật nút thành "Khóa"
        toggleButton.style.backgroundColor = 'red';
    }
}

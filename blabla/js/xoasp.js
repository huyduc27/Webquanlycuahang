// Hiển thị modal xác nhận xóa sản phẩm
function confirmDeleteProduct() {
    document.getElementById('confirm-delete-modal').style.display = 'block';
}

// Đóng modal xác nhận
function closeDeleteModal() {
    document.getElementById('confirm-delete-modal').style.display = 'none';
}

// Thực hiện xóa sản phẩm (ví dụ, xóa khỏi giao diện hoặc database)
function deleteProduct() {
    // Giả sử xóa sản phẩm từ giao diện
    let productElement = document.querySelector('.product');
    productElement.remove();  // Xóa sản phẩm khỏi giao diện
    
    // Đóng modal sau khi xóa
    closeDeleteModal();
    
    alert('Sản phẩm đã được xóa!');
}

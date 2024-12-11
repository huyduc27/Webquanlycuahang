// Mở modal sửa sản phẩm
function editProduct() {
  // Hiển thị modal
  document.getElementById('edit-product-modal').style.display = 'block';
  
  // Lấy thông tin sản phẩm hiện tại
  let productName = document.getElementById('product-name').innerText;
  let productDescription = document.getElementById('product-description').innerText;
  let productPrice = document.getElementById('product-price').innerText;
  let productImage = document.getElementById('product-image').src;
  
  // Điền thông tin vào các trường trong modal
  document.getElementById('edit-product-name').value = productName;
  document.getElementById('edit-product-description').value = productDescription;
  document.getElementById('edit-product-price').value = productPrice;
  document.getElementById('edit-product-image').value = '';
  document.getElementById('product-image').src = productImage; // Giữ ảnh cũ
}

// Lưu thông tin sửa sản phẩm
function saveProduct() {
  // Lấy thông tin từ các trường input
  let newProductName = document.getElementById('edit-product-name').value;
  let newProductDescription = document.getElementById('edit-product-description').value;
  let newProductPrice = document.getElementById('edit-product-price').value;
  let newProductImage = document.getElementById('edit-product-image').files[0];
  
  // Cập nhật thông tin trên giao diện
  document.getElementById('product-name').innerText = newProductName;
  document.getElementById('product-description').innerText = newProductDescription;
  document.getElementById('product-price').innerText = newProductPrice;
  
  // Nếu có hình ảnh mới, hiển thị
  if (newProductImage) {
      let reader = new FileReader();
      reader.onload = function (e) {
          document.getElementById('product-image').src = e.target.result;
      };
      reader.readAsDataURL(newProductImage);
  }
  
  // Đóng modal
  closeModal();
}

// Bỏ hình ảnh hiện tại
function removeImage() {
  document.getElementById('product-image').src = ''; // Xóa hình ảnh cũ
}

// Đóng modal
function closeModal() {
  document.getElementById('edit-product-modal').style.display = 'none';
}

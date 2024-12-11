// Khi người dùng nhấn vào nút "Thêm sản phẩm", hiển thị form
document.getElementById('add-product-btn').addEventListener('click', () => {
    document.getElementById('add-product-modal').style.display = 'block';
  });
  
  // Đóng form khi nhấn nút "Hủy"
  document.getElementById('cancel-add-product').addEventListener('click', () => {
    document.getElementById('add-product-modal').style.display = 'none';
  });
  
  // Hiển thị ảnh khi người dùng chọn file
  document.getElementById('product-image').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const preview = document.getElementById('preview-image');
        preview.src = event.target.result;
        preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Thêm sản phẩm mới vào danh sách
  document.getElementById('add-product-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn không reload trang
    
    // Lấy thông tin từ form
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').files[0];
  
    // Tạo phần tử sản phẩm mới
    const productGrid = document.querySelector('.product-grid');
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    // Tạo ảnh sản phẩm
    const productImg = document.createElement('img');
    if (productImage) {
      const reader = new FileReader();
      reader.onload = function (event) {
        productImg.src = event.target.result;
      };
      reader.readAsDataURL(productImage);
    } else {
      productImg.src = 'https://via.placeholder.com/150'; // Hình mặc định nếu không có hình
    }
  
    // Tạo tên sản phẩm
    const productTitle = document.createElement('h3');
    productTitle.textContent = productName;
  
    // Tạo giá sản phẩm
    const productPriceText = document.createElement('p');
    productPriceText.textContent = `Giá: ${Number(productPrice).toLocaleString()} VND`;
  
    // Thêm các phần tử vào productDiv
    productDiv.appendChild(productImg);
    productDiv.appendChild(productTitle);
    productDiv.appendChild(productPriceText);
  
    // Thêm sản phẩm mới vào danh sách
    productGrid.appendChild(productDiv);
  
    // Ẩn modal và reset form
    document.getElementById('add-product-modal').style.display = 'none';
    document.getElementById('add-product-form').reset();
    document.getElementById('preview-image').style.display = 'none';
  });
  
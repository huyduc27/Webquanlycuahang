function closeForm() {
    document.querySelector('.login-overlay').style.display = 'none';
  }
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tài khoản đã được tạo!');
  });
  
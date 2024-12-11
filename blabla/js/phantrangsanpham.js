// Lấy danh sách các nút và phần hiển thị trang
const pageButtons = document.querySelectorAll(".page-btn");
const pageDisplay = document.getElementById("page-display");
let currentPage = 1; // Trang hiện tại

// Hàm cập nhật trạng thái trang
function updatePage(page) {
  currentPage = page;
  pageDisplay.textContent = `Trang hiện tại: ${currentPage}`;
  highlightActiveButton(page);
}

// Đánh dấu nút hiện tại
function highlightActiveButton(page) {
  pageButtons.forEach(button => {
    if (button.dataset.page == page) {
      button.style.borderColor = "blue";
      button.style.fontWeight = "bold";
    } else {
      button.style.borderColor = "#ccc";
      button.style.fontWeight = "normal";
    }
  });
}

// Gắn sự kiện cho các nút
pageButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.id === "next") {
      // Nút chuyển sang trang tiếp theo
      if (currentPage < pageButtons.length - 1) {
        updatePage(currentPage + 1);
      }
    } else {
      // Nút số
      updatePage(parseInt(button.dataset.page));
    }
  });
});

// Thiết lập trạng thái ban đầu
updatePage(currentPage);

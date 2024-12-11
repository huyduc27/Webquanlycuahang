function applyFilter() {
    // Lấy giá trị từ các bộ lọc
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const status = document.getElementById('status').value;
    const address = document.getElementById('address').value;

    const rows = document.querySelectorAll('#orders-table tbody tr');

    rows.forEach(row => {
        const orderDate = row.getAttribute('data-date');
        const orderStatus = row.getAttribute('data-status');
        const orderAddress = row.getAttribute('data-address');

        // Kiểm tra điều kiện lọc cho từng tiêu chí
        let isVisible = true;

        // Lọc theo ngày
        if (startDate && new Date(orderDate) < new Date(startDate)) {
            isVisible = false;
        }
        if (endDate && new Date(orderDate) > new Date(endDate)) {
            isVisible = false;
        }

        // Lọc theo trạng thái
        if (status && orderStatus !== status) {
            isVisible = false;
        }

        // Lọc theo địa chỉ
        if (address && orderAddress !== address) {
            isVisible = false;
        }

        // Ẩn/hiện dòng đơn hàng
        if (isVisible) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

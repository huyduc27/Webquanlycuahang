document.addEventListener("DOMContentLoaded", function () {
    // Dữ liệu sản phẩm và doanh thu
    const products = [
        { name: 'Nguyễn Văn 5', revenue: 5000000 },
        { name: 'Nguyễn Văn 4', revenue: 10000000 },
        { name: 'Nguyễn Văn 3', revenue: 20000000 },
        { name: 'Nguyễn Văn 2', revenue: 30000000 },
        { name: 'Nguyễn Văn 1', revenue: 50000000 }
    ];

    // Sắp xếp dữ liệu theo doanh thu giảm dần
    products.sort((a, b) => b.revenue - a.revenue);

    // Lấy danh sách tên sản phẩm và doanh thu
    const labels = products.map(product => product.name);
    const revenues = products.map(product => product.revenue);

    // Tạo mảng màu cho mỗi cột
    const colors = [
        '#2980B9', // Màu xanh dương đậm
        '#C0392B', // Màu đỏ đậm
        '#27AE60', // Màu xanh lá đậm
        '#2980B9', // Màu xanh dương đậm
        '#8E44AD'  // Màu hồng đậm
    ];

    // Cấu hình biểu đồ
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'bar', // Biểu đồ cột
        data: {
            labels: labels, // Danh sách tên sản phẩm
            datasets: [{
                label: 'Doanh thu (VND)', 
                data: revenues, // Dữ liệu doanh thu
                backgroundColor: colors, // Màu sắc của mỗi cột
                borderColor: '#333', // Màu viền của các cột
                borderWidth: 1 // Độ dày viền
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true // Bắt đầu trục X từ 0
                },
                y: {
                    beginAtZero: true // Bắt đầu trục Y từ 0
                }
            }
        }
    });
});

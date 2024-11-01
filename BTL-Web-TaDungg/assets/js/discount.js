function showPage(pageNumber) {
    const pages = document.querySelectorAll('main'); // Lấy tất cả các phần tử main

    pages.forEach((page, index) => {
        if (index === pageNumber - 1) {
            page.classList.add('active'); // Thêm class 'active' để hiển thị trang
        } else {
            page.classList.remove('active'); // Xóa class 'active' để ẩn trang
        }
    });
}
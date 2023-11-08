// Lấy tham chiếu đến danh sách và các nút
let list = document.querySelector('.arrivals_list');
let buttonLeft = document.querySelector('.narrow_nav');
let buttonRight = document.querySelector('.narrow_nav-right');

// Thêm sự kiện click vào nút trái
buttonLeft.addEventListener('click', function() {
    // Cuộn danh sách sang trái
    list.scrollLeft -= 320;
});

// Thêm sự kiện click vào nút phải
buttonRight.addEventListener('click', function() {
    // Cuộn danh sách sang phải
    list.scrollLeft += 320;
});




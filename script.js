var autoImgHeader = window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        document.getElementById('image').src = "images/image-header-desktop.jpg";
    } else {
        document.getElementById('image').src = "images/image-header-mobile.jpg";
    }
});

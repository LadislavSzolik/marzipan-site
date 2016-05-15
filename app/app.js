var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../images/gallery/gallery_img.jpg',
            w: 480,
            h: 480
        }
    ];

    var options = {
        history: false,
        focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

document.getElementById('btn1').onclick = openPhotoSwipe;
document.getElementById('btn2').onclick = openPhotoSwipe;
document.getElementById('btn3').onclick = openPhotoSwipe;
document.getElementById('btn4').onclick = openPhotoSwipe;
document.getElementById('btn5').onclick = openPhotoSwipe;
document.getElementById('btn6').onclick = openPhotoSwipe;

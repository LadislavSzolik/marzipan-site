var openPhotoSwipe1 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../images/gallery/img_10.jpeg',
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

var openPhotoSwipe2 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../images/gallery/img_20.jpeg',
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

var openPhotoSwipe3 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../images/gallery/img_30.jpeg',
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

var openPhotoSwipe4 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../images/gallery/img_40.jpeg',
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

var openPhotoSwipe5 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../images/gallery/img_50.jpeg',
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

var openPhotoSwipe6 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var items = [
        {
            src: '../images/gallery/img_60.jpeg',
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

document.getElementById('btn1').onclick = openPhotoSwipe1;
document.getElementById('btn2').onclick = openPhotoSwipe2;
document.getElementById('btn3').onclick = openPhotoSwipe3;
document.getElementById('btn4').onclick = openPhotoSwipe4;
document.getElementById('btn5').onclick = openPhotoSwipe5;
document.getElementById('btn6').onclick = openPhotoSwipe6;

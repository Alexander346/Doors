// Код для секции About
$(function() {
    $('.b-interior, .b-company__bottom, .b-quality, .b-technology').hover(
        () => $('.b-logo--about').css({
            'background': '#fff',
            '-webkit-text-fill-color': 'transparent'
        }),
        () => $('.b-logo--about').css({
            'background': '',
            '-webkit-text-fill-color': ''
        })
    );
});

// Код для секции News 
(function() {
    var wrap = $('.b-news__nav');
    $('.b-news__button').each(function (idx, item) {
        $(item).on('click', function () {
            $('.b-news__button').each(function (idx, item) {
                $(item).removeClass('active'); 
            });
            $(this).addClass('active');
            var t = $(this).attr('data-index');
            wrap.attr('data-index', t);
        });
    })
})();
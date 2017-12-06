jQuery.fn.clickToggle = function (a, b) {
    function cb() { [b, a][this._tog ^= 1].call(this); }
    return this.on("click", cb);
};

(function ($) {
    var allPanels = $('.accordion > .panel > p').hide();

    $('.accordion > .panel > a').clickToggle(function () {
        $(this).siblings('p').slideDown();
        return false;
    }, function () {
        $(this).siblings('p').slideUp();
        return false;
    });
})(jQuery);
(function($) {
    $.fn.visible = function(elem) {
        let $this       = $(this);
        let $win        = $(window);
        let viewTop     = $win.scrollTop();
        let viewBottom  = viewTop + $win.height();
        let $top        = $this.offset().top;
        let $bottom     = $top + $this.height();
        let compTop     = (elem === true) ? $bottom : $top;
        let compBottom  = (elem === true) ? $top : $bottom;
        
        return ((compBottom <= viewBottom) && (compTop >= viewTop));
    }
})(jQuery);

window.allModules = $('.module');
window.winElem = $(window);

allModules.each(function(i, elem) {
    let $elem = $(elem);
    if($elem.visible(true)) {
        $elem.addClass('already-visible');
    }
})

winElem.scroll(function(e) {
    allModules.each(function(i, elem) {
        let $elem = $(elem);
        if($elem.visible(true)) {
            $elem.addClass('come-in');
        }
    })
})

// tubeswap.js
// A jQuery plugin for swapping out an image placeholder with an embedded YouTube video.
// version 1.0
// December 5, 2012
// by Trenton Boyd
// trent.boyd@gmail.com

(function($) {
    "use strict";
    $.fn.tubeswap = function(p,c) {
        var d = {
                'autoplay': 1,
                'showinfo': 0,
                'modestbranding': 1,
                'iv_load_policy': 3
            },
            o = $.param($.extend({}, d, p)),
            h = this.height(),
            w = this.width(),
            v = this.data('video'),
            s = '<object width="' + w + '" height="' + h + '"><param name="movie" value="http://www.youtube.com/v/' + v + '?version=3&' + o + '"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/' + v + '?version=3&' + o + '" type="application/x-shockwave-flash" width="' + w + '" height="' + h + '" allowscriptaccess="always" allowfullscreen="true"></embed></object>';

        this.click(function() {
            $(this).empty().html(s);
            if (typeof c === 'function') {
                c.call(this);
            }
        });
    };
})(jQuery);
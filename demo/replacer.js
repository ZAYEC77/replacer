(function () {
    jQuery.fn.replacer = function (cases) {
        var owner = jQuery(this);
        var innerHtml = owner.html();
        var lastTarget = owner;

        function checkMedia() {
            var target = cases.reduce(function (target, item) {
                var element = item[0];
                var media = item[1];
                if (window.matchMedia(media).matches) {
                    return element;
                }
                return target;
            }, null);
            if (target === null) {
                target = owner;
            }
            if (target !== lastTarget) {
                lastTarget.html("");
                target.html(innerHtml);
                lastTarget = target;
            }
        }

        jQuery(window).on("resize", function () {
            checkMedia();
        });
        checkMedia();
    };
})();

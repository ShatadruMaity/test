(function ($) {  
    function loadAdobeLaunchCode() {
    var httpProtocol = window.location.protocol;
    var url = "//assets.adobedtm.com/f817b207cd04/ea760ba43ec3/launch-ENb2cf8f610b9140c7a4613d7743e517e5-development.min.js";
    $.getScript(httpProtocol + url, function () {         
        });
    }  
})(jQuery);

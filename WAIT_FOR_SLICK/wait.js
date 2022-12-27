// wait for jquery
function waitForjQuery(trigger) {
    var interval = setInterval(function() {
        if (window.jQuery != undefined) {
            clearInterval(interval);
            trigger();
        } else {
            addJQuery();
        }
    }, 50);
    setTimeout(function() {
        clearInterval(interval);
    }, 15000)
}

function addJQuery() {
    var jQueryScript = document.createElement('script');
    // check for updated jquery cdn
    jQueryScript.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
    document.getElementsByTagName('head')[0].appendChild(jQueryScript);
}

// wait for jquery

function waitForSlick(trigger) {
    var interval = setInterval(function() {
        if (window.jQuery.fn.slick != undefined) {
            clearInterval(interval);
            trigger();
        }
    }, 50);
    setTimeout(function() {
        clearInterval(interval);
    }, 15000)
}

// slick script and css cdn
function addScript() {
    var cssScript = '' +
        "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css'/>";
    let themeCssScript = `<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'/>`;
    document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
    document.querySelector('head').insertAdjacentHTML('beforeend', themeCssScript);

    var swiperScript = document.createElement('script');
    swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
    document.getElementsByTagName('head')[0].appendChild(swiperScript);
}


// how to use an example
waitForjQuery(function() {
    addScript();

    waitForSlick(function() {
        var $ = window.jQuery;
        $('html body #toSort .offices-list-item-images').slick({
            dots: true,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
        });

        // moving h5 out of the slick
        document.querySelectorAll("html body #toSort .offices-list-item-images").forEach(imageBox => {
            let egPrice = imageBox.querySelector(".office-list-item-price");
            egIndex = imageBox.querySelector(".slick-track").children.length - 1;
            imageBox.querySelector(".slick-dots").insertAdjacentElement("afterend", egPrice);
            $(imageBox).slick('slickRemove', egIndex);
        });


    });

});
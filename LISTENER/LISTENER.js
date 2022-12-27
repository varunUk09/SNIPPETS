function listener() {
    /* These are the modifications: */
    window.addEventListener("locationchange", function() {
        /* when route change without page refresh */
        // do your task
        waitForElement('target_element_selector', init, 20, 15000);
    });
    history.pushState = ((f) =>
        function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("pushstate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        })(history.pushState);
    history.replaceState = ((f) =>
        function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("replacestate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        })(history.replaceState);
    window.addEventListener("popstate", () => {
        window.dispatchEvent(new Event("locationchange"));
    });
}
function live(selector, event, callback, context) {
    /****Helper Functions****/
    // helper for enabling IE 8 event bindings
    function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
    }
    // matches polyfill
    this.Element &&
        (function(ElementPrototype) {
            ElementPrototype.matches =
                ElementPrototype.matches ||
                ElementPrototype.matchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                function(selector) {
                    var node = this,
                        nodes = (node.parentNode || node.document).querySelectorAll(selector),
                        i = -1;
                    while (nodes[++i] && nodes[i] != node);
                    return !!nodes[i];
                };
        })(Element.prototype);
    // live binding helper using matchesSelector
    function live(selector, event, callback, context) {
        addEvent(context || document, event, function(e) {
            var found,
                el = e.target || e.srcElement;
            while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
            if (found) callback.call(el, e);
        });
    }
    live(selector, event, callback, context);
}

live('selector', 'event', function() {
    // do your task
});
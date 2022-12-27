const send = XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.send = function() {
    this.addEventListener('load', function() {
        console.log('global handler', this.responseText)
        // add your global handler here
    })
    return send.apply(this, arguments)
}
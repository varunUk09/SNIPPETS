/************** GA Events *****************/
function trackGAEvent(eventCategory, eventAction, eventLabel) {
    if ('ga' in window) {
        ga.getAll()[0].send('event', {
            eventCategory: eventCategory,
            eventAction: eventAction,
            eventLabel: eventLabel,
        });
    }
}

// example to how to use it
document.querySelector('.wizard-steps .wizard-step:nth-of-type(6)').addEventListener('click', function() {
    trackGAEvent('Wizard', 'Click', 'Stepper_Step_6')
});
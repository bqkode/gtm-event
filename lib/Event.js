'use strict';



function Event(c, a, l, v) {

    if (typeof c == 'undefined' || typeof a == 'undefined' || c == null || a == null) {
        //console.warn('GTM Event missing Category or Action, or values are null.');
        return false;
    } else if (typeof c != 'string'
                || typeof a != 'string'
                || (typeof l != 'undefined' && typeof l != 'string')
                || (typeof v != 'undefined' && typeof v != 'number')) {
        //console.warn('GTM Event parameter has wrong typeof.');
        return false;
    } else {

        var window = window || {dataLayer: []};
        window.dataLayer.push({
            'event'         : 'gtm-event',
            'eventCategory' : c,
            'eventAction'   : a,
            'eventLabel'    : l,
            'eventValue'    : v,
        });

        return true;
    }
}


module.exports = Event;
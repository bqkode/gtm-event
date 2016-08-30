'use strict';

function Event(c, a, l, v) {

    if (typeof c == 'undefined' || typeof a == 'undefined' || c == null || a == null) {
        return false;
    } else if (typeof c != 'string'
                || typeof a != 'string'
                || (typeof l != 'undefined' && typeof l != 'string')
                || (typeof v != 'undefined' && typeof v != 'number')) {
        return false;
    } else {

        var w = window || {};
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
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
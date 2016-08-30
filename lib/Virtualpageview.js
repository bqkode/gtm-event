'use strict';

function VirtualPageview(path) {

    if (typeof path != 'string' || path == null || path.length < 1) {
        return false;
    } else {

        var w = window || {};
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
            'event': 'gtm-virtualpageview',
            'eventPage': path,
        });

        return true;
    }
}

module.exports = VirtualPageview;
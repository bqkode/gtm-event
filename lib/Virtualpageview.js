'use strict';

function Virtualpageview(path) {

    if (typeof path != 'string' || path == null || path.length < 1) {
        return false;
    } else {

        w = window || {};
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
            'event': 'gtm-virtualpageview',
            'eventPage': path,
        });

        return true;
    }
}

module.exports = Virtualpageview;
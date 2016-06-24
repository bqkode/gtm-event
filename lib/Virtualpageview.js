'use strict';



function Virtualpageview(path) {

    if (typeof path != 'string' || path == null || path.length < 1) {
        //console.warn('GTM Virtual Pageview is missing the page parameter');
        return false;
    } else {

        var window = window || {dataLayer: []};
        window.dataLayer.push({
            'event': 'gtm-virtualpageview',
            'eventPage': path,
        });

        return true;
    }
}


module.exports = Virtualpageview;
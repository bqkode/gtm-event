#gtm-event

A Google Tag Manager package for node. It is a simple wrapper for the dataLayer for sending events and virtual pageview tracking to Google Analytics. It does this by assuming a lot of the event variables and trigger event names in GTM. Please see the `GTM Setup` section below.

This package is useful for setting up simple tracking while keeping your code DRY.
It could also work as a recipe for those who are not that familiar with GTM.


#### Installation
`npm install gtm-event`

#### Note
Since v0.1.1 the GTM.Event is called GTM.event to please some linters.


#### Usage
```javascript
// Require the package
var GTM = require('gtm-event');

// Or for Meteor
import GTM, {event, virtualPageview} from 'gtm-event';

// Track event
GTM.event('category'(req), 'action'(req), 'label'(opt), value(opt);

// Virtual pageview tracking
GTM.virtualPageview('/my/virtual/path');
```

The fn(x)´s will return true or false, based on their validity.


#### GTM Setup

This setup is based on my own preferences, but will hopefully make sense.

First, start by making 5 variables, of the type `Data Layer Variable`, with the following names and Data Layer Variable names: `eventCategory`, `eventAction`, `eventLabel`, `eventValue` and `eventPage`. This will make the different parameters available to us.

Then create a trigger with the name `gtm-event` and type of `Custom Event`. It should fire on the event name `gtm-event`. Make one more trigger, with the names set to `gtm-virtualpageview`.

Next we´ll configure the actual event tracking tag;
Create a tag with the name of `gtm-event`, and make it an universal analytics type.
Input your tracking ID, and select the track type as `Event`.
Insert the `eventCategory`, `eventAction`, `eventLabel`, `eventValue` variables in the respective fields under `Event Tracking Parameters`.
Click `continue`, and make it fire on the trigger `gtm-event`. Then Save the tag.

Make one more tag, and name it `gtm-virtualpageview`, also as an universal analytics type.
The track type will be `Pageview` for this one, and under `More settings` → `Fields to set` enter `page` under field name and insert the `eventPage` variable in the Value field. Go ahead and make it fire on the `gtm-virtualpageview` trigger.

Publish the changes to GTM, and your Google Analytics account should be reporting events and virtual pageviews.



####Running tests
`npm run test`
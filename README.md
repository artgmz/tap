# Tap

## Description:
Clicking on a button on a mobile device is slow due to a 300ms delay on event firing. This is done because mobile browsers want to give you enough time to double-tap before firing an event (if the click event was fired when the first tap was detected, you would never be able to execute a double-tap). This directive is meant to work around the delay through detection of touch events.

Worth noting that this may be obsolete now because some mobile browsers (namely, Chrome on Android) are eliminating the delay for the mobile web.

## Dependencies:
* AngularJS 1.0.4

## Notes:
* Angular has changed a lot since this directive was written, so its entirely possible that it doesn't work with newer versions.
* Should be used on mobile only for best results.

## Sample Usage:
```
<button class="btn btn-large" data-tap="action()">Action</button>
```
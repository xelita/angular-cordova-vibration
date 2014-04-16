angular-cordova-vibration
=========================

Bring Apache Cordova Vibration API to AngularJS Apps...

Define a simple service to deal with Cordova Vibration Plugin (https://github.com/apache/cordova-plugin-vibration).

[![Build Status](https://travis-ci.org/xelita/angular-cordova-vibration.png?branch=master)](https://travis-ci.org/xelita/angular-cordova-vibration)

Usage
-----
Include cordovaVibrationModule.js in your Cordova application.

```html
<script src="js/cordovaVibrationModule.js"></script>
```

or use the minified version:

```html
<script src="js/cordovaVibrationModule.min.js"></script>
```

Add the module `cordovaVibrationModule` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['cordovaVibrationModule']);
```

Use the cordovaVibrationService as controller dependency and call cordovaVibrationService API:

```js
$scope.vibrate = function(ms) {
    cordovaVibrationService.vibrate(ms);
};
```

Sample
------
A sample based on Ionic Framework can be found here:
https://github.com/xelita/angular-cordova-vibration-sample
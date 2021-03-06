# [angular-cordova-vibration][![Build Status](https://travis-ci.org/xelita/angular-cordova-vibration.png?branch=master)](https://travis-ci.org/xelita/angular-cordova-vibration)

This project brings [Apache Cordova](https://cordova.apache.org) (also known as [Adobe PhoneGap](http://phonegap.com)) [Vibration API](https://github.com/apache/cordova-plugin-vibration) to [AngularJS](http://angularjs.org) Mobile Apps...

## Quick start

+ Include cordovaVibrationModule.js in your Cordova application.

```html
<script src="js/cordovaVibrationModule.js"></script>
```

or use the minified version:

```html
<script src="js/cordovaVibrationModule.min.js"></script>
```

+ Add the module `cordovaVibrationModule` as a dependency to your app module:

```javascript
var myapp = angular.module('myapp', ['cordovaVibrationModule']);
```

+ Use the cordovaVibrationService as controller dependency and call cordovaVibrationService API:

```js
$scope.vibrate = function(ms) {
    cordovaVibrationService.vibrate(ms);
};
```

## Ionic Sample

A sample based on [Ionic Framework](http://ionicframework.com) can be found here:
https://github.com/xelita/angular-cordova-plugins-sample

## Developers

Clone the repo, `git clone git://github.com/xelita/angular-cordova-vibration.git`.
The project is tested with `jasmine` running on `karma`.

>
``` bash
$ npm install
$ npm run bower
$ npm test
```

## Contributing

Please submit all pull requests the against master branch. If your unit test contains JavaScript patches or features, you should include relevant unit tests. Thanks!

## Copyright and license

    The MIT License (MIT)

    Copyright (c) 2014 The Enlightened Developer

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

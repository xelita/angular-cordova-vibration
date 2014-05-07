describe("cordovaVibrationModule Tests Suite", function () {

    // cordovaVibrationConstants

    describe("cordovaVibrationConstants Tests", function () {

        var cordovaVibrationConstants;

        beforeEach(function () {
            module('cordovaVibrationModule');
            inject(function (_cordovaVibrationConstants_) {
                cordovaVibrationConstants = _cordovaVibrationConstants_;
            });
        });

        it("apiVersion", function () {
            expect(cordovaVibrationConstants.apiVersion).toBe('1.0.0');
        });

        it("cordovaVersion", function () {
            expect(cordovaVibrationConstants.cordovaVersion).toBe('>=3.4.0');
        });
    });

    // cordovaVibrationService

    describe("cordovaVibrationModule Tests", function () {

        var cordovaVibrationService;
        var cordovaVibrationConstants;

        beforeEach(function () {
            module('cordovaVibrationModule');
            inject(function (_cordovaVibrationService_, _cordovaVibrationConstants_) {
                cordovaVibrationService = _cordovaVibrationService_;
                cordovaVibrationConstants = _cordovaVibrationConstants_;
            });
            navigator.notification = null;
        });

        it("apiVersion should return apiVersion defined in cordovaVibrationConstants", function () {
            expect(cordovaVibrationService.apiVersion()).toBe('1.0.0');
        });

        it("cordovaVersion should return apiVersion defined in cordovaVibrationConstants", function () {
            expect(cordovaVibrationService.cordovaVersion()).toBe('>=3.4.0');
        });

        // TODO - Unit tests on vibrate method
    });
});
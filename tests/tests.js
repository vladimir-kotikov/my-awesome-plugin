exports.defineAutoTests = function() {
    describe('plugin', function() {
        it('should be exposed as plugins.appPreferences object', function() {
            expect(cordova.plugins.MyAwesomePlugin).toBeDefined();
            expect(cordova.require('my-awesome-plugin.MyAwesomePlugin'))
                .toBe(cordova.plugins.MyAwesomePlugin);
        });

        it('should have corresponding methods defined', function() {
            ['coolMethod', 'logCoolMessage'].forEach(function(methodName) {
                expect(cordova.plugins.MyAwesomePlugin[methodName]).toBeDefined();
                expect(cordova.plugins.MyAwesomePlugin[methodName]).toEqual(jasmine.any(Function));
            });
        });
    });
};

exports.defineManualTests = function(contentEl, createActionButton) {
    // To be done
};

exports.defineAutoTests = function() {
    describe('plugin', function() {
        it('should be exposed as cordova.plugins.MyAwesomePlugin object', function() {
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

exports.defineManualTests = function(content, createActionButton) {

    var show_alert_test =
        '<h3>Press "Show alert" button to display a message box</h3>' +
        '<div id="show_alert"></div>' +
        'Expected result: A message box should appear with message "It works!"';

    content.innerHTML = '<div id="info"></div>' + show_alert_test;

    var log = document.getElementById('info');
    var logMessage = function (message) {
        var logLine = document.createElement('div');
        logLine.innerHTML = message;
        log.appendChild(logLine);
    };

    createActionButton('Show alert', function() {
        log.innerHTML = 'Displaying message';
        cordova.plugins.MyAwesomePlugin.logCoolMessage('It works!');
    }, "show_alert");
};

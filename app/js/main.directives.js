app.directive('sampleDirective', function() {
    return {
        restrict: 'AE',
        scope: {
            file: '@'
        },
        link: function(scope, el, attrs) {
            //Directive code
        }
    };
});


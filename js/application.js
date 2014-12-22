var Application = (function(ApplicationView){

    return function () {
        this.initialize = function() {
            new ApplicationView().render();
        };
    }

})(ApplicationView);

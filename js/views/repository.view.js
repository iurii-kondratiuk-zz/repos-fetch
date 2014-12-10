var RepositoryView = (function ($) {

    var template = '<div class="repo">' +
                        '<a href="{{url}}">{{name}}</a>' +
                    '</div>';
    
    var model = null;
    var view = null;
    var $parent = null;

    return function(data) {

        model = data;
        $parent = $("#repo-list");

        this.render = function() {
            view = $(template.replace("{{url}}", model.url).replace("{{name}}", model.name));

            $parent.append(view);
        };
    }

})(jQuery);
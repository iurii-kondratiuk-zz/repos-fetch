var ApplicationView = (function ($, ApplicationController, RepositoryView) {

    var $parent = $("#wrapper");
    var template = '<div class="inputs">' +
                        '<lable for="username">GitHub User Name: </lable><input id="username" type="text" />' +
                        '<input id="find" type="button" value="Find repositories"/>' +
                    '</div>' +
                    '<div class="repos">' +
                        '<div class="title">Repositories:</div><br>' +
                        '<div id="repo-list"></div>' +
                    '</div>';

    return function() {
        this.render = function(options) {
            $parent.append($(template));


            this.setListeneres();
        };

        this.setListeneres = function () {
           $parent.find("#find").on("click", this.onFindCliked.bind(this));
        };

        this.onFindCliked = function(event) {
            var username = $parent.find("#username").val();

            ApplicationController.fetchRepositries({
                username: username,
                success: this.renderRepositories.bind(this),
                error: this.renderError.bind(this)
            })
        };

        this.renderRepositories = function(repositories) {
             $parent.find("#repo-list").empty();

            if(repositories.length > 0) {
                for(repo in repositories) {
                    new RepositoryView(repositories[repo]).render();
                } 
            } else {
                $parent.find("#repo-list").append("<span class='info'>User has no repos</span>");
            }
        }

        this.renderError = function (type) {
            $parent.find("#repo-list").html("<span class='error'>"+ type +"</span>");
        }

    }

})(jQuery, ApplicationController, RepositoryView);
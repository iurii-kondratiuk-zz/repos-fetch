var ApplicationController = (function($){

    return {
    	fetchRepositries: function (options) {
    		$.ajax({
                type: "GET",
                url: "https://api.github.com/users/{{username}}/repos".replace("{{username}}", options.username),
                success: this.onFetchSuccess.bind(options),
                error: this.onFetchError.bind(options)
            });
    	},

    	onFetchSuccess: function(data, error){
    		var repositories = [];

    		for(var i = 0, len = data.length; i < len; i ++) {
    			repositories.push({
    				name: data[i].name,
    				url: data[i].url.replace("api.", "").replace("repos/", "")
    			});
    		}

    		this.success(repositories);
    	},

    	onFetchError: function(data, error, type) {
    		if(type) {
    			this.error("This Github user does not exist");
    		} else {
    			this.error("The Github API does not respond");
    		}
    	}
    }

})(jQuery);
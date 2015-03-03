/* global cordova, StatusBar */
(function(){
    "use strict";

    angular
    	.module("ionCloud")
        .run(function($ionicPlatform) {
		  	$ionicPlatform.ready(function() {
				// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
				// for form inputs)
				if (window.cordova && window.cordova.plugins.Keyboard) {
				  	cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				}
				if (window.StatusBar) {
					// org.apache.cordova.statusbar required
				  	StatusBar.styleDefault();
				}
		  	});
		})
		.config(function($stateProvider, $urlRouterProvider) {
		  	$stateProvider

		  	.state("app", {
				url: "/app",
				abstract: true,
				templateUrl: "templates/menu.html",
				controller: "AppCtrl"
		  	})

		  	.state("app.inbox", {
				url: "/inbox",
				views: {
					"menuContent": {
						templateUrl: "templates/inbox.html",
						controller: "InboxCtrl as ctrl"
				  	}
				}
		  	})
		  	.state("app.inbox.message", {
				url: "/message/:id",
				views: {
					"messageContent": {
						templateUrl: "templates/message.html",
						controller: "InboxCtrl as ctrl"
				  	}
				}
		  	})
		  	.state("app.vip", {
				url: "/vip",
				views: {
					"menuContent": {
						templateUrl: "templates/vip.html"
				  	}
				}
		  	})
		  	.state("app.drafts", {
				url: "/drafts",
				views: {
					"menuContent": {
						templateUrl: "templates/drafts.html"
				  	}
				}
		  	})
		  	.state("app.sent", {
				url: "/sent",
				views: {
					"menuContent": {
						templateUrl: "templates/sent.html"
				  	}
				}
		  	})
		  	.state("app.archive", {
				url: "/archive",
				views: {
					"menuContent": {
						templateUrl: "templates/archive.html"
				  	}
				}
		  	})
		  	.state("app.trash", {
				url: "/trash",
				views: {
					"menuContent": {
						templateUrl: "templates/trash.html"
				  	}
				}
		  	})
		  	.state("app.junk", {
				url: "/junk",
				views: {
					"menuContent": {
						templateUrl: "templates/junk.html"
				  	}
				}
		  	});
		  	
		  	// if none of the above states are matched, use this as the fallback
		  	$urlRouterProvider.otherwise("/app/inbox");
		});    
})();
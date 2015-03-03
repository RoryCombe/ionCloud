(function(){
    "use strict";

    angular
        .module("ionCloud.controllers")
        .controller("InboxCtrl", control);

    function control($scope, $ionicPopover) {
        var ctrl = this;

        ctrl.messages = [
			{
				from: "John Appleseed",
				to: "Kate Bell",
				subject: "Have you seen this?",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet velit eget lorem eleifend sodales vitae at massa. Aenean vel arcu eu ipsum consectetur maximus. Nunc et commodo sapien. Aliquam venenatis, tellus non porta suscipit, dolor massa tincidunt dui, sit amet porttitor dolor ipsum ut ipsum. Proin commodo neque iaculis libero malesuada finibus. Sed vel nibh interdum, feugiat leo a, mollis elit. Nulla vel pulvinar ligula. Nulla ultricies mauris ac ante ultrices, at maximus nulla posuere." +
						"Ut consectetur, velit hendrerit egestas hendrerit, nisi diam dictum lacus, vel efficitur nisi lacus eu dui. Donec bibendum, odio vitae tempus pellentesque, ligula felis interdum ante, at euismod tortor velit vel mauris. Nunc vitae scelerisque libero. In hac habitasse platea dictumst. Suspendisse iaculis, lacus non posuere euismod, arcu leo commodo nunc, hendrerit consectetur felis enim non eros. Nulla ultricies erat at tincidunt suscipit. Morbi convallis quis justo et scelerisque. Sed sit amet magna ante. Nam et ornare risus." +
						"Nam ultricies sollicitudin ultrices. Vestibulum dictum vel urna a interdum. Proin in arcu ex. Nulla in dui ut sem dapibus pulvinar. Nunc congue porta ante a blandit. Aenean ultricies, est tincidunt varius mollis, justo lacus aliquet augue, sed lacinia ex nisi sit amet arcu. Etiam sollicitudin facilisis sem, sit amet vehicula tellus. In eget neque turpis. Suspendisse vestibulum, dui ac maximus vulputate, erat velit pulvinar libero, id convallis nunc metus ut orci. Cras sodales in eros vel gravida. Pellentesque eu turpis ligula. In et odio non nisi efficitur suscipit eget at lacus. Vestibulum aliquet cursus enim vel auctor. Mauris quis aliquam lectus. Aliquam interdum lobortis arcu ut porttitor." +
						"Curabitur diam velit, hendrerit vitae metus ac, accumsan tincidunt diam. Vivamus pellentesque semper est id ultrices. Praesent gravida erat quis leo gravida, blandit posuere risus faucibus. Ut ut neque tellus. Vivamus cursus suscipit urna, ut pretium diam viverra et. Aenean malesuada tempor dui in pretium. Cras dignissim, nisi nec hendrerit molestie, purus lorem porttitor magna, id tempor ex lacus vitae nisl. Mauris nec suscipit elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent posuere, magna ut feugiat luctus, arcu ligula placerat nunc, a dapibus justo risus at leo. Aenean in tellus blandit tellus consequat euismod quis id orci." + 
						"Sed eu lectus nibh. Nam libero ligula, eleifend at erat imperdiet, luctus sagittis nibh. Phasellus fringilla enim a vulputate viverra. Maecenas nisi nibh, volutpat quis fermentum nec, tempus id dolor. In hac habitasse platea dictumst. Maecenas urna velit, scelerisque tincidunt lorem a, varius pretium sem. Praesent in urna ultrices, convallis dolor non, consequat metus."
			},
			{
				from: "John Appleseed",
				to: "Kate Bell",
				subject: "Have you seen this?",
				body: "Lorem Ipsum"
			},
			{
				from: "John Appleseed",
				to: "Kate Bell",
				subject: "Have you seen this?",
				body: "Lorem Ipsum"
			}
		];

		ctrl.message = ctrl.messages[0];

		////////////////
		
		// .fromTemplate() method
  		//var template = "<ion-popover-view><ion-header-bar> <h1 class=\"title\">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>";

  		ctrl.popover = $ionicPopover.fromTemplateUrl("templates/sortPopover.html", {
			scope: $scope,
		}).then(function(popover) {
			ctrl.popover = popover;
		});

		ctrl.openPopover = function($event) {
			ctrl.popover.show($event);
		};
		ctrl.closePopover = function() {
			ctrl.popover.hide();
		};
		//Cleanup the popover when we"re done with it!
		$scope.$on("$destroy", function() {
			ctrl.popover.remove();
		});
		// Execute action on hide popover
		$scope.$on("popover.hidden", function() {
			// Execute action
		});
		// Execute action on remove popover
		$scope.$on("popover.removed", function() {
			// Execute action
		});

	}
})();
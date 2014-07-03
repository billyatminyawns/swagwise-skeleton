(function(angular) {

	var app = angular.module('Swagwise');

	//app.service()

	app.factory('SwagService',function($http) {

		return {

			swag: function() {

				return $http.get('assets/json/swag.json');
			}
		}

	});

})(window.angular);
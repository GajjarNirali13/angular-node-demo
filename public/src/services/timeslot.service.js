(function () {
	angular
		.module('timeSlot')
		.factory('TimeSlotService', TimeSlotService);

		TimeSlotService.$inject = ['$q', '$http'];

		function TimeSlotService ($q, $http) {

			return {
				'getTimeSlotList': getTimeSlotList,
				'updateTimeSlot': updateTimeSlot,
				'showPopupMessage': showPopupMessage
			};

			function getTimeSlotList () {
				var defer = $q.defer();
				$http({
			        method : "GET",
			        url : "/api/timeslot"
			    }).then(function mySucces(response) {
				    defer.resolve(response.data);
			    }, function myError(error) {
				   	defer.reject(error);
			    });
				return defer.promise;			
			}	

			function updateTimeSlot (id, data) {
				var defer = $q.defer();
				$http.put("/api/timeslot/"+id, data)
					.then(function mySucces(response) {
					    defer.resolve(response.data);					    
				    }, function myError(error) {
					   	defer.reject(error);
				    });
				return defer.promise;
			}

			function showPopupMessage (title, message, type) {
				swal({
					title: title,
					text: message,
					type: type,
					confirmButtonText: "Ok"
				});	
			}
		}
	
})();
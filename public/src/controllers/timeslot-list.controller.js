(function () {
	angular
		.module('timeSlot')
		.controller('TimeSlotListController', TimeSlotListController);

		TimeSlotListController.$inject = ['TimeSlotService', '$state'];
		
		function TimeSlotListController (TimeSlotService, $state) {
			var vm = this;
			vm.timeSlotList = [];
			vm.goToDetailPage = goToDetailPage;

			activate ();
			function activate () {
				TimeSlotService.getTimeSlotList()
					.then(function (response) {
						vm.timeSlotList = response;
					}, function (error) {
						TimeSlotService.showPopupMessage('Opps!', 'Sorry, Something went wrong!', 'error');
					});
			}

			function goToDetailPage (timeSlot) {
				localStorage.setItem("timeSlot", JSON.stringify(timeSlot));
				$state.go('detail');
			}
		}
	
})();
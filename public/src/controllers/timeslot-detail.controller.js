(function () {
	angular
		.module('timeSlot')
		.controller('TimeSlotDetailController', TimeSlotDetailController);

		TimeSlotDetailController.$inject = ['TimeSlotService', '$state'];

		function TimeSlotDetailController (TimeSlotService, $state) {
			var vm = this;
			vm.detail = {};
			vm.detail = JSON.parse(localStorage.getItem("timeSlot"));
			vm.saveDetail = saveDetail;
			vm.cancel = cancel;

			function saveDetail (userForm) {
				if(userForm.$valid) {
					vm.detail.isBooked = true;					
					TimeSlotService.updateTimeSlot(vm.detail._id, vm.detail)
						.then(function(data){
							$state.go('list');
							TimeSlotService.showPopupMessage('Yippee!', 'Detail saved successfully!', 'success');
						},function(error){
							TimeSlotService.showPopupMessage('Opps!', 'Sorry, Something went wrong!', 'error');
						});
				}				
			}

			function cancel () {
				vm.detail = JSON.parse(localStorage.getItem("timeSlot"))
			}
		}
	
})();
setTimeout(function() {
	var weekly = document.querySelectorAll('.weekly-table')[0];
	var top = weekly.querySelectorAll('.top')[0];
	var summary = top.querySelectorAll('tr.summary')[0];
	var hours = summary.querySelectorAll('.summary-cell');

	for (var i = 0; i < hours.length; i++) {
		var totalHours = 0;
		var totalMins = 0;

		var billable = hours[i].querySelectorAll('.billable')[0].innerHTML;
		var unbillable = hours[i].querySelectorAll('.non-billable')[0].innerHTML;

		if (billable !== '--') {
			billable = /(\d+)[h] (\d+)[m]/.exec(billable)
			totalHours += parseInt(billable['1']);
			totalMins += parseInt(billable['2']);
		}

		if (unbillable !== '--') {
			unbillable = /(\d+)[h] (\d+)[m]/.exec(unbillable)
			totalHours += parseInt(unbillable['1']);
			totalMins += parseInt(unbillable['2']);
		}

		if (totalMins > 60) {
			var extraHours = Math.floor(totalMins / 60);
			totalHours += extraHours;
			totalMins -= extraHours * 60;
		}
		hours[i].insertAdjacentHTML('beforeend', '<div><strong style="color:orange;">' +  totalHours + 'h ' + totalMins + 'm</strong></div>');
	}
}, 1000);
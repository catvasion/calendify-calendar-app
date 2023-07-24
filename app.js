document.addEventListener('DOMContentLoaded', () => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const currentDate = (month, year) => {
		let startOfMonth = new Date(year, month).getDay();
		let numOfDays = 33 - new Date(year, month, 33).getDate();

		let renderMonth = document.getElementById('month');
		let renderYear = document.getElementById('year');
		console.log(renderMonth);

		renderMonth.textContent = months[month];
		renderYear.textContent = year;
	};
	const now = new Date();
	const currentMonth = now.getMonth();
	const currentYear = now.getFullYear();
	currentDate(currentMonth, currentYear);
});

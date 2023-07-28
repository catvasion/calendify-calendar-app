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
		let renderNum = 0;

		let renderMonth = document.getElementById('month');
		let renderYear = document.getElementById('year');

		renderMonth.textContent = months[month];
		renderYear.textContent = year;
		let dates = document.getElementById('dates');

		for (let i = 1; i <= 6; i++) {
			let row = document.createElement('div');
			row.classList.add('row');
			for (let j = 0; j < 7; j++) {
				let cell = document.createElement('div');
				cell.classList.add('cell');
				row.appendChild(cell);
				if (renderNum > numOfDays) {
					break;
				}
				cell.textContent = renderNum;
				renderNum++;
			}
			dates.appendChild(row);
		}
	};
	const now = new Date();
	const currentMonth = now.getMonth();
	const currentYear = now.getFullYear();
	currentDate(currentMonth, currentYear);
});

// const now = new Date();
// 	const currentMonth = now.getMonth();
// 	const currentYear = now.getFullYear();
// 	currentDate(currentMonth, currentYear);

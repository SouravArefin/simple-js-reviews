const debounce = (func, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};

const runComparison = () => {
	const leftSideStats = document.querySelectorAll(
		'.left-summary .notification'
	);
	const rightSideStats = document.querySelectorAll(
		'.right-summary .notification'
	);

	leftSideStats.forEach((leftStat, index) => {
		const rightStat = rightSideStats[index];
		const leftSideValue = leftStat.dataset.value;
		const rightSideValue = rightStat.dataset.value;

		if (rightSideValue > leftSideValue) {
			leftStat.classList.remove('is-primary');
			leftStat.classList.add('is-warning');
		} else {
			rightStat.classList.remove('is-primary');
			rightStat.classList.add('is-warning');
		}
	});
};

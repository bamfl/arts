const anchorScroll = (upSelector) => {
	const upElem = document.querySelector(upSelector);

	document.body.addEventListener('scroll', () => {
		if (document.body.scrollTop > 1650) {
			upElem.classList.add('animated', 'fadeIn');
			upElem.classList.remove('fadeOut');
		} else {
			upElem.classList.add('fadeOut');
			upElem.classList.remove('fadeIn');
		}
	});
};

export default anchorScroll;

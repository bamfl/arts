const modals = () => {
	const openPopupAction = (popupSelector) => {
		document.querySelector(popupSelector).style.cssText = 'display: block';

		if (popupSelector === '.popup-gift') {
			document.querySelector('.fixed-gift').style.cssText = 'display: none';
		}

		clearTimeout(timerId);
	};

	const openPopup = (btnSelector, popupSelector) => {
		document.querySelectorAll(btnSelector).forEach(btn => {
			btn.addEventListener('click', (event) => {
				event.preventDefault();
				openPopupAction(popupSelector);
				document.body.style.cssText = 'overflow: hidden';
			});
		});
	};

	const closePopup = (popupSelector) => {
		document.querySelector(popupSelector).addEventListener('click', (event) => {
			if (event.target.matches('.popup-close') || event.target.matches(popupSelector)) {
				document.querySelector(popupSelector).style.cssText = 'display: none';
				document.body.style.cssText = '';
			}
		});
	};

	const timerId = setTimeout(() => openPopupAction('.popup'), 60000);

	openPopup('.button-design', '.popup-design');
	closePopup('.popup-design');

	openPopup('.button-consultation', '.popup-consultation');
	closePopup('.popup-consultation');

	openPopup('.fixed-gift', '.popup-gift');
	closePopup('.popup-gift');
};

export default modals;
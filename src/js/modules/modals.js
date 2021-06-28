const modals = () => {
	const openPopupAction = (popupSelector) => {
		document.querySelector(popupSelector).style.cssText = 'display: block';
		document.body.style.cssText = `
			overflow: hidden;
		`;

		if (popupSelector === '.popup-gift') {
			document.querySelector('.fixed-gift').style.cssText = 'display: none';
		}

		clearTimeout(timerId);
	};

	let isOnce = true;

	document.body.addEventListener('scroll', () => {
		let condition = document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight;
		
		if (condition && isOnce) {
			openPopupAction('.popup-gift');
			isOnce = false;
		}
	});

	const openPopup = (btnSelector, popupSelector) => {
		document.querySelectorAll(btnSelector).forEach(btn => {
			btn.addEventListener('click', (event) => {
				event.preventDefault();
				openPopupAction(popupSelector);
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

	const timerId = setTimeout(() => openPopupAction('.popup-consultation'), 60000);

	openPopup('.button-design', '.popup-design');
	closePopup('.popup-design');

	openPopup('.button-consultation', '.popup-consultation');
	closePopup('.popup-consultation');

	openPopup('.fixed-gift', '.popup-gift');
	closePopup('.popup-gift');
};

export default modals;
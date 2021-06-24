const burgerMenu = () => {
	const burgerBtn = document.querySelector('.header .burger'),
				burgerMenu = document.querySelector('.header .burger-menu');

	burgerBtn.addEventListener('click', () => {
		burgerMenu.classList.toggle('active');
	});
};

export default burgerMenu;
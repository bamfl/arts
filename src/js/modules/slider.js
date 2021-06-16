const slider = () => {
	const initSlider = (sliderSelector) => {
		const slider = document.querySelector(sliderSelector),
					wrapper = slider.lastElementChild;

		let counter = 1;

		const nextSlide = () => {
			if (counter < wrapper.children.length) {
				wrapper.style.cssText = `
					transform: translateY(-${counter * parseInt(getComputedStyle(slider).height)}px);
				`;
				counter++;
			} else {
				clearInterval(intervalId);
			}
		};

		const intervalId = setInterval(nextSlide, 3000);
	};

	initSlider('.main-slider');
};

export default slider;

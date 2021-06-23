const slider = () => {
	const initSlider = (sliderSelector, direction) => {
		const slider = document.querySelector(sliderSelector),
					wrapper = slider.lastElementChild,
					prevBtn = document.querySelector('.main-prev-btn'),
					nextBtn = document.querySelector('.main-next-btn');

		let counter = 0;

		const prevSlide = () => {
			if (counter > 0) {
				console.log(counter);

				if (direction === 'Y') {
					wrapper.style.cssText = `
					transform: translate${direction}(-${(counter - 1) * parseInt(getComputedStyle(slider).height)}px);
					`;
				} else {
					wrapper.style.cssText = `
					transform: translate${direction}(-${(counter - 1) * parseInt(getComputedStyle(slider).width)}px);
					`;
				}

				counter--;
			} else {
				clearInterval(intervalId);
			}
		};

		const nextSlide = () => {
			if (counter < wrapper.children.length - 1) {
				if (direction === 'Y') {
					wrapper.style.cssText = `
						transform: translate${direction}(-${(counter + 1) * parseInt(getComputedStyle(slider).height)}px);
					`;
				} else {
					wrapper.style.cssText = `
						transform: translate${direction}(-${(counter + 1) * parseInt(getComputedStyle(slider).width)}px);
					`;
				}
				counter++;
			} else {
				clearInterval(intervalId);
			}
		};

		prevBtn.addEventListener('click', () => {
			prevSlide();
		});

		nextBtn.addEventListener('click', () => {
			nextSlide();
		});

		const intervalId = setInterval(nextSlide, 5000);
	};

	initSlider('.main-slider', 'Y');
	initSlider('.feedback-slider', 'X');
};

export default slider;

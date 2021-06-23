const accordion = () => {
	const accordionHeaders = document.querySelectorAll('.accordion-heading'),
				accordionContents = document.querySelectorAll('.accordion-block');

	const closeContent = () => {
		accordionContents.forEach(item => {
			item.style.cssText = `
				height: 0px;
				overflow: hidden; 
				margin: 0; 
				padding: 0; 
				background-color: #fff;
				font-size: 0;
			`;
		});
	};

	const openContent = () => {
		accordionHeaders.forEach((item, idx) => {
			item.addEventListener('click', () => {
				closeContent();

				accordionContents[idx].style.cssText = `
					transition: padding-top 0.5s, padding-bottom 0.5s, margin-top 0.5s, margin-bottom 0.5s, font-size 0.5s;
				`;
			});
		});
	};

	closeContent();
	openContent();
};

export default accordion;
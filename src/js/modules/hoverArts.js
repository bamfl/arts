const hoverArts = () => {
	const artBlocsks = document.querySelectorAll('.sizes-block');

	artBlocsks.forEach(block => {
		let img = block.firstElementChild; 
		
		block.addEventListener('mouseenter', () => {
			let src = img.getAttribute('src');
			img.setAttribute('src', `${src.slice(0, -4)}-1.png`);
		});

		block.addEventListener('mouseleave', () => {
			let src = img.getAttribute('src');
			img.setAttribute('src', `${src.slice(0, -6)}.png`);
		});
	});
};

export default hoverArts;
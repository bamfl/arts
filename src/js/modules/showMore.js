const showMore = () => {
	const moreStylesBtn = document.querySelector('.button-styles');
	moreStylesBtn.addEventListener('click', () => {		
		document.querySelectorAll('.styles-2').forEach(item => {
			item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');			
			item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
		});

		moreStylesBtn.remove();
	});
};

export default showMore;

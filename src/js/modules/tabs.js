const tabs = () => {
	const tabsContainer = document.querySelector('#portfolio'),
				tabsMenu = tabsContainer.querySelector('.portfolio-menu'),
				tabsMenuItem = tabsContainer.querySelectorAll('.portfolio-menu li'),
				tabsContent = tabsContainer.querySelectorAll('.portfolio-block'),
				noContent = tabsContainer.querySelector('.portfolio-no');

	tabsMenu.addEventListener('click', (event) => {
		tabsMenuItem.forEach(tab => {
			tab.classList.remove('active');

			if (event.target === tab) {
				event.target.classList.add('active');
				noContent.style.display = 'block';
				
				tabsContent.forEach(tabContent => {
					tabContent.style.display = 'none';

					if (tabContent.classList.contains(event.target.classList[0])) {
						tabContent.style.display = 'block';
						noContent.style.display = 'none';
					}
				});
			}
		});
	});


	const initTabs = () => {
		tabsContent.forEach(tabContent => {
			tabContent.style.display = 'block';
		});
	};

	initTabs();
};

export default tabs;

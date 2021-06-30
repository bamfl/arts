const dbGetStyles = () => {
  const downloadBtn = document.querySelector('.button-db'),
    stylesContainer = document.querySelector('.styles .row');
  let styles;

  downloadBtn.addEventListener('click', () => {
    fetch('./assets/db.json')
      .then((response) => response.json())
      .then((data) => {
        styles = data.styles;
        styles.forEach(({src, title, link}) => {
          let el = document.createElement('div');
          el.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');

          el.innerHTML = `
							<div class=styles-block>
								<img src="${src}" alt>
								<h4>${title}</h4>
								<a href="${link}">Подробнее</a>
							</div>
						`;

          stylesContainer.append(el);
          downloadBtn.remove();
        });
      });
  });
};

export default dbGetStyles;

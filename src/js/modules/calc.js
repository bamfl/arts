const calc = () => {
	const form = document.querySelector('#calc'),
				fileHeader = form.querySelector('.file_upload'),
				file = form.querySelector('#file'),
				size = form.querySelector('#size'),
				material = form.querySelector('#material'),
				options = form.querySelector('#options'),
				promocode = form.querySelector('#promocode');

	let price = 0;

	const calcPrice = () => {
		if (size.value !== '0' && material.value !== '0') {
			if (size.value === '40x50') {
				price += 1000;
			} else if (size.value === '50x70') {
				price += 1500;
			} else if (size.value === '70x70') {
				price += 2000;
			} else if (size.value === '70x100') {
				price += 2500;
			}
	
			if (material.value === 'fiber') {
				price += 1500;
			} else if (material.value === 'linen') {
				price += 2000;
			} else if (material.value === 'cotton') {
				price += 2500;
			}
	
			if (options.value === 'gel') {
				price += 1500;
			} else if (options.value === 'express') {
				price += 2000;
			} else if (options.value === 'delivery') {
				price += 2500;
			}

			if (promocode.value === 'IWANTPOPART') {
				document.querySelector('.calc-price').innerHTML = price * 0.7;
			} else {
				document.querySelector('.calc-price').innerHTML = price;
			}
		}
	};

	file.addEventListener('change', () => {
		fileHeader.innerHTML = file.files[0].name;
	});

	size.addEventListener('change', () => calcPrice());

	material.addEventListener('change', () => calcPrice());

	options.addEventListener('change', () => calcPrice());

	promocode.addEventListener('change', () => calcPrice());

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		let messageDiv = document.createElement('div');
		messageDiv.innerHTML = 'Отправка данных';
		form.append(messageDiv);
		
		const formData = new FormData(form);
		formData.append('file', file.files[0]);
		formData.append('price', price);

		fetch('./assets/server.php', {
			method: 'POST',
			body: JSON.stringify(Object.fromEntries(formData.entries()))
		})
		.then(() => {
			messageDiv.innerHTML = 'Данные успешно отправлены!';
		})
		.catch(error => {
			messageDiv.innerHTML = `Произошла ошибка ${error}`;
		})
		.finally(setTimeout(() => {
			form.reset();
		}, 5000));
	});
};

export default calc;
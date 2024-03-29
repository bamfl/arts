function forms() {
	const postForm = (form) => {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			let messageDiv = document.createElement('div');
			messageDiv.innerHTML = 'Отправка данных';			
			form.append(messageDiv);

			const formData = new FormData(form);

			const isCyrillic = function (text) {
				return /[а-я]/i.test(text);
			};			

			console.log(form.length);

			if (form.length === 7) {
				if (!isNaN(form[3].value) && form[3].value.length === 11 && 
						isCyrillic(form[2].value) && isCyrillic(form[5].value)) {
					fetch('./assets/server.php', {
						method: 'POST',
						// body: JSON.stringify(Object.fromEntries(formData.entries())), // на JSON сервер
						body: formData
					})
					.then(() => {
						messageDiv.innerHTML = 'Данные успешно отправлены!';
					})
					.catch(error => {
						messageDiv.innerHTML = `Произошла ошибка ${error}`;
					})
					.finally(setTimeout(() => {
						form.reset();
						messageDiv.remove();
					}, 5000));
				} else if (!isCyrillic(form[2].value) && !isCyrillic(form[5].value)) {
					messageDiv.innerHTML = 'Допустим только русский язык';
					form[2].style.cssText = 'border: 2px solid red';
					form[5].style.cssText = 'border: 2px solid red';
	
					setTimeout(() => {
						form[2].style.cssText = '';
						form[5].style.cssText = '';
						messageDiv.remove();
					}, 5000);
				} else if (form[3].value.length < 11) {
					messageDiv.innerHTML = 'Короткий номер! Минимум 11 символов';
					form[3].style.cssText = 'border: 2px solid red';
	
					setTimeout(() => {
						form[3].style.cssText = '';
						messageDiv.remove();
					}, 5000);
				} else {
					messageDiv.innerHTML = 'В телефоне допустимы только цифры';
					form[3].style.cssText = 'border: 2px solid red';
	
					setTimeout(() => {
						form[3].style.cssText = '';
						messageDiv.remove();
					}, 5000);
				}
			} else if (form.length < 7 && form.length >= 4) {
				if (!isNaN(form[1].value) && form[1].value.length === 11 && 
						isCyrillic(form[0].value) && isCyrillic(form[3].value)) {
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
						messageDiv.remove();
					}, 5000));
				} else if (!isCyrillic(form[0].value) && !isCyrillic(form[3].value)) {
					messageDiv.innerHTML = 'Допустим только русский язык';
					form[0].style.cssText = 'border: 2px solid red';
					form[3].style.cssText = 'border: 2px solid red';
	
					setTimeout(() => {
						form[0].style.cssText = '';
						form[3].style.cssText = '';
						messageDiv.remove();
					}, 5000);
				} else if (form[1].value.length < 11) {
					messageDiv.innerHTML = 'Короткий номер! Минимум 11 символов';
					form[1].style.cssText = 'border: 2px solid red';
	
					setTimeout(() => {
						form[1].style.cssText = '';
						messageDiv.remove();
					}, 5000);
				} else {
					messageDiv.innerHTML = 'В телефоне допустимы только цифры';
					form[1].style.cssText = 'border: 2px solid red';
	
					setTimeout(() => {
						form[1].style.cssText = '';
						messageDiv.remove();
					}, 5000);
				}
			} else if (form.length < 4) {
				if (!isNaN(form[1].value) && form[1].value.length === 11 && 
						isCyrillic(form[0].value)) {
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
						messageDiv.remove();
					}, 5000));
				} else if (!isCyrillic(form[0].value) && !isCyrillic(form[3].value)) {
					messageDiv.innerHTML = 'Допустим только русский язык';
					form[0].style.cssText = 'border: 2px solid red';
					form[3].style.cssText = 'border: 2px solid red';
	
					setTimeout(() => {
						form[0].style.cssText = '';
						form[3].style.cssText = '';
						messageDiv.remove();
					}, 5000);
				} else if (form[1].value.length < 11) {
					messageDiv.innerHTML = 'Короткий номер! Минимум 11 символов';
					form[1].style.cssText = 'border: 2px solid red';
	
					setTimeout(() => {
						form[1].style.cssText = '';
						messageDiv.remove();
					}, 5000);
				} else {
					messageDiv.innerHTML = 'В телефоне допустимы только цифры';
					form[1].style.cssText = 'border: 2px solid red';
	
					setTimeout(() => {
						form[1].style.cssText = '';
						messageDiv.remove();
					}, 5000);
				}
			}
		});
	};

	document.querySelectorAll('.form').forEach(form => postForm(form));
}

export default forms;

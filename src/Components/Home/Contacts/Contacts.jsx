import './Contacts.css';
import {useState} from 'react';

const Contacts = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState({});
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		setErrors({});
		
		let formErrors = {};
		if (!name) {
			formErrors.name = 'Имя обязательно для заполнения.';
		}
		if (!email) {
			formErrors.email = 'Email обязателен для заполнения.';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			formErrors.email = 'Введите корректный email.';
		}
		if (!message) {
			formErrors.message = 'Сообщение обязательно для заполнения.';
		}
		
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}
		
		alert('Спасибо за обратную связь!');
		
	};
	
	return (
		<div id='contacts'>
			<div className="container">
				<div className="refs__text">
					<h2 className="title-2">Обратная связь:</h2>
					<p>Оставьте свой вопрос в данном поле и мы обязательно с вами свяжемся!</p>
				</div>
				
				<div className="block-contact">
					<form onSubmit={handleSubmit}>
						<label htmlFor="name">Имя</label>
						<input
							type="text"
							name="name"
							placeholder="Михаил"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className={errors.name ? 'error' : 'white' }
						/>
						
						<label htmlFor="email">Почта</label>
						<input
							type="text"
							name="email"
							placeholder="example@gmail.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className={errors.email ? 'error' : 'white' }
						/>
						
						<label htmlFor="message">Сообщение</label>
						<textarea
							name="message"
							placeholder='Сообщение:'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className={errors.message ? 'error' : 'white' }
						></textarea>
						
						<button type='submit'>Отправить сообщение</button>
					</form>
					
					<img src="/AgroCulture_IMG/man_with_hoe.png" style={{transform: 'scaleX(-1)'}} alt="contact"/>
				</div>
			</div>
		</div>
	);
};

export default Contacts;

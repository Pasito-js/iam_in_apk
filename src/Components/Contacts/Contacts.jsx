import './Contacts.css';

const Contacts = () => {
	
	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Спасибо за обратную связь!')
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
						<input type="text" name="name" placeholder="Михаил"/>
						
						<label htmlFor="email">Почта</label>
						<input type="text" name="email" placeholder="example@gmail.com"/>
						
						<label htmlFor="message">Сообщение</label>
						<textarea name="message" placeholder='Сообщение:'></textarea>
						
						<button type='submit'>Отправить сообщение</button>
					
					</form>
					
					<img src="/AgroCulture_IMG/man_with_hoe.png" style={{transform: 'scaleX(-1)'}} alt="contact"/>
				</div>
			
			</div>
		</div>
	);
};

export default Contacts;
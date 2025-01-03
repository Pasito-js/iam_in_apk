import './AboutUs.css';
import SeoSpecialistCard from '../Card/SeoSpecialistCard .jsx';

const AboutUs = () => {
	return (
		<div className="aboutUs">
			<div className="container">
				<h2 className="title-2">Авторы сайта:</h2>
				<ul className="list-cards">
					<li>
						<SeoSpecialistCard
						name="Константин Чичинюк"
						job='Ученик, создатель сайта'
						avatar='/logo.png'
						experience="Создание сайтов, автор проекта..."
						skills={['React', 'Router']}
					/>
					</li>
					
					<li>
						<SeoSpecialistCard
							name="Юлия Коваленко"
							job='Учитель, куратор'
							avatar='/logo.png'
							experience="Заслуженный педагог, правильное построение проекта"
							skills={['ИПД', 'Наставник']}
						/>
					</li>
					
					<li>
						<SeoSpecialistCard
							name="Ольга Венедиктова"
							job='Учитель информатики'
							avatar='/logo.png'
							experience="Классный руководитель, помощь в создании сайта"
							skills={['Информатика', 'Обратный feedback']}
						/>
					</li>
				
				</ul>
			
			</div>
		
		</div>
	);
};

export default AboutUs;
import './AboutUs.css';
import SeoSpecialistCard from '../Card/SeoSpecialistCard .jsx';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutUs = () => {
	
	useEffect(() => {
		AOS.init({
			duration: 2500,
		})
	}, []);
	
	return (
		<div className="aboutUs" id='about-us'>
			<div className="container">
				<h2 className="title-2">Авторы сайта:</h2>
				<ul className="list-cards">
					<li data-aos="flip-left">
						<SeoSpecialistCard
						name="Константин Чичинюк"
						job='Ученик, создание сайтов'
						avatar='/logo_2.png'
						experience="Разработка сайтов, автор проекта..."
						skills={['JavaScript', 'React', 'Router', ]}
					/>
					</li>
					
					<li data-aos="flip-up">
						<SeoSpecialistCard
							name="Юлия Коваленко"
							job='Учитель, куратор'
							avatar='/logo_2.png'
							experience="Заслуженный педагог, правильное построение проекта"
							skills={['ИПД', 'Наставник']}
						/>
					</li>
					
					<li data-aos="flip-right">
						<SeoSpecialistCard
							name="Ольга Венедиктова"
							job='Учитель информатики'
							avatar='/logo_2.png'
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
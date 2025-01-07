import './Goals.css';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Goals = () => {
	
	useEffect(() => {
		AOS.init({
			duration: 1000,
		})
	}, []);
	
	return (
		<div id='goals' data-aos="fade-zoom-in"
		     data-aos-easing="ease-in-back"
		     data-aos-offset="0">
			<div className="container">
				<div className="goal">
					<div className="main__text">
						<h2>Какая цель у этого проекта?</h2>
						<p>Дать ученикам и взрослым новые знания связанные с АПК в России, а
							также пройти викторину и профориентацию!</p>
						<a href="#">Викторина</a>
					</div>
					
					<img src="/AgroCulture_IMG/cow.png" height={500} alt="goal"/>
				</div>
			</div>
		</div>
	);
};

export default Goals;
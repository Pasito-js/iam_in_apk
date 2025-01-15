import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import {Link} from 'react-router';

const Hero = () => {
	
	useEffect(() => {
		AOS.init({
			duration: 1500,
		})
	}, [])
	
	return (
		<div className="hero" data-aos="zoom-in">
			<div className="container">
				<div className="main">
					<ul className="main__text">
						<h2>Проект: Я в АПК</h2>
						<p>Добро пожаловать на сайт - Я а АПК. Здесь вы можете узнать новую информацию связанную с АПК в России, пройти викторину и профиориентацию!</p>
						<Link to='/prof'>Пройти профориентацию</Link>
					</ul>
					
					<img src="/AgroCulture_IMG/combine.png" alt=""/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
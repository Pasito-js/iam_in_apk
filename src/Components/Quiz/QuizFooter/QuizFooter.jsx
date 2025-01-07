import './QuizFooter.css';
import {FaTelegram, FaVk} from 'react-icons/fa6';
import {Link} from 'react-scroll';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const QuizFooter = () => {
	
	useEffect(() => {
		AOS.init({
			duration: 1500,
		})
	}, [])
	
	return (
		<footer data-aos="fade-up">
			<div className="container">
				
				<nav className="footer-header">
					<ul className="logotype">
						<img src="/logo.png" width={80} height={80} alt="Logotype"/>
						<Link className='refs__link-title' to="quiz" smooth={true} offset={-150} style={{cursor: 'pointer'}}
						      duration={1000}>Я в АПК</Link>
					</ul>
					
					<ul className="footer-refs">
						
						<li><a className="ref__link-social" href="#"><FaTelegram
							className="social"/></a></li>
						<li><a className="ref__link-social" href="#"><FaVk
							className="social"/></a></li>
					</ul>
				</nav>
				
				<div className="contacts">
					<h3 className="contacts__title">Наши контакты:</h3>
					<p>Почта: k.chichinyuk@mail.ru</p>
					<p className="address">Адрес: Ленинградская обл, Гатчинский р-он, д
						Большие-Колпаны, ул
						Садовая, дом 4</p>
				</div>
				
				<div className="privacy">
					<p> {new Date().getFullYear()}. Проект создан в образовательных
						проектах </p>
				</div>
			
			</div>
		</footer>
	);
};

export default QuizFooter;
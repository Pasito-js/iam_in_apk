import './Footer.css';
import {FaTelegram, FaVk} from 'react-icons/fa6';
import {Link} from 'react-scroll';
import 'aos/dist/aos.css';

const Footer = () => {
	
	return (
		<footer>
			<div className="container">
				
				<nav className="footer-header">
					<ul className="logotype">
						<img src="/logo_2.png" width={80} height={80} alt="Logotype"/>
						<Link className='refs__link-title' to="home" smooth={true} offset={-150} style={{cursor: 'pointer'}}
						      duration={1000}>Я в АПК</Link>
					</ul>
					
					<ul className="footer-refs">
						<li><Link className="ref__link" to="refs" smooth={true}
						          duration={1000} offset={-150}>Ссылки</Link></li>
						<li><Link className="ref__link" to="goals" smooth={true}
						          duration={1000} offset={-150}>Цель</Link></li>
						<li><Link className="ref__link" to="about-us" smooth={true}
						          duration={1000} offset={-150}>Авторы</Link></li>
						<li><Link className="ref__link" to="information" smooth={true}
						          duration={1000} offset={-150}>Информация</Link></li>
						<li><Link className="ref__link" to="contacts" smooth={true}
						          duration={1000} offset={-150}>Обратная связь</Link></li>
						
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

export default Footer;
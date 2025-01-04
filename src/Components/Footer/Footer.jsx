import './Footer.css';
import {FaTelegram, FaVk} from 'react-icons/fa6';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				
				<nav className="footer-header">
					<ul className="logotype">
						<img src="/logo.png" width={80} height={80} alt="Logotype"/>
						<a href="#">Я в АПК</a>
					</ul>
					
					<ul className="footer-refs">
						<li><a className="ref__link" href="#">Ссылки</a></li>
						<li><a className="ref__link" href="#">Цель</a></li>
						<li><a className="ref__link" href="#">Авторы</a></li>
						<li><a className="ref__link" href="#">Информация</a></li>
						<li><a className="ref__link" href="#">Обратная связь</a></li>
						
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
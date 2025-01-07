import './Header.css';
import {Link as LinkScroll} from 'react-scroll';
import {Link} from 'react-router';

const Header = () => {
	return (
		<header>
			
			<nav className='header-nav'>
				<ul className="logotype">
					<img src="/logo.png" width={80} height={80} alt="Logotype"/>
					<Link className="refs__link-title" to="home" smooth={true} offset={-150} style={{cursor: 'pointer'}}
					      duration={1000}>Я в АПК</Link>
				</ul>
				
				<ul className="refs">
					<li><LinkScroll className="refs__link" to="refs" smooth={true}
					          duration={1000} offset={-150}>Ссылки</LinkScroll></li>
					<li><LinkScroll className="refs__link" to="goals" smooth={true}
					          duration={1000} offset={-150}>Цель</LinkScroll></li>
					<li><LinkScroll className="refs__link" to="about-us" smooth={true}
					          duration={1000} offset={-150}>Авторы</LinkScroll></li>
					<li><LinkScroll className="refs__link" to="information" smooth={true}
					          duration={1000} offset={-150}>Информация</LinkScroll></li>
					<li><LinkScroll className="refs__link" to="contacts" smooth={true}
					          duration={1000} offset={-150}>Обратная связь</LinkScroll></li>
					<Link to='/quiz' className="button" href="#">Викторина</Link>
				</ul>
			
			
			</nav>
		
		</header>
	);
};

export default Header;
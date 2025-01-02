import './Header.css';

const Header = () => {
	return (
		<header>
				
				<nav>
					<ul className='logotype'>
						<img src="/logo.png" width={80} height={80} alt="Logotype"/>
						<a href="#">Я в АПК</a>
					</ul>
					
					<ul className="refs">
						<li><a className="refs__link" href="#">Ссылки</a></li>
						<li><a className="refs__link" href="#">Цель</a></li>
						<li><a className="refs__link" href="#">Авторы</a></li>
						<li><a className="refs__link" href="#">Информация</a></li>
						<li><a className="refs__link" href="#">Обратная связь</a></li>
						<a className="button" href="#">Викторина</a>
					</ul>
				
				
				</nav>
		
		</header>
	);
};

export default Header;
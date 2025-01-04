import './Hero.css';

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="main">
					<ul className="main__text">
						<h2>Проект: Я в АПК</h2>
						<p>Добро пожаловать на сайт - Я а АПК. Здесь вы можете узнать новую информацию связанную с АПК в России, пройти викторину и профиориентацию!</p>
						<a href="#">Пройти профориентацию</a>
					</ul>
					
					<img src="/AgroCulture_IMG/combine.png" alt=""/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
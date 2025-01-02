import './Hero.css';

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="main">
					<ul className="main__text">
						<h2>Проект: Я в АПК</h2>
						<p>Our digital marketing agency helps businesses grow and succeed
							online through a range of services including SEO, PPC, social
							media marketing, and content creation.</p>
						<a href="#">Пройти профориентацию</a>
					</ul>
					
					<img src="/hero.png" alt=""/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
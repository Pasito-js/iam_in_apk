import './QuizHero.css';
import {Link} from 'react-router';

const QuizHero = () => {
	
	return (
		<main>
			<div className="container">
				
				<div className="quiz-title">
					<h2 className="title-2">Викторина:</h2>
					<p className="quiz__desc">Пройдите викторину и узнайте свои знание в
						области АПК! Интересно, кто будет самым умным?</p>
				</div>
				
				<div className="quiz-hero">
					<img src="/quiz_prev.png" alt="example-quiz"/>
					<ul className="quiz-button__list">
						<li>
							<h3 className='quiz__title-3'>Выберете сложность:</h3>
						</li>
						<li>
							<Link to='/quiz/easy' className="quiz-btn" style={{
								backgroundColor: '#5ddc64'
							}}>Легкий</Link>
						</li>
						<li>
							<Link to='/quiz/med' className="quiz-btn" style={{
								background: '#7e7edd'
							}}>Средний</Link>
						</li>
						<li>
							<Link to='/quiz/hard' className="quiz-btn" style={{
								background: '#f63434'
							}}>Сложный</Link>
						</li>
					</ul>
				
				</div>
			
			</div>
		</main>
	);
};

export default QuizHero;
import {Link, useNavigate} from 'react-router';

const QuizHeader = () => {
	const navgiate = useNavigate();
	
	const goBack = () => navgiate(-1);
	
	
	return (
		<header>
			
			<nav className="quiz-nav">
				
				<ul className="quiz__list">
					<li>
						<a onClick={goBack} className="quiz__link">Вернуться</a>
					</li>
					<li>
						<Link className="quiz__link" to="/quiz">Викторина</Link>
					</li>
				</ul>
			
			</nav>
		
		</header>
	);
};

export default QuizHeader;
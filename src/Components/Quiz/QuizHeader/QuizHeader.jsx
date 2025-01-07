import './QuizHeader.css';
import {useNavigate} from 'react-router';

const QuizHeader = ({show}) => {
	const navgiate = useNavigate();
	
	const goBack = () => navgiate(-1)
	
	
	return (
		<header>
				
				<nav className="quiz-nav">
					
					<ul className="quiz__list">
						<li>
							<a onClick={goBack} className='quiz__link'>Вернуться</a>
						</li>
						{show && <li>
							<a className='quiz__link' href="/quiz">Начать</a>
						</li>}
						<li>
							<a className='quiz__link' href="/prof">Профориентация</a>
						</li>
					</ul>
				
				</nav>
		
		</header>
	);
};

export default QuizHeader;
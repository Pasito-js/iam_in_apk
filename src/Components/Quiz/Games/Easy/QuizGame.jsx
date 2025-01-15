import './QuizGame.css';
import QuizHeader from '../../QuizHeader/QuizHeader.jsx';
import QuizFooter from '../../QuizFooter/QuizFooter.jsx';
import Quiz from '../Quiz.jsx';


const QuizGame = ({questions}) => {
	
	return (
		<div>
			<QuizHeader/>
			<Quiz questions={questions}/>
			<QuizFooter />
		</div>
	);
};

export default QuizGame;
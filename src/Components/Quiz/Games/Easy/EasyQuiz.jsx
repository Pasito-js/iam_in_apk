import './EasyQuiz.css';
import QuizHeader from '../../QuizHeader/QuizHeader.jsx';
import QuizFooter from '../../QuizFooter/QuizFooter.jsx';
import Quiz from '../Quiz.jsx';


const EasyQuiz = () => {
	
	return (
		<div>
			<QuizHeader/>
			<Quiz/>
			<QuizFooter />
		</div>
	);
};

export default EasyQuiz;
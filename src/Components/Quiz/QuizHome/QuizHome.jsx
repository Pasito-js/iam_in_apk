import './QuizHome.css';
import QuizHeader from '../QuizHeader/QuizHeader.jsx';
import QuizHero from '../QuizHero/QuizHero.jsx';
import QuizFooter from '../QuizFooter/QuizFooter.jsx';

const QuizHome = () => {
	return (
		<div id='quiz'>
			<QuizHeader show={true} />
			<QuizHero />
			<QuizFooter />
		</div>
	);
};

export default QuizHome;
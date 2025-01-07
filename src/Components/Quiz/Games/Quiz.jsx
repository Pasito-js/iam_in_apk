import './Quiz.css';
import {useState} from 'react';

const questions = [
	{
		question: '5 > 2',
		img: '/black_arrow.png',
		correct: 1
	},
	{
		question: '3 + 3 = 9',
		img: '/black_arrow.png',
		correct: 0
	},
	{
		question: '8 - 2 = 7',
		img: '/black_arrow.png',
		correct: 0
	},
	{
		question: '7 < 8',
		img: '/black_arrow.png',
		correct: 1
	}
];


const Quiz = () => {
	const [score, setScore] = useState(0);
	const [questIndex, setQuestIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [showResults, setShowResults] = useState(false);
	let questionText = '';
	let questionImg;
	
	showQuestion();
	
	function showQuestion() {
		if (questIndex < questions.length) {
			questionText = questions[questIndex].question;
			questionImg = questions[questIndex].img;
		}
	}
	
	const handleAnswerChange = (event) => {
		setSelectedAnswer(parseInt(event.target.value, 10));
	};
	
	const handleSubmit = () => {
		if (selectedAnswer !== null) {
			if (selectedAnswer === questions[questIndex].correct) {
				setScore(score + 1);
			}
			
			setQuestIndex(questIndex + 1);
			setSelectedAnswer(null); // Сбросить вариант ответа
			
			if (questIndex + 1 < questions.length) {
				showQuestion();
			} else {
				// Квиз закончен, показать результаты
				questionText = `Поздравляем с завершением викторины!!! у вас ${score}`;
				setShowResults(true);
				//TODO: поменять картинку на поздравления или что то рода
			}
		} else {
			alert('Пожалуйста выберите вариант ответа.');
		}
	};
	
	return (
		<section style={{marginTop: '30px'}}>
			<div className="container">
				<img src={questionImg} alt="question-img"/>
				<div className="quiz">
					<div className="quiz_text">
						<h2 className="title_2">{questionText}</h2>
						
						{!showResults && <ul className="quiz-list" id="list">
							<li>
								<label>
									<input
										type="radio"
										className="answer"
										name="answer"
										value="1"
										onChange={handleAnswerChange}
										checked={selectedAnswer === 1}
									/>
									<span>Правда</span>
								</label>
							</li>
							<li>
								<label>
									<input
										type="radio"
										className="answer"
										name="answer"
										value="0"
										onChange={handleAnswerChange}
										checked={selectedAnswer === 0}
									/>
									<span>Ложь</span>
								</label>
							</li>
						</ul>}
						
						{!showResults && <button className="quiz-submit submit" id="submit"
						                         onClick={handleSubmit}>
							Ответить
						</button>}
						
						{showResults && <p>Text --> {questionText}</p>}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Quiz;
import './Quiz.css';
import {useState} from 'react';

const Quiz = ({questions}) => {
	const [score, setScore] = useState(0);
	const [questIndex, setQuestIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [showResults, setShowResults] = useState(false);
	const [finalQuestionText, setFinalQuestionText] = useState(''); // Новое состояние для текста вопроса
	
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
			
			if (questIndex + 1 < questions.length) {
				setQuestIndex(questIndex + 1);
				setSelectedAnswer(null); // Сбросить вариант ответа
				showQuestion();
			} else {
				// Квиз закончен, показать результаты
				if (score < 3) {
					setFinalQuestionText(`Увы, но у вас всего ${score} ${score > 1 ? 'балла' : 'балл'} из ${questions.length}. Повезет в другой раз!`)
				}
				
				else if (score < 8) {
					setFinalQuestionText(`Поздравляем, вы набралли ${score} балла из ${questions.length}. Но есть над чем работать!`)
				}
				
				else if (score > 8 ) {
					setFinalQuestionText(`Молодец, у вас аж ${score} балла из ${questions.length}! Да вы умный!`);
				}
				
				setShowResults(true);
			}
		} else {
			alert('Пожалуйста, выберите вариант ответа.');
		}
	};
	
	return (
		<section className="quiz" style={{marginTop: '30px'}}>
			<div className="container">
				<img src={questionImg} className='question__img' alt="question-img"/>
				<div>
					<div className="quiz_text">
						<h2 className="title_2">{showResults ? 'Конец!' : questionText}</h2>
						
						{!showResults && (
							<ul className="quiz-list" id="list">
								<li className="input__answer">
									<label>
										<input
											type="radio"
											className="input__radio"
											name="answer"
											value="1"
											onChange={handleAnswerChange}
											checked={selectedAnswer === 1}
										/>
										<span>Правда</span>
									</label>
								</li>
								<li className="input__answer">
									<label>
										<input
											type="radio"
											className="input__radio"
											name="answer"
											value="0"
											onChange={handleAnswerChange}
											checked={selectedAnswer === 0}
										/>
										<span>Ложь</span>
									</label>
								</li>
							</ul>
						)}
						
						{showResults && <p className="final__text">{finalQuestionText}</p>}
					</div>
					{!showResults && (
						<button className="quiz-submit" id="submit" onClick={handleSubmit}>
							Ответить
						</button>
					)}
				</div>
			</div>
		</section>
	);
};

export default Quiz;

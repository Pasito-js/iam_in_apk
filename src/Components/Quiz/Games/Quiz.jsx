import './Quiz.css';
import {useState} from 'react';

const questions = [
	{
		question: 'Россия является одним из крупнейших производителей пшеницы в мире.',
		img: '/black_arrow.png',
		correct: 1
	},
	{
		question: 'В России нет программы по поддержке сельского хозяйства.',
		img: '/black_arrow.png',
		correct: 0
	},
	{
		question: 'Сельское хозяйство в России занимает более 20% от общего ВВП.',
		img: '/black_arrow.png',
		correct: 0
	},
	{
		question: 'Крупнейшими регионами по производству картофеля в России являются Центральный и Северо-Западный федеральные округа.',
		img: '/black_arrow.png',
		correct: 1
	},
	{
		question: 'В России активно развиваются органические фермерства.',
		img: '/black_arrow.png',
		correct: 1
	},
	{
		question: 'Молочная продукция составляет основную часть экспорта России.',
		img: '/black_arrow.png',
		correct: 0
	},
	{
		question: 'В России производится более 30 миллионов тонн мяса в год.',
		img: '/black_arrow.png',
		correct: 1
	},
	{
		question: 'Традиционными культурами для России являются рис и кофе.',
		img: '/black_arrow.png',
		correct: 0
	},
	{
		question: 'Государственная программа развития сельского хозяйства была принята на 2013-2020 годы.',
		img: '/black_arrow.png',
		correct: 1
	},
	{
		question: 'Россия полностью обеспечивает себя продовольствием и не нуждается в импорте.',
		img: '/black_arrow.png',
		correct: 0
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
		<section className="quiz" style={{marginTop: '30px'}}>
			<div className="container">
				<img src={questionImg} alt="question-img"/>
				<div>
					<div className="quiz_text">
						<h2 className="title_2">{questionText}</h2>
						
						{!showResults && <ul className="quiz-list" id="list">
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
						</ul>}
						
						
						{showResults && <p>Text: {questionText}</p>}
					</div>
					{!showResults && <button className="quiz-submit" id="submit"
					                         onClick={handleSubmit}>
						Ответить
					</button>}
				</div>
			</div>
		</section>
	);
};

export default Quiz;
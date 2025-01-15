import './ProfTest.css';
import {useState} from 'react';
import ProfHeader from '../ProfHeader/ProfHeader.jsx';

const questions = [
	{
		question: 'Какой вид деятельности вам больше всего нравится?',
		options: ['Работа на земле', 'Работа с животными', 'Анализ данных', 'Работа с людьми']
	},
	{
		question: 'Как вы предпочитаете работать?',
		options: ['В команде', 'Самостоятельно']
	},
	{
		question: 'Как вы относитесь к физической работе?',
		options: ['Люблю физическую активность', 'Предпочитаю умственную работу']
	},
	{
		question: 'Какой темп работы вам нравится?',
		options: ['Спокойный и размеренный', 'Динамичный и активный']
	},
	{
		question: 'Как вы относитесь к работе в условиях природы?',
		options: ['С удовольствием', 'Предпочитаю работать в помещении']
	},
	{
		question: 'Как вы относитесь к обучению новым технологиям в сельском хозяйстве?',
		options: ['С удовольствием учусь', 'Не люблю учиться']
	},
	{
		question: 'Как вы относитесь к работе с клиентами и партнерами?',
		options: ['Это моя страсть', 'Предпочитаю работать без взаимодействия']
	},
	{
		question: 'Как вы относитесь к экологическим вопросам?',
		options: ['Это очень важно для меня', 'Не так важно']
	},
	{
		question: 'Как вы видите свою карьеру через 5 лет?',
		options: ['На руководящей позиции', 'В специализированной роли', 'Занимаясь собственным бизнесом', 'Не знаю']
	},
	{
		question: 'Как вы относитесь к многозадачности?',
		options: ['Предпочитаю сосредоточиться на одной задаче', 'Могу справляться с несколькими задачами одновременно']
	},
	{
		question: 'Как вы относитесь к работе в условиях стресса?',
		options: ['Не переношу стресс', 'Могу работать в стрессовых условиях']
	},
	{
		question: 'Какой уровень ответственности вам комфортен?',
		options: ['Низкий', 'Средний', 'Высокий']
	},
	{
		question: 'Как вы относитесь к рутине?',
		options: ['Нормально, если работа интересная', 'Не люблю рутинную работу']
	},
	{
		question: 'Как вы относитесь к работе на открытом воздухе?',
		options: ['Мне это нравится', 'Предпочитаю работать в помещении']
	},
	{
		question: 'Как вы относитесь к работе с современными агротехнологиями?',
		options: ['С большим интересом', 'С трудом']
	},
	{
		question: 'Как вы относитесь к работе с животноводством?',
		options: ['Это моя страсть', 'Не интересует']
	},
	{
		question: 'Как вы относитесь к исследовательской деятельности в сельском хозяйстве?',
		options: ['Мне это интересно', 'Не интересует']
	},
	{
		question: 'Как вы относитесь к частым командировкам на фермы или в поля?',
		options: ['Готов к командировкам', 'Предпочитаю оставаться на месте']
	}
];


const ProfTest = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [answers, setAnswers] = useState(Array(questions.length).fill(null));
	const [showResults, setShowResults] = useState(false);
	const [finalResultText, setFinalResultText] = useState('');
	const [img, setImg] = useState('');
	const [desc, setDesc] = useState();
	
	const handleOptionChange = (option) => {
		const newAnswers = [...answers];
		newAnswers[currentIndex] = option;
		setAnswers(newAnswers);
	};
	
	const handleSubmit = () => {
		if (answers[currentIndex] === null) {
			alert('Пожалуйста, выберите ответ перед тем, как продолжить.');
			return;
		}
		
		if (currentIndex + 1 < questions.length) {
			setCurrentIndex(currentIndex + 1);
		} else {
			setShowResults(true);
			analyzeResults();
		}
	};
	
	
	const analyzeResults = () => {
		
		let profession = '';
		
		
		if (answers[0] === 'Работа на земле' && answers[1] === 'В команде') {
			profession = 'Агроном';
			setImg('/ProfTestproffesionImgs/агроном.png');
			setDesc('Специалист, занимающийся изучением и применением методов повышения урожайности и качества сельскохозяйственных культур.');
		} else if (answers[0] === 'Работа с животными' && answers[1] === 'В команде') {
			profession = 'Животновод';
			setImg('/ProfTestproffesionImgs/животновод.png');
			setDesc('Профессионал, занимающийся разведением и уходом за сельскохозяйственными животными, обеспечивая их здоровье и продуктивность.');
		} else if (answers[0] === 'Анализ данных' && answers[1] === 'Самостоятельно') {
			profession = 'Аналитик сельского хозяйства';
			setImg('/ProfTestproffesionImgs/аналитикСХ.png');
			setDesc('Специалист, анализирующий данные о производстве, рынке и потреблении сельскохозяйственной продукции для оптимизации процессов.');
		} else if (answers[0] === 'Работа с людьми' && answers[1] === 'В команде') {
			profession = 'Менеджер по продажам сельскохозяйственной продукции';
			setImg('/ProfTestproffesionImgs/менеджерПродажи.png');
			setDesc('Ответственный за продажу продукции и взаимодействие с клиентами и партнерами.');
		} else if (answers[4] === 'С удовольствием' && answers[5] === 'С большим интересом') {
			profession = 'Специалист по агрономическим технологиям';
			setImg('/ProfTestproffesionImgs/спецАгроТехн.png');
			setDesc('Эксперт в области современных технологий, применяемых в сельском хозяйстве для повышения эффективности.');
		} else if (answers[6] === 'Это моя страсть' && answers[7] === 'Это очень важно для меня') {
			profession = 'Эколог в агропромышленности';
			setImg('/ProfTestproffesionImgs/эколог.png');
			setDesc('Специалист, занимающийся вопросами охраны окружающей среды и устойчивого развития в агропромышленном комплексе.');
		} else if (answers[8] === 'На руководящей позиции' && answers[9] === 'Предпочитаю сосредоточиться на одной задаче') {
			profession = 'Руководитель фермерского хозяйства';
			setImg('/ProfTestproffesionImgs/руководительСХ.png');
			setDesc('Управляет процессами на ферме, отвечает за стратегическое планирование и организацию работы.');
		} else if (answers[10] === 'Могу работать в стрессовых условиях' && answers[11] === 'Мне это нравится') {
			profession = 'Специалист по управлению проектами в АПК';
			setImg('/ProfTestproffesionImgs/директорСХ.png');
			setDesc('Координирует проекты, связанные с развитием и внедрением новых технологий в агропромышленном комплексе.');
		} else {
			profession = 'Животновод';
			setImg('/ProfTestproffesionImgs/животновод.png');
			setDesc('Профессионал, занимающийся разведением и уходом за сельскохозяйственными животными, обеспечивая их здоровье и продуктивность.');
		}
		
		setFinalResultText(`Ваша подходящая профессия: ${profession}.`);
	};
	
	return (
		<>
			<ProfHeader/>
			<section className="profTest" style={{marginTop: '30px'}}>
				<div className="container">
					
					{showResults ? (
						<div className="results__prof">
							<h2 className="title__prof">Результаты теста:</h2>
							<img src={img} width={500} height={350} style={{borderRadius: '10px'}} alt="profession"/>
						</div>
					) : (
						<h2 className="title__prof">{questions[currentIndex].question}</h2>
					)}
					
					{!showResults && (
						<ul className="profTest-list">
							{questions[currentIndex].options.map((option, index) => (
								<li key={index}>
									<label className="input__answer">
										<input
											type="radio"
											name={`question-${currentIndex}`}
											value={option}
											onChange={() => handleOptionChange(option)}
											checked={answers[currentIndex] === option}
										/>
										<span>{option}</span>
									</label>
								</li>
							))}
						</ul>
					)}
					
					{showResults &&
						<p className="final__text">{finalResultText} <br/> <br/> {desc}</p>}
					
					{!showResults && (
						<button className="profTest-submit" onClick={handleSubmit}>
							{currentIndex + 1 < questions.length ? 'Далее' : 'Завершить'}
						</button>
					)}
				</div>
			</section>
		</>
	);
};

export default ProfTest;

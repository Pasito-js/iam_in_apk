import './App.css';
import {Link, Route, Routes} from 'react-router';
import Home from './Site/Home.jsx';
import Quiz from './Site/Quiz.jsx';
import QuizGame from './Components/Quiz/Games/Easy/QuizGame.jsx';
import ProfOrientation from './Site/ProfOrientation.jsx';
import ProfTest from './Components/Proforientation/ProfTest/ProfTest.jsx';

const questionsEasy = [
	{
		question: 'Россия является одним из крупнейших производителей пшеницы в мире.',
		img: '/QuizImgs/пшеница.jpg',
		correct: 1
	},
	{
		question: 'В России нет программы по поддержке сельского хозяйства.',
		img: '/QuizImgs/help.png',
		correct: 0
	},
	{
		question: 'Кубань — это регион, известный своим производством риса.',
		img: '/QuizImgs/рис.png',
		correct: 0
	},
	{
		question: 'Свиньи — это наиболее распространенное мясное животное в России.',
		img: '/QuizImgs/pig.png',
		correct: 1
	},
	{
		question: 'Россия экспортирует больше всего молока.',
		img: '/QuizImgs/milk.jpg',
		correct: 0
	},
	{
		question: 'Тверская область известна высоким производством картофеля.',
		img: '/QuizImgs/potate.jpg',
		correct: 1
	},
	{
		question: 'Основная культура в России — это кукуруза.',
		img: '/QuizImgs/кукуруза.jpg',
		correct: 0
	},
	{
		question: 'Министерство сельского хозяйства отвечает за агропромышленный комплекс в России.',
		img: '/QuizImgs/ministr.jpg',
		correct: 1
	},
	{
		question: 'Горох — это злаковая культура.',
		img: '/QuizImgs/горох.jpg',
		correct: 0
	},
	{
		question: 'Сельское хозяйство в России делится на промышленное и семейное.',
		img: '/QuizImgs/апк.jpg',
		correct: 1
	}
];
const questionsMed = [
	{
		question: 'Основная культура в России — это кукуруза.',
		img: '/QuizImgs/кукуруза.jpg',
		correct: 0
	},
	{
		question: 'Россия занимает первое место в мире по экспорту пшеницы.',
		img: '/QuizImgs/пшеница.jpg',
		correct: 1
	},
	{
		question: 'В России основным производителем молока является Татарстан.',
		img: '/QuizImgs/milk.jpg',
		correct: 1
	},
	{
		question: 'Сельское хозяйство в России полностью независимо от климатических условий.',
		img: '/QuizImgs/климат.jpg',
		correct: 0
	},
	{
		question: 'Согласно статистике, около 10% сельскохозяйственной продукции в России производится в личных подсобных хозяйствах.',
		img: '/QuizImgs/farm.jpg',
		correct: 0
	},
	{
		question: 'Основной экспортный продукт АПК России — это мясо.',
		img: '/QuizImgs/meat.jpg',
		correct: 0
	},
	{
		question: 'Кубань является регионом с высоким уровнем производства овощей и фруктов.',
		img: '/QuizImgs/vegetables.jpg',
		correct: 1
	},
	{
		question: 'В России есть программа по поддержке фермерских хозяйств.',
		img: '/QuizImgs/help_2.jpg',
		correct: 1
	},
	{
		question: 'Сельское хозяйство в России делится на два основных сектора: растениеводство и животноводство.',
		img: '/QuizImgs/cow.jpg',
		correct: 1
	},
	{
		question: 'В России выращивают только одну культуру — пшеницу.',
		img: '/QuizImgs/пшеница.jpg',
		correct: 0
	},
	{
		question: 'Согласно статистике, Россия является одним из крупнейших производителей картофеля в мире.',
		img: '/QuizImgs/potate.jpg',
		correct: 1
	},
	{
		question: 'Сельское хозяйство в России не влияет на экономику страны.',
		img: '/QuizImgs/econom.jpg',
		correct: 0
	}
];
const questionsHard = [
	{
		question: 'В России более 40% сельскохозяйственных угодий занимают пастбища.',
		img: '/QuizImgs/пастбища.jpg',
		correct: 1
	},
	{
		question: 'Основными регионами по производству мяса являются Сибирь и Дальний Восток.',
		img: '/QuizImgs/meat.jpg',
		correct: 0
	},
	{
		question: 'В 2022 году Россия экспортировала более 30 миллионов тонн пшеницы.',
		img: '/QuizImgs/пшеница.jpg',
		correct: 1
	},
	{
		question: 'Согласно статистике, около 10% сельскохозяйственной продукции в России производится в личных подсобных хозяйствах.',
		img: '/QuizImgs/farm.jpg',
		correct: 0
	},
	{
		question: 'Наиболее распространенной культурой в России является кукуруза.',
		img: '/QuizImgs/кукуруза.jpg',
		correct: 0
	},
	{
		question: 'В России существуют программы государственной поддержки аграриев, включая субсидии на покупку техники.',
		img: '/QuizImgs/help_2.jpg',
		correct: 1
	},
	{
		question: 'В России наблюдается рост производства органической продукции.',
		img: '/QuizImgs/org.jpg',
		correct: 1
	},
	{
		question: 'Сельское население России составляет менее 20% от общего числа населения.',
		img: '/QuizImgs/farm_2.jpg',
		correct: 1
	},
	{
		question: 'Россия является крупнейшим производителем рыбы в мире.',
		img: '/QuizImgs/fish.jpg',
		correct: 0
	},
	{
		question: 'В России наибольшее количество теплиц расположено в Краснодарском крае.',
		img: '/QuizImgs/теплица.jpg',
		correct: 1
	},
	{
		question: 'Сельское хозяйство России не играет значительной роли в ВВП страны.',
		img: '/QuizImgs/econom.jpg',
		correct: 0
	},
	{
		question: 'В России активно развиваются технологии точного земледелия.',
		img: '/QuizImgs/tech.jpg',
		correct: 1
	}
];



function App() {
	
	return (
			<>
				<Routes>
					<Route path="/" element={<Home/>}/>
					
					<Route path="/quiz" element={<Quiz/>}/>
					
					<Route path='/quiz/easy' element={<QuizGame questions={questionsEasy} />} />
					<Route path='/quiz/med' element={<QuizGame questions={questionsMed} />} />
					<Route path='/quiz/hard' element={<QuizGame questions={questionsHard} />} />
					
					<Route path='/prof' element={<ProfOrientation />} />
					<Route path='/prof/test' element={<ProfTest />} />
					
					<Route path="/*" element={(
						<h1 style={{textAlign: 'center'}}>Страница не найдена <Link style={{color: '#404040'}} to='/'>Вернуться на главную</Link></h1>
					)}/>
				</Routes>
			</>
	);
}

export default App;

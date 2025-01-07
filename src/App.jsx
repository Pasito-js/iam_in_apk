import './App.css';
import {Route, Routes} from 'react-router';
import Home from './Site/Home.jsx';
import Quiz from './Site/Quiz.jsx';
import EasyQuiz from './Components/Quiz/Games/Easy/EasyQuiz.jsx';

function App() {
	
	return (
			<>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/quiz" element={<Quiz/>}/>
					<Route path='/quiz/easy' element={<EasyQuiz />} />
					
					
					<Route path="/*" element={<h1 style={{textAlign: 'center'}}>Страница не найдена</h1>}/>
				</Routes>
			</>
	);
}

export default App;

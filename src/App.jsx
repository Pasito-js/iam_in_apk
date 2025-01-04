import './App.css';
import {Route, Routes} from 'react-router';
import Home from './Site/Home.jsx';
import Quiz from './Site/Quiz.jsx';

function App() {
	return (
			<>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/quiz" element={<Quiz/>}/>
					<Route path="/*" element={<h1>Страница не найдена</h1>}/>
				</Routes>
			</>
	);
}

export default App;

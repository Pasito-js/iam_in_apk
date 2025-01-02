import './Goals.css';

const Goals = () => {
	return (
		<div>
			<div className="container">
				<div className="goal">
					<div className="main__text">
						<h2>Какая цель у этого проекта?</h2>
						<p>Дать ученикам и взрослым новые знания связанные с АПК в России, а
							также пройти викторину и профориентацию!</p>
						<a href="#">Викторина</a>
					</div>
					
					<img src="/goals_demo.png" alt="goal"/>
				</div>
			</div>
		</div>
	);
};

export default Goals;
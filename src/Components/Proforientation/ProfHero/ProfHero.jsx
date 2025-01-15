import './ProfHero.css';
import {Link} from 'react-router';

const ProfHero = () => {
	return (
		<div>
			<div className="container">
				
				<div className="prof-title">
					<h2 className="title-2">Профориентация:</h2>
					<p className="prof__desc">Здесь вы сможете узнать, какая бы проффесия
						подошла бы вам больше всего.</p>
				</div>
				
				<main className='prof-hero'>
					<img src="/prof_test.png" alt="logo" width={650} height={425} style={{border: '1px solid #f0f0f0', borderRadius: '10px'}} />
					<Link className='prof__link' to='/prof/test'>Начать прохождение</Link>
				</main>
				
			</div>
		</div>
	);
};

export default ProfHero;
import './Refs.css';
import RefCard from './RefCard.jsx';

const Refs = () => {
	return (
		<section>
			<div className="container">
				<div className="refs__text">
					<h2 className="title-2">Ссылки:</h2>
					<p>Здесь можно ознакомиться со всеми разделами нашего сайта:</p>
				</div>
				
				<ul className='refs-links'>
					<li>
						<RefCard
							title={'Викторина'}
							titleBg={'lawngreen'}
							textBg={'black'}
							previewImg={'/quiz.png'}
							bg={'#F3F3F3'}
							arr={'/black_arrow.png'}
						/>
					</li>
					<li>
						<RefCard
							title={'Профориентация'}
							titleBg={'white'}
							textBg={'white'}
							previewImg={'/AgroCulture_IMG/cart_with_food.png'}
							bg={'black'}
							arr={'/white_arrow.png'}
						/>
					</li>
					<li>
						<RefCard
							title={'АО Гатчинское'}
							titleBg={'white'}
							textBg={'black'}
							previewImg={'/AgroCulture_IMG/tractor.png'}
							bg={'#B9FF66'}
							arr={'/black_arrow.png'}
						/>
					</li>
					<li>
						<RefCard
							title={'Агрокласс'}
							titleBg={'white'}
							textBg={'white'}
							previewImg={'/demo.png'}
							bg={'black'}
							arr={'/white_arrow.png'}
						/>
					</li>
					
				
				</ul>
			
			</div>
		</section>
	);
};

export default Refs;
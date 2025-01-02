import './Refs.css';
import RefCard from './RefCard.jsx';

const Refs = () => {
	return (
		<section>
			<div className="container">
				<div className="refs__text">
					<h2 className="title-2">Ссылки:</h2>
					<p>At our digital marketing agency, we offer a range of services to
						help businesses grow and succeed online. These services include:</p>
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
							previewImg={'/demo.png'}
							bg={'black'}
							arr={'/white_arrow.png'}
						/>
					</li>
					<li>
						<RefCard
							title={'Викторина'}
							titleBg={'white'}
							textBg={'black'}
							previewImg={'/quiz.png'}
							bg={'#B9FF66'}
							arr={'/black_arrow.png'}
						/>
					</li>
					<li>
						<RefCard
							title={'Профориентация'}
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
import './Refs.css';
import RefCard from './RefCard.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';


const Refs = () => {
	
	useEffect(() => {
		AOS.init({
			duration: 1500,
		})
	}, [])
	
	return (
		<section id='refs' >
			<div className="container">
				<div className="refs__text">
					<h2 className="title-2">Ссылки:</h2>
					<p>Здесь можно ознакомиться со всеми разделами нашего сайта:</p>
				</div>
				
				<ul className='refs-links' >
					<li data-aos="fade-right">
						<RefCard
							title={'Викторина'}
							titleBg={'lawngreen'}
							textBg={'black'}
							previewImg={'/quiz.png'}
							bg={'#F3F3F3'}
							arr={'/black_arrow.png'}
						/>
					</li>
					<li data-aos="fade-left">
						<RefCard
							title={'Профориентация'}
							titleBg={'white'}
							textBg={'white'}
							previewImg={'/AgroCulture_IMG/cart_with_food.png'}
							bg={'wheat'}
							arr={'/white_arrow.png'}
						/>
					</li>
					<li data-aos="fade-right">
						<RefCard
							title={'АО Гатчинское'}
							titleBg={'white'}
							textBg={'black'}
							previewImg={'/AgroCulture_IMG/tractor.png'}
							bg={'#B9FF66'}
							arr={'/black_arrow.png'}
						/>
					</li>
					<li data-aos="fade-left">
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
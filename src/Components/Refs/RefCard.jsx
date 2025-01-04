import './RefCard.css';

const RefCard = ({title, previewImg, titleBg, textBg, bg, arr}) => {
	//TODO: реализовать на <a 'more_info'> возможность перейти на викторину при помощи Router
	
	return (
		<div className="RefCard">
			<div className="card" style={{background: bg}}>
				<div className="text">
					<h3 className='title-3' style={{background: titleBg}}>{title}</h3>
					<a href="#" className="more_info" style={{color: textBg}}>
						<img src={arr} alt=""/> Перейти
					</a>
				</div>
				<img className='preview-img' width={210} height={170} src={previewImg} alt="img"/>
			</div>
		</div>
	);
};

export default RefCard;
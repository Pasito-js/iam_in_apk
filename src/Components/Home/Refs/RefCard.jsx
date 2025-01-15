import './RefCard.css';
import {Link, useNavigate} from 'react-router';

const RefCard = ({title, previewImg, titleBg, textBg, bg, arr, href}) => {
	const navigate = useNavigate();
	
	const toPage = () => {
		navigate(href);
	};
	
	return (
		<div className="RefCard" onClick={toPage}>
			<div className="card" style={{background: bg}}>
				<div className="text">
					<h3 className='title-3' style={{background: titleBg}}>{title}</h3>
					<Link to={href} className="more_info" style={{color: textBg}}>
						<img src={arr} alt=""/> Перейти
					</Link>
				</div>
				<img className='preview-img' width={210} height={170} src={previewImg} alt="img"/>
			</div>
		</div>
	);
};

export default RefCard;
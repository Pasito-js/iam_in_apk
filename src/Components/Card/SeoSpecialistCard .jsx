import './SeoSpecialistCard .css';

const SeoSpecialistCard = ({ name, avatar, job, experience, skills }) => {
	return (
		<div className="seo-specialist-card">
			<div className="card-header">
				<div className="avatar">
					<img src={avatar} width={80} height={80} alt="avatar"/>
				</div>
				<div className="name">{name}</div>
				<div className="title">{job}</div>
			</div>
			<div className="card-body">
				<div className="experience">{experience}</div>
				<div className="skills">
					<div className="skill-label">Ключевые навыки:</div>
					<ul>
						{skills.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SeoSpecialistCard;

import './Information.css';

const Information = () => {
	return (
		<div>
			<div className="container">
				<div className="refs__text">
					<h2 className="title-2">Информация:</h2>
					<p>Дополнительная информация связанная с агропромышленностью в
						России.</p>
				</div>
				
				<div className="block-news">
					<ul className='list-news'>
						<li className="block__new">
							<p>For a local restaurant, we implemented a targeted PPC campaign
								that resulted in a 50% increase in website traffic and a 25%
								increase in sales.</p>
							<a href="#">Learn more <img src="/black_arrow.png"
							                            alt="arrow"/></a>
						</li>
						
						<li className="block__new">
							<p>For a B2B software company, we developed an SEO strategy that
								resulted in a first page ranking for key keywords and a 200%
								increase in organic traffic.</p>
							<a href="#">Learn more <img src="/black_arrow.png"
							                            alt="arrow"/></a>
						</li>
						
						<li className="block__new">
							<p>For a national retail chain, we created a social media
								marketing campaign that increased followers by 25% and generated
								a 20% increase in online sales.</p>
							<a href="#">Learn more <img src="/black_arrow.png"
							                            alt="arrow"/></a>
						</li>
					
					
					</ul>
				</div>
			
			</div>
		</div>
	);
};

export default Information;
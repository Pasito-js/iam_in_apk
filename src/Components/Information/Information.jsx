import './Information.css';

const Information = () => {
	return (
		<div id='information'>
			<div className="container">
				<div className="refs__text">
					<h2 className="title-2">Информация:</h2>
					<p>Дополнительная информация связанная с агропромышленностью в
						России.</p>
				</div>
				
				<div className="block-news">
					<ul className="list-news">
						<li className="block__new">
							<p>Развитие агропромышленной интеграции в России началось в кон.
								1920-х гг. с формирования агроиндустриальных комбинатов,
								производящих ... </p>
							<a href="https://old.bigenc.ru/text/5047866">Узнать больше<img
								src="/black_arrow.png"
								alt="arrow"/></a>
						</li>
						
						<li className="block__new">
							<p>В структуре АПК можно выделить три основных сектора: <br/>
								Сельское хозяйство, которое включает в себя растениеводство
								и животноводство ...</p>
							<a
								href="https://lindpack.ru/info/articles/sypuchie-gruzy/agropromyshlennyy-kompleks/">Узнать больше<img src="/black_arrow.png"
								          alt="arrow"/></a>
						</li>
						
						<li className="block__new">
							<p>Суть агропромышленного комплекса, или как его еще принято
								называть АПК, можно выразить таким определением: это комплекс
								предприятий и производств ...</p>
							<a
								href="https://www.homework.ru/spravochnik/agropromishlennij-kompleks-rossii-ego-struktura-i-znachenie/">Узнать больше<img src="/black_arrow.png"
								          alt="arrow"/></a>
						</li>
					
					
					</ul>
				</div>
			
			</div>
		</div>
	);
};

export default Information;
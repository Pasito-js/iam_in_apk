import Footer from '../Components/Home/Footer/Footer.jsx';
import Header from '../Components/Home/Header/Header.jsx';
import Hero from '../Components/Home/Hero/Hero.jsx';
import Refs from '../Components/Home/Refs/Refs.jsx';
import Goals from '../Components/Home/Goals/Goals.jsx';
import AboutUs from '../Components/Home/AboutUs/AboutUs.jsx';
import Information from '../Components/Home/Information/Information.jsx';
import Contacts from '../Components/Home/Contacts/Contacts.jsx';


const Home = () => {
	
	return (
		<div id='home'>
			<Header/>
			<Hero/>
			<Refs/>
			<Goals/>
			<AboutUs/>
			<Information/>
			<Contacts/>
			<Footer/>
		</div>
	);
};

export default Home;
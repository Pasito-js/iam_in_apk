import Information from '../Components/Information/Information.jsx';
import Header from '../Components/Header/Header.jsx';
import Hero from '../Components/Hero/Hero.jsx';
import Refs from '../Components/Refs/Refs.jsx';
import Goals from '../Components/Goals/Goals.jsx';
import AboutUs from '../Components/AboutUs/AboutUs.jsx';
import Contacts from '../Components/Contacts/Contacts.jsx';
import Footer from '../Components/Footer/Footer.jsx';


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
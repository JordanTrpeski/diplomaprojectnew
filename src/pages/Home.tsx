import Calendar from '../components/Calendar';
import Footer from '../components/Footer';
import GettingStarter from '../components/GettingStarter';
import HomePageContent from '../components/HomePageContent';
import InfoPageContent from '../components/InfoPageContent';

import './Home.css';

const Home: React.FC = () => {
  return (
    <div className='bg-white'>
         <HomePageContent></HomePageContent>
    </div>
  );
};

export default Home;

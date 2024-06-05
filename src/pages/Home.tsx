import Footer from '../components/Footer';
import GettingStarter from '../components/GettingStarter';
import InfoPageContent from '../components/InfoPageContent';

import './Home.css';

const Home: React.FC = () => {
  return (
    <div className='bg-white'>
          <InfoPageContent></InfoPageContent>
         <Footer></Footer>
    </div>
  );
};

export default Home;

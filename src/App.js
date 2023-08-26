import './App.css';
import Navbar from './web-components/navbar';
import MainBanner from './web-components/main-banner';
import ServicesArea from './web-components/services-area';
import PortfolioArea from './web-components/portfolio-area';
import CounterSection from './web-components/rn-counterup-area';
import TeamArea from './web-components/rn-team-area';

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <ServicesArea />
      <PortfolioArea />
      <CounterSection />
      <TeamArea />
    </>
  )
}

export default App;
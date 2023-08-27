import './App.css';
import Navbar from './web-components/navbar';
import MainBanner from './web-components/main-banner';
import ServicesArea from './web-components/services-area';
import PortfolioArea from './web-components/portfolio-area';
import CounterSection from './web-components/rn-counterup-area';
import TeamArea from './web-components/rn-team-area';
import Testimonial from './web-components/rn-testimonials';
import Blogs from './web-components/rn-blog-area';
import BrandArea from './web-components/rn-brand-area';
import Footer from './web-components/footer';

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <ServicesArea />
      <PortfolioArea />
      <CounterSection />
      <TeamArea />
      <Testimonial />
      <Blogs />
      <BrandArea />
      <Footer />
    </>
  )
}

export default App;
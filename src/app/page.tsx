import Header from './components/Header'
import Footer from './components/Footer'

import Accomodations from './components/Accomodations';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        <Accomodations />
      </div>
      <Footer />
    </div>
  );
}

import Header from './components/Header'
import Footer from './components/Footer'

import Filters from './components/Filters';
import Accomodations from './components/Accomodations';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='container max-w-[1095px] mx-auto flex items-start py-4'>
        <Filters />
        <Accomodations />
      </div>
      <Footer />
    </div>
  );
}

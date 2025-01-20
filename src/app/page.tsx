import Filter from '@/ui/filter';
import Status from '../ui/status/index';
import SearchBar from '@/ui/searchBar';
import Intro from '@/components/intro.tsx';
import AboutProject from '@/components/about-project';
import OurGoals from '@/components/our-goals';
import HowDoesItWorks from '@/components/how-does-it-works';
import ContactUs from '@/components/contact-us';

export default function Home() {
  return (
    <div>
      {/* <Filter />
      <br />
      <Status state="new" />
      <br />
      <Status state="approved" />
      <br />
      <Status state="rejected" />
      <br />
      <SearchBar/> */}
      <Intro />
      <AboutProject />
      <OurGoals />
      <HowDoesItWorks />
      <div style={{height: 200, backgroundColor: 'grey', textAlign: 'center', fontSize: 60}}>Factories</div>
      <br />
      <div style={{height: 200, backgroundColor: 'grey', textAlign: 'center', fontSize: 60}}>Requests</div>
      <ContactUs />
    </div>
  );
}

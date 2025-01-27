import Filter from '@/ui/filter';
import Status from '../ui/status/index';
import SearchBar from '@/ui/searchBar';
import Intro from '@/components/intro.tsx';
import AboutProject from '@/components/about-project';
import OurGoals from '@/components/our-goals';
import HowDoesItWorks from '@/components/how-does-it-works';
import ContactUs from '@/components/contact-us';
import LeaveRequest from '@/components/leave-request';
import Factories from '@/components/factories';
import Reviews from '@/components/reviews';

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
      <Reviews />
      <Intro />
      <AboutProject />
      <OurGoals />
      <HowDoesItWorks />
      <Factories />
      
      <ContactUs />
      {/* <LeaveRequest /> */}
    </div>
  );
}

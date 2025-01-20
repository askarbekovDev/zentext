import Filter from '@/ui/filter';
import Status from '../ui/status/index';
import SearchBar from '@/ui/searchBar';
import Intro from '@/components/intro.tsx';
import AboutProject from '@/components/aboutProject';
import OurGoals from '@/components/ourGoals';
import HowDoesItWorks from '@/components/howDoesItWorks';

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
    </div>
  );
}

import Filter from '@/ui/filter';
import Status from '../ui/status/index';
import SearchBar from '@/ui/searchBar';

export default function Home() {
  return (
    <div>
      <Filter />
      <br />
      <Status state="new" /><br /><Status state="approved" /><br /><Status state="rejected" />
      <br />
      <SearchBar />
    </div>
  );
}

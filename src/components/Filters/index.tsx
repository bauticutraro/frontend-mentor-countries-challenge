import Input from '../base/Input';
import Select, { Option, Options } from '../base/Select';
import { HiSearch } from 'react-icons/hi';
import './styles.scss';
import { IconType } from 'react-icons';
import { REGIONS } from '../../constants';

type Props = {
  onFilter: {
    byName: (name: string) => void;
    byRegion: (region: string) => void;
  };
};

const regionsOptions: Options = REGIONS.map(region => ({
  value: region,
  label: region
}));

const Filters: React.FC<Props> = ({ onFilter }) => {
  return (
    <div className='filters-container'>
      <div className='search-filter'>
        <Input
          placeholder='Search for a country...'
          icon={HiSearch as IconType}
          onChange={e => onFilter.byName(e.target.value)}
        />
      </div>
      <div className='regions-filter'>
        <Select
          onChange={item => {
            onFilter.byRegion(item ? ((item as Option).value as string) : '');
          }}
          options={regionsOptions}
          isClearable
          placeholder='Filter by Region'
        />
      </div>
    </div>
  );
};

export default Filters;

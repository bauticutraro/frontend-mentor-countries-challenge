import { CountryBasicInfo } from '../../types/countries';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
  country: CountryBasicInfo;
};

const CountryCard: React.FC<Props> = ({ country }) => {
  return (
    <Link className='country-link' to={`/country/${country.cca2}`}>
      <div className='country-card'>
        <img
          alt={`${country.name.common} flag`}
          src={country.flags.svg}
          className='country-card-img'
        />
        <div className='country-card-subcontainer'>
          <p className='country-card-title'>{country.name.common || '-'}</p>

          <ul className='country-card-details'>
            <li className='country-card-details-item'>
              <span className='country-card-details-item-name'>
                Population:
              </span>
              <span className='country-card-details-item-text'>
                {country.population.toLocaleString('de-DE') || '-'}
              </span>
            </li>
            <li className='country-card-details-item'>
              <span className='country-card-details-item-name'>Region:</span>
              <span className='country-card-details-item-text'>
                {country.region || '-'}
              </span>
            </li>
            <li className='country-card-details-item'>
              <span className='country-card-details-item-name'>Capital:</span>
              <span className='country-card-details-item-text'>
                {country.capital || '-'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;

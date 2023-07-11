import './styles.scss';

type Props = {
  title: string;
  value?: string;
};

const CountryDetailItem: React.FC<Props> = ({ title, value }) => {
  return (
    <li className='item'>
      <span className='item-name'>{title}:</span>
      <span className='item-text'>{value || '-'}</span>
    </li>
  );
};

export default CountryDetailItem;

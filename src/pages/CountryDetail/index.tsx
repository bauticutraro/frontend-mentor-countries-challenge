import { useGetCountryByCca2, useGetCountriesByCca2 } from '../../hooks/useGetCountries'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../../components/base/Button'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { IconType } from 'react-icons'
import NotFoundText from '../../components/NotFoundText'
import Loader from '../../components/base/Loader'
import CountryDetailItem from '../../components/CountryDetailItem'
import './styles.scss'

const CountryDetail = () => {
  const { cca2 } = useParams()
  const navigate = useNavigate()

  const { data, isLoading } = useGetCountryByCca2(cca2 as string)
  const country = data?.[0]

  const { data: borderCountriesData, isLoading: isBorderCountrisDataLoading } = useGetCountriesByCca2(
    country?.borders || []
  )

  const onGoBack = () => {
    navigate(-1)
  }

  const onGoToBorderCountry = (cca2: string) => {
    navigate(`/country/${cca2}`)
  }

  if (isLoading || isBorderCountrisDataLoading) return <Loader />

  return (
    <div>
      <div className="button-container">
        <Button onClick={onGoBack} icon={HiArrowLongLeft as IconType}>
          Back
        </Button>
      </div>

      {country ? (
        <div className="container">
          <div className="country-data-flag-container">
            <img
              alt={`${country.name.common} flag`}
              src={country.flags.svg}
              className="country-data-flag-img"
            />
          </div>

          <div className="country-data">
            <h1 className="country-data-title">{country.name.common}</h1>
            <div className="country-data-details">
              <ul className="country-data-details-list">
                <CountryDetailItem
                  title="Native Name"
                  value={country.name.nativeName?.[Object.keys(country.name.nativeName)[0]].common}
                />

                <CountryDetailItem title="Population" value={country.population.toLocaleString('de-DE')} />

                <CountryDetailItem title="Region" value={country.region} />

                <CountryDetailItem title="Sub Region" value={country.subregion} />

                <CountryDetailItem title="Capital" value={country.capital?.join(', ')} />
              </ul>

              <ul className="country-data-details-list">
                <CountryDetailItem title="Top Level Domain" value={country.tld?.join(', ')} />

                <CountryDetailItem
                  title="Currencies"
                  value={Object.values(country?.currencies || {})
                    ?.map(currency => currency.name)
                    .join(', ')}
                />

                <li className="country-data-details-item">
                  <span className="country-data-details-item-name">Languages:</span>
                  <span className="country-data-details-item-text">
                    {Object.values(country?.languages || {}).join(', ') || '-'}
                  </span>
                </li>

                <CountryDetailItem
                  title="Languages"
                  value={Object.values(country?.languages || {}).join(', ')}
                />
              </ul>
            </div>

            <div className="country-data-details-border-countries">
              <p className="country-data-details-border-countries-name">Border Countries:</p>

              {borderCountriesData?.length ? (
                <div className="country-data-details-border-countries-list">
                  {borderCountriesData?.map(country => (
                    <Button key={country.cca2} size="sm" onClick={() => onGoToBorderCountry(country.cca2)}>
                      {country.name.common}
                    </Button>
                  ))}{' '}
                </div>
              ) : (
                <span className="country-data-details-border-countries-empty">-</span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <NotFoundText>No se han encontrado paises con el código cca2 igual a {cca2}.</NotFoundText>
      )}
    </div>
  )
}

export default CountryDetail

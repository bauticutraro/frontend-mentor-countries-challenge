import { useState } from 'react'
import CountryCard from '../../components/CountryCard'
import './styles.scss'
import Filters from '../../components/Filters'
import { ContriesFilters, useGetCountries } from '../../hooks/useGetCountries'
import Loader from '../../components/base/Loader'
import NotFoundText from '../../components/NotFoundText'

const INITIAL_FILTERS_STATE = { name: '', region: '' }

const Home = () => {
  const [countriesFilters, setCountriesFilters] = useState<ContriesFilters>(INITIAL_FILTERS_STATE)
  const { data, isLoading, error } = useGetCountries(countriesFilters)

  const handleOnFilterByName = (name: string) => {
    setCountriesFilters(prevState => ({ ...prevState, name }))
  }
  const handleOnFilterByRegion = (region: string) => {
    setCountriesFilters(prevState => ({ ...prevState, region }))
  }

  if (isLoading) return <Loader />
  if (error) return <NotFoundText>Ha sucedido un error al cargar los paises.</NotFoundText>

  return (
    <div>
      <Filters
        onFilter={{
          byName: handleOnFilterByName,
          byRegion: handleOnFilterByRegion
        }}
      />
      {data?.length ? (
        <div className="countries-list">
          {data?.map(country => <CountryCard key={country.cca2} country={country} />)}
        </div>
      ) : (
        <div className="not-found-text-container">
          <NotFoundText>No se han encontrado paises.</NotFoundText>
        </div>
      )}
    </div>
  )
}

export default Home

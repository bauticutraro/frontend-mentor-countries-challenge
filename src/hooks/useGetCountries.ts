import { useQuery } from 'react-query'
import { getCountries, getCountriesByCca2, getCountryByCca2 } from '../services/countries'
import { CountryBasicInfo } from '../types/countries'

export type ContriesFilters = { name: string; region: string }

const sortByName = (a: CountryBasicInfo, b: CountryBasicInfo) =>
  a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase())

const filterByNameAndRegion = (country: CountryBasicInfo, filters: ContriesFilters) =>
  country.region.toLowerCase().includes(filters.region?.toLowerCase()) &&
  country.name.common.toLowerCase().includes(filters.name?.toLowerCase())

const useGetCountries = (filters: ContriesFilters) => {
  return useQuery(`countries`, getCountries, {
    select: countries => countries.sort(sortByName).filter(country => filterByNameAndRegion(country, filters))
  })
}

const useGetCountryByCca2 = (cca2: string) => {
  return useQuery(['country', cca2], () => getCountryByCca2(cca2))
}

const useGetCountriesByCca2 = (cca2: string[]) => {
  return useQuery(['countriesByCca2', cca2.join(',')], () => getCountriesByCca2(cca2), {
    enabled: Boolean(cca2?.length)
  })
}

export { useGetCountries, useGetCountryByCca2, useGetCountriesByCca2 }

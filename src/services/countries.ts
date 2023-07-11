import { CountryBasicInfo, CountryFullInfo } from '../types/countries'
import requestUtils from '../utils/requestUtils'

type BorderCountryInfo = Omit<CountryBasicInfo, 'flags' | 'population' | 'region' | 'capital'>

const getCountriesFields = ['cca2', 'name', 'flags', 'population', 'region', 'capital']

const getCountryByCca2Fields = [
  ...getCountriesFields,
  'subregion',
  'tld',
  'currencies',
  'borders',
  'languages'
]

const getCountriesByCca2Fields = ['name', 'cca2']

export const getCountries = () =>
  requestUtils
    .attemptApiRequest({
      endpoint: `/all?fields=${getCountriesFields.join(',')}`
    })
    .then(requestUtils.verifyResponse)
    .then(requestUtils.attempBody)
    .catch(requestUtils.handleFailure) as Promise<CountryBasicInfo[]>

export const getCountryByCca2 = (cca2: string) =>
  requestUtils
    .attemptApiRequest({
      endpoint: `/alpha?codes=${cca2}&fields=${getCountryByCca2Fields.join(',')}`
    })
    .then(requestUtils.verifyResponse)
    .then(requestUtils.attempBody)
    .catch(requestUtils.handleFailure) as Promise<CountryFullInfo[]>

export const getCountriesByCca2 = (cca2: string[]) =>
  requestUtils
    .attemptApiRequest({
      endpoint: `/alpha?codes=${cca2.join(',')}&fields=${getCountriesByCca2Fields.join(',')}`
    })
    .then(requestUtils.verifyResponse)
    .then(requestUtils.attempBody)
    .catch(requestUtils.handleFailure) as Promise<BorderCountryInfo[]>

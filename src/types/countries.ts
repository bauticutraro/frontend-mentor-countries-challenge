// INFO: Types were made with help of https://app.quicktype.io/
import { REGIONS } from '../constants'

export type CountryBasicInfo = {
  cca2: string
  name: Name
  flags: Flags
  population: number
  region: Region
  capital?: string[]
}

export type CountryFullInfo = CountryBasicInfo & {
  subregion?: string
  tld?: string[]
  currencies?: Currencies
  borders?: string[]
  languages?: { [key: string]: string }
}

export type Currencies = Record<string, Aed>

export type Aed = {
  name: string
  symbol: string
}

export type Flags = {
  png: string
  svg: string
  alt?: string
}

export type Name = {
  common: string
  official: string
  nativeName?: { [key: string]: Translation }
}

export type Translation = {
  official: string
  common: string
}

export type Region = (typeof REGIONS)[number]

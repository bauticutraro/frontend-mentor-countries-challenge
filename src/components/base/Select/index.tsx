import ReactSelect from 'react-select'
import './styles.scss'

export type Option = {
  value: string | number
  label: string
}

export type Options = Array<Option>

type Props = React.ComponentProps<ReactSelect>

const Select: React.FC<Props> = props => {
  return (
    <label className="label">
      <ReactSelect {...props} classNamePrefix="react-select" className="react-select-container" />
    </label>
  )
}

export default Select

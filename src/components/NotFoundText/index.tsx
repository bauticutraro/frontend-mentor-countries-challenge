import { ReactNode } from 'react'
import './styles.scss'

type Props = {
  children: ReactNode
}

const NotFoundText: React.FC<Props> = ({ children }) => {
  return <p className="not-found-text">{children}</p>
}

export default NotFoundText

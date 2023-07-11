import NavBar from '../NavBar'
import { ReactNode } from 'react'
import './styles.scss'

type Props = {
  children: ReactNode
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="main">
        <div className="main-content">{children}</div>
      </main>
    </>
  )
}

export default PageLayout

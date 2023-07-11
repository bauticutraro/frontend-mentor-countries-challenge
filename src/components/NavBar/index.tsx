import { useContext } from 'react'
import './styles.scss'
import { HiMoon, HiOutlineMoon } from 'react-icons/hi2'
import { ThemeContext } from '../../context/theme-context'
import { THEMES } from '../../constants'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="nav">
      <div className="nav-content">
        <Link to="/">
          <h1 className="title">Where in the world?</h1>
        </Link>
        <div className="theme-button" onClick={toggleTheme}>
          {theme === THEMES.DARK ? (
            <>
              <div className="theme-icon">
                <HiMoon size={20} />
              </div>
              <p>Dark mode</p>
            </>
          ) : (
            <>
              <div className="theme-icon">
                <HiOutlineMoon size={20} />
              </div>
              <p>Light mode</p>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar

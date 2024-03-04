import ironhackLogo from '../assets/ironhack-logo-xs.png'
import hamburgerIcon from '../assets/menu-top-xs.png'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><img src={ironhackLogo} alt="ironhack" /></li>
        </ul>
        <ul>
            <li>
                <img src={hamburgerIcon} alt="toggle menu" />
            </li>
        </ul>
    </nav>
  )
}
export default Navbar
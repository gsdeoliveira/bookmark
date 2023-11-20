import logo from '../assets/images/logo-bookmark.svg'
import Menu from './Menu'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-5 md:py-10 sm:px-10 lg:px-28">
      <div>
        <a href="#">
          <img src={logo} alt="bookmark" />
        </a>
      </div>
      <Menu />
    </nav>
  )
}

export default Navbar

import logo from '../assets/images/logo-bookmark.svg'
import burger from '../assets/images/icon-hamburger.svg'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-5 md:py-10 sm:px-10 lg:px-28 text-sm md:text-base">
      <div>
        <a href="#">
          <img src={logo} alt="bookmark" />
        </a>
      </div>
      <div>
        <ul className="hidden md:flex items-center gap-5 lg:gap-10 uppercase tracking-widest">
          <li>
            <a href="#" className="hover:text-softRed transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-softRed transition-colors">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-softRed transition-colors">
              Contact
            </a>
          </li>
          <li>
            <Button className="uppercase border-2 bg-softRed tracking-widest hover:bg-white hover:text-softRed hover:border-softRed transition-all">
              Login
            </Button>
          </li>
        </ul>
        <img src={burger} alt="Menu" className="md:hidden" />
      </div>
    </nav>
  )
}

export default Navbar

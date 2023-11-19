import logo from '../assets/images/logo-bookmark.svg'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-5 md:py-10 sm:px-10 lg:px-28 text-sm md:text-base lg:text-lg">
      <div>
        <a href="#">
          <img src={logo} alt="bookmark" />
        </a>
      </div>
      <div>
        <ul className="hidden md:flex items-center gap-5 lg:gap-10 uppercase tracking-widest">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <Button className="uppercase bg-softRed tracking-widest">
              Login
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

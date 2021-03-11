import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

const NavBar = () => {

  return (
    <div className="navBar">
      <div className="logo">
        <h2>Offtrad!</h2>
      </div>
      <ul>
        <li><div className="text-with-icon"><FontAwesomeIcon className="icon" icon="home" size="1x" /> <NavLink to='/home' className='navText' activeClassName='activeNav' >Home</NavLink></div></li>
        <li><div className="text-with-icon"><FontAwesomeIcon className="icon" icon="search" size="1x" /> <NavLink to='/discover' className='navText' activeClassName='activeNav' >Discover</NavLink></div></li>
        <li><div className="text-with-icon"><FontAwesomeIcon className="icon" icon="music" size="1x" /> <NavLink to='/artists' className='navText' activeClassName='activeNav' >Artists</NavLink></div></li>
        <li><div className="text-with-icon"><FontAwesomeIcon className="icon" icon="book" size="1x" /> <NavLink to='/library' className='navText' activeClassName='activeNav' >My Library</NavLink></div></li>
      </ul>
      <div className="cookies">
        <span>Privacy Policy</span>
        <span>Terms and Conditions</span>
      </div>
    </div>
  )
}

export default NavBar

import './Navbar.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({  setShowLogin }) => {
  const [menu, setMenu] = useState("menu")

  const getTotalAmount = () => 0;
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        <li>
          <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        </li>
        <li>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        </li>
        <li>
          <a href='#app.download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile app</a>
        </li>
        <li>
          <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="basket icon" /></Link>
          {getTotalAmount && getTotalAmount() !== 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
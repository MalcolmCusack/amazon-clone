import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket" 
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();


  /* passing in the current state like the basket state */
  /* dispatch is like the action happening */

  // logs out if clicked
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  
  return (
    <nav className = "header">

      <Link to="/">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt=""
        />
      </Link>

      <div className="header_search">
        <input type="text" className= "header_searchInput" />
        <SearchIcon className="header_searchIcon"/>
      </div>

      <div className="header_nav">
  {/* if there issn't a user send to login page. Also change between sign in and sign out */}
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_option1">Hello {user?.email}</span>
            <span className="header_option2">{user ? 'Sign Out' : 'Sign In'} </span>
          </div>
        </Link>

        <Link to="/orders" className="header_link">
          <div className="header_option">
            <span className="header_option1">Returns</span>
            <span className="header_option2">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option1">Your</span>
            <span className="header_option2">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_option_basket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className='header_option2 header_basketCount'>{basket?.length}</span>
          </div>
        </Link>

      </div>

    </nav>
  );
}
  export default Header;

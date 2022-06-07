import './NavBar.css';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {/* <img className="logo-img" src={process.env.PUBLIC_URL + "put image name here"} /> */}
      <span>Welcome, {user.name}!</span>
      &nbsp;  &nbsp;
      <Link className="nav-links" to="/sell">Sell Products</Link>
      &nbsp;  &nbsp;
      <Link className="nav-links" to="/buy">Search Available Products</Link>
      &nbsp;  &nbsp;
      <Link className="nav-links" to="/listings">My Listings</Link>
      &nbsp;  &nbsp;
      <Link className="nav-links" to="/orders">My Orders</Link>
      &nbsp;  &nbsp;
      <Link className="nav-links" onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}
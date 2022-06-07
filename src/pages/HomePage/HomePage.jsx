import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage({ user }) {
    return (
        <main className="home-page">
            {/* <img className="home-img" src={process.env.PUBLIC_URL + "HomePage.png"} /> */}
            <div>
                <div>
                    <h1 className="welcome">Welcome, {user.name}!</h1>
                    <h3 className="welcome-question">What would you like to do today?</h3>
                </div>
                <div className="home-link-container">
                    <Link className="home-links" to="/sell">Sell A Product</Link>
                </div>
                <br />
                <div className="home-link-container">
                    <Link className="home-links" to="/buy">Purchase A Product</Link>
                </div>
            </div>
        </main>
    );
}
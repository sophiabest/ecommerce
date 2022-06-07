import './AuthPage.css';
import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="authPage">
      {/* <img className="auth-img" src={process.env.PUBLIC_URL + "HomePage.png"} /> */}
      <div>
        <h1>Welcome to buying and selling!</h1>
        <h3>A marketplace for buying and selling used clothes.</h3>
        <br />
        <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
        {showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
        }
      </div>
    </main>
  );
}
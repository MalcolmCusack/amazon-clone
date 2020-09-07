import React, {useState} from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = event => {
        event.preventDefault(); //prevents referesh

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {      //checks auth with firebase and sends back to homepage
                //other wise alerts of wrong auth
                history.push('/');
        }).catch(e => alert(e.message));
    }

    // Authentication => email/pass enable

    const register = event => {
        event.preventDefault(); //prevents referesh

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {         //creates new user in firebase db

            }).catch((e) => alert(e.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        value={email} 
                        onChange={event => setEmail(event.target.value)} 
                        type="email"
                    />
                    <h5>Password</h5>
                    <input 
                        value={password} 
                        type="password" 
                        onChange={event => setPassword(event.target.value)}
                        />
                    <button onClick={login} type="submit">Sign In</button>
                </form>

                <button onClick={register} type="submit">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

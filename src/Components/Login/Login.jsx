import React, {useState} from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    const FormSubmit =(e)=>{
        e.preventDefault();
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
        <div className="login">
            <form action="" onSubmit={FormSubmit}>
                <h3 style={{textAlign:'center'}}>Login</h3>

                <input type="text" placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />

                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />

                <div className="forget" style={{textAlign:'right', margin:'1.3rem 0rem'}}>
                    <Link style={{color:'#7f8c8d'}} to="/forget">Forget Your Password ?</Link>
                </div>

                <button type='submit'>Login</button>

                <div className="signup" style={{textAlign:'center',marginTop:'1.3rem'}}>
                    <Link style={{color:'#7f8c8d'}} to="/sign">Or Sign Up</Link>
                </div>
            </form>
        </div>
    </>
  );
};

export default Login;

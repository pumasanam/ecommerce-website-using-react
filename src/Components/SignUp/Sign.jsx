import React, {useState} from 'react';
import "./Sign.scss";
// import { Link } from 'react-router-dom';

const Sign = () => {

    const FormSubmit =(e)=>{
        e.preventDefault();
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
  return (
    <>
       <div className="Sign">
            <form action="" onSubmit={FormSubmit}>
                <h3 style={{textAlign:'center'}}>Sign Up</h3>

                <input type="text" placeholder='FullName' value={name} onChange={(e)=>{setName(e.target.value)}} />

                <input type="text" placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />

                <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />

                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />

                {/* <div className="forget" style={{textAlign:'right', margin:'1.3rem 0rem'}}>
                    <Link style={{color:'#7f8c8d'}} to="/forget">Forget Your Password ?</Link>
                </div> */}

                <button type='submit'>Create An Account</button>

                {/* <div className="signup" style={{textAlign:'center',marginTop:'1.3rem'}}>
                    <Link style={{color:'#7f8c8d'}} to="/sign">Or Sign Up</Link>
                </div> */}
            </form>
        </div>
    </>
  );
};

export default Sign;

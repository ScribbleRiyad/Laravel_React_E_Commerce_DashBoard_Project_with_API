
import Header from './Header';
import React ,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
function Login() {
  async function login ()
{
  let item={email,password}
    console.warn(item)
    let  result = await fetch("http://localhost:8000/api/login", {
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type": 'application/json',

        "Accept":'application/json'
      }
    });
    result = await result.json()
    console.warn("result",result)
    localStorage.setItem("user-info",JSON.stringify(result))
    history("/add")
}
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
      history("/add")
    }
  }, [])
    return (
      <div>
        < Header />
        <h1>Login Page</h1>
        <div className= "col-sm-6 offset-sm-3">
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email"  /><br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" /><br />
        <button onClick={login} className="btn btn-primary" >Sign in</button>
      </div>
      </div>
    );
  }
  
  export default Login;
  
import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router'
import jwt from 'jsonwebtoken';

const Login = ()=>{
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("You are not logged in");
   const router  = useRouter();
    
   async function submitForm(e){
       e.preventDefault();
       const res= await fetch("/api/testjsonapi",{
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name, password}),
        }).then(t=>t.json());
        const token =res.token;
        if(token){
            const json = jwt.decode(token);
            setMessage(`You are now logged in ${json.name} and as a ${json.admin ? 'admin': 'user'}`);
        }else{
            setMessage('No User found with this name. Please Sign Up.');
        }
   }
    return(
      <div>
          <h1>{message}</h1>
        <h3>LOGIN</h3>
        <form method="POST" action="/api/login">
           <input type="text" name="name" placeholder="name" value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input name="password" type="password" placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit" onClick={(e)=>submitForm(e)}>login</button>
            {/* <Link href="/signup"><a><h5>Don't have a account ?</h5></a></Link> */}
        </form>
      </div>
    )
  }
  
  export default Login
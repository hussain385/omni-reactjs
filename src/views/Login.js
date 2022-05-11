import '../App.css';
import { useRef } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../components/firebase/firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(emailRef.current.value);
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate('/')
      }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
      });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mainContainer">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email" ref={emailRef} id="email" placeholder="email" required />
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" id="password" placeholder="password" required />
        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default Login;

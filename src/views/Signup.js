import '../App.css';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../components/firebase/firebase';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const usernameRef = useRef()
  const confirmPasswordRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault()
    if (confirmPasswordRef.current.value === passwordRef.current.value) {
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then(() => {
          toast.success("Signed up successfully!!! Now please login with your credentials", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate('/login')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });

    } else {
      toast.error("Passwords didn't match", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }


  return (
    <div className="container">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="mainContainer">
        <h1 style={{ textAlign: "center" }}>SignUp</h1>
        <label htmlFor="username">Username</label>
        <input type="text" ref={usernameRef} id="username" placeholder="username" required />
        <label htmlFor="email">Email</label>
        <input type="email" ref={emailRef} id="email" placeholder="email" required />
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" id="password" placeholder="password" required />
        <label htmlFor="password">Confirm Password</label>
        <input ref={confirmPasswordRef} type="password" id="confirmPassword" placeholder="Confirm Password" required />
        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default Signup;

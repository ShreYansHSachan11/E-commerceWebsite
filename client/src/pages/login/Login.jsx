import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import googleLogo from "../../assets/img/google.svg";
import { useNavigate } from "react-router-dom";
import FirebaseLoginBtn from "../../components/chat/FirebaseLoginBtn";
import { auth, provider } from "../../../config";
import { signInWithPopup } from "firebase/auth";
import '../../App.css'

function Login() {
  const [user, loading] = useAuth();
  const [guestName, setGuestName] = useState("")
  const navigate = useNavigate();

  // Redirect in case of google login
  useEffect(() => {
    if (!loading && user) {
      navigate("/room", {state: {name: user.displayName}});
    }
  }, [user, loading]);
  
  const googleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/room", {state: {name: data.user.displayName}});
    });
  };

  const guestLogin = () => {
    if (guestName.length == 0) return
    navigate("/room", {state: {name: guestName + " - (Guest)"}})
  }

  return (
    <>
    
    <section className="flex flex-col text-white w-full min-h-screen justify-center items-center px-2 chatstyle">
      <div id="content" className="flex flex-col gap-12 items-center">
      <h1 class="chatheader">Chat Rooms</h1>
      
        <div className="flex flex-col items-center w-full max-w-sm bg-black bg-opacity-40 rounded-md py-4 px-6 gap-2">
          <p className="font-bold text-2xl">Enter a name (Guest)</p>
          <input id="name" type="text" onChange={(e) => setGuestName(e.target.value)} className="px-4 py-1.5 rounded-md bg-opacity-20 w-full bg-[#90e6cc] text-lg font-bold" />
          <button id="name" type="text" onClick={guestLogin} className="px-4 py-2 rounded-md  bg-[#6660ff] hover:bg-[#7c77ff] active:translate-y-[1px] font-bold text-center w-full" >Submit</button>
          <p className="font-bold text-xl">or</p>
          <FirebaseLoginBtn loginFn={googleLogin} img={googleLogo} />
        </div>
      </div>
    </section>
    </>
  );
}

export default Login;

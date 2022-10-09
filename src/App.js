

import './App.css';
import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
function App() {
  
  /*global google*/
  // const google = window.google;
  const [user, setUser] = useState({});
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token: " + response.credential);
    var userObject=jwt_decode(response.credential);
    console.log("Decoded JWT ID Token: " + JSON.stringify(userObject));
    console.log("User ID: " + userObject.email);
    setUser(userObject);
    document.getElementById("signInDiv").hidden=false;
  }
  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden=false;
    console.log("Sign out");
  }
  useEffect(() => {

  google.accounts.id.initialize({
    client_id:'434371939214-bf7o4laeimfghr5csg73ti4eitbsqble.apps.googleusercontent.com',
    callback:handleCallbackResponse
  });
  google.accounts.id.renderButton(
    document.getElementById('signInDiv'),
    {theme:'filled_blue',size:'large',text:'long'}
  );},[]);
  return (
    <div className="App">
      <header className="App-header">
        <div id="headerlogo">
        <img src="../Images/tictac.png" className="App-logo" alt="logo" />
        <img src="./iitmlogo.png" className="App-logo" alt="logo" />
</div>
      </header>
      <div id="login">
        <h2>Login</h2>
        
        <form>
          
          <input type="email" placeholder="Enter email" name="email" required id="inpf" /><br/>          
          <input type="password" placeholder="Enter password" name="psw" required id="inpf"/>
          <p><a href="">Forgot password?</a></p>
          <button type="submit" id="btn">Login</button>

        </form>
        <div id="signInDiv"></div>
        {Object.keys(user).length!=0 &&
        <button onClick={(e)=>handleSignOut(e)}>Sign Out</button>}
        {/* <button onClick={(e)=>handleSignOut(e)}>Sign Out</button> */}
      </div>
      {/* {user &&<div>{user.picture}</div>} */}
      <footer>
        <p>© 2021 CCW, IIT Madras</p>
        <div id="footer_right">
        <p id="foottext">Contact us</p>
        <p id="foottext">Support</p>
        <p id="foottext">blah</p></div>
      </footer>
     </div>
  );
}

export default App;

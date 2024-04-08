import React from 'react';
import '../style/welcomesty.css';
import image from '../style/logo-no-background.jpeg';
import {Link,useNavigate} from 'react-router-dom';


function WelcomePage() {

  const navigate = useNavigate();
  const timer=setTimeout(()=>{
    navigate("/home");
    window.location.reload()},15000)
  return (
    <div className="welcome-animation-container">
      {/* Image above WELCOME */}
      <img src={image} alt="Welcome Image" className="welcome-image" />

      <div className="animation-text">
        <span className="letter w" data-morse=".--">W</span>
        <span className="letter e" data-morse=".">E</span>
        <span className="letter l" data-morse=".-..">L</span>
        <span className="letter c" data-morse="-.-.">C</span>
        <span className="letter o" data-morse="---">O</span>
        <span className="letter m" data-morse="--">M</span>
        <span className="letter e1" data-morse=".">E</span>

        {/* Insert space here */}
        <span className="space"></span>
        <span className="to-text"></span>
      </div>

      {/* Sentence below WELCOME */}
      <p className="welcome-sentence">"Unlocking Communication Blink by Blink: Morse Made Visible"</p>
      

      <br />
    </div>
  );
}

export default WelcomePage;
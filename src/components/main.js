// App.js
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import WelcomePage from '../components/welcome';
import React, { useRef, useEffect, useState } from 'react';
import io from 'socket.io-client';
import {Link,useLocation} from 'react-router-dom';
import "../style/main.css"

const socket = io('http://localhost:3001');

function App() {
  const videoRef = useRef();
  const [timestamp, setTimestamp]=useState("");
  const [audio, setAudio]=useState("");

  useEffect(() => {
    const captureVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;

        setInterval(() => {
          const canvas = document.createElement('canvas');
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;
          canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
          const base64ImageData = canvas.toDataURL('image/jpeg');
          socket.emit('frame', base64ImageData);
        }, 100);
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    captureVideo();

    // Listen for timestamp event from server
    socket.on('timestamp', (data) => {
      console.log(data)
      if (data.timestamp=="<BS>")
      {
        setTimestamp(timestamp=>timestamp.slice(0,-1));
      }
      else
      {
        setTimestamp(timestamp=>timestamp+data.timestamp);
      }
    });

    return () => {
      socket.off('timestamp'); // Clean up event listener when component unmounts
    };
  }, []);

  // <div>
    
  //   <p>Frame recieved at: {timestamp}</p>
  //   <Link style={{textDecoration:"none"}}to={"/speech"}><p style={{fontWeight:"bolder"}}>Speech</p></Link>
  //   </div>
  //   (

  // speak = () => {
  //   const text = "Hello, this is a fixed string to be converted to audio.";
  //   setAudio(text)
  //   const speech = new SpeechSynthesisUtterance(text);
  //   speechSynthesis.speak(speech);
  // };

  
  
  const natraj=(()=>{
    const text = timestamp;
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
  })

  return (
      <div className="company-info-container">
        <div className="top-nav">
          <h1>BLINK-IT</h1>
        </div>
        <div className="content">
          <div className="image-container">
            {/* Image component goes here */}
            <video ref={videoRef} autoPlay style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
          </div>
          <center>
          <div className="small-div">
          </div>
          </center>
          <div className="description-container">
            <div className="description">
              {/* Long description text goes here */}
              
              {timestamp}
  
            </div>
            <br/>
            <button className='narr' onClick={natraj}>NARRATE</button>
          </div>
          
        </div>
        <div className="bottom-info">
          <p>A: .-    B: -...    C: -.-.    D: -..    E: .    F: ..-.   G: --.    H: ....    I: ..    J: .---    K: -.-    L: .-..   M: --    N: -.    O: ---    P: .--.</p>
          <p>Q: --.-  R: .-.,    S: ...     T: -      U ..-   V: ...-   W: .--,   X: -..-    Y: -.--  Z: --..    Bs: ......    Sp: .-.-</p>         </div>
      </div>
      )
}

export default App;
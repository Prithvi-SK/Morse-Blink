// App.js
import React from 'react';
// import "./welcomesty.css"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import WelcomePage from './components/welcome';
import Main from './components/main';

// import React, { useRef, useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3001');

function App() {
  // const videoRef = useRef();
  // const [timestamp, setTimestamp]=useState("");

  // useEffect(() => {
  //   const captureVideo = async () => {
  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //       videoRef.current.srcObject = stream;

  //       setInterval(() => {
  //         const canvas = document.createElement('canvas');
  //         canvas.width = videoRef.current.videoWidth;
  //         canvas.height = videoRef.current.videoHeight;
  //         canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
  //         const base64ImageData = canvas.toDataURL('image/jpeg');
  //         socket.emit('frame', base64ImageData);
  //       }, 100);
  //     } catch (error) {
  //       console.error('Error accessing webcam:', error);
  //     }
  //   };

  //   captureVideo();

  //   // Listen for timestamp event from server
  //   socket.on('timestamp', (data) => {
  //     setTimestamp(data.timestamp);
  //   });

  //   return () => {
  //     socket.off('timestamp'); // Clean up event listener when component unmounts
  //   };
  // }, []);


  // return (<div>
  //   <video ref={videoRef} autoPlay />
  //   <p>Frame recieved at: {timestamp}</p>
  //   </div>)
  return (<div className='ap'>
  <Router>
    <Routes>
        <Route path = "/" element = {<WelcomePage/>}/>
        <Route path = "/home" element = {<Main/>}></Route>
    </Routes>
  </Router>
</div>)
}

export default App;
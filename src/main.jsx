import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzv9laAdmDtYcJBe6xFC0moCOZgXMx9FA",
  authDomain: "react-bear.firebaseapp.com",
  projectId: "react-bear",
  storageBucket: "react-bear.appspot.com",
  messagingSenderId: "173037779621",
  appId: "1:173037779621:web:2803e38d8526b408096b4c",
  measurementId: "G-WK00L511V1"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/Home'
import {Servicios} from "./Servicios/Servicios.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home></Home>
    <Servicios />
  </React.StrictMode>,
)

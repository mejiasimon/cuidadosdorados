import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/Home'
import {Servicios} from "./Servicios/Servicios.jsx";
import { Footer } from "./assets/shared/Footer/Footer"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home></Home>
    <Servicios />
    <Footer />
  </React.StrictMode>,
)

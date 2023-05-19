import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/Home'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Servicios} from "./Servicios/Servicios.jsx";
import { Footer } from "./assets/shared/Footer/Footer"
import { Agenda } from './Agenda/Agenda';
import {Banner} from "./Banner/Banner.jsx";
import {Empleados} from "./Empleados/Empleados.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Banner />
        <Servicios />
        <Empleados />
        <Agenda />
        <Footer />
  </React.StrictMode>,
)

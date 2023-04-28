import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/Home'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Servicios} from "./Servicios/Servicios.jsx";
import { Agenda } from './Agenda/Agenda';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home></Home>
    <Servicios />
    <Agenda />
  </React.StrictMode>,
)

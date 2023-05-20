import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Rutas} from "./Routes/Rutas.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <BrowserRouter>
               <Rutas />
       </BrowserRouter>
  </React.StrictMode>,
)

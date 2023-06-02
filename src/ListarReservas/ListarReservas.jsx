import { useState,useEffect } from "react"
import { recibir } from "../Services/recibir"
import { Banner } from "../Banner/Banner"
import { Menu } from "../assets/shared/Menu/Menu"
import './ListarReservas.css'
export function Listareservas(){

    //configuro mis variables de estado
    //uso para almacenar los datos que lleguen del api
    const[reservas,setReserva]=useState(null)
    const[carga,setCarga]=useState(true)

    //programo el useeffect para garantizar que llamare
    //al servicio SOLO CUANDO CARGUE MI COMPONENTE
    useEffect(function(){},[
       recibir().then(function(respuesta){
        console.log(respuesta)
            setReserva(respuesta.reservas)
            setCarga(false)
        })
    ])


    //programo la interfaz para mostrar el mensaje de carga o para mostrar los datos
    //del servicio
    if(carga){
        return(
            <>
            <br /><br /><br />
            <h3>estoy cargando...</h3>
            </>
            
        )
       
    }else{

        return(
            <>
            <Banner/>
            <Menu/>
                <br /><br /><br />
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {
                            reservas.filter(reserva=>(reserva.tipo===5)).map(function(reserva){
                                return(
                                    <div className="col">
                                        <div className="card h-100 shadow carta">
                                            <h5>Cliente: {reserva.nombre}</h5>
                                            <p>Contacto: {reserva.telefono}</p>
                                            <p>Fecha: {reserva.dia}</p>
                                            <p>Hora: {reserva.hora}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )

    }

    
}
import { Menu } from "../assets/shared/Menu/Menu"
import { Footer } from "../assets/shared/Footer/Footer"
import {Banner} from "../Banner/Banner.jsx";
import {Servicios} from "../Servicios/Servicios.jsx";
import {Empleados} from "../Empleados/Empleados.jsx";
import {Agenda} from "../Agenda/Agenda.jsx";
import { Listareservas } from "../ListarReservas/ListarReservas";
export function Home(){

    return(
        <>
    
        <Servicios />
        <Empleados />
        <Agenda />
        </>
    )
}
import './Agenda.css'
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
export function Agenda() {

    const [nombre, setNombre] = useState(null);
    const [correo, setCorreo] = useState(null);
    const [telefono, setTelefono] = useState(null);
    const [fecha, setFecha] = useState(null);
    const [hora, setHora] = useState(null);
    const [errores, setErrores] = useState({})

    useEffect(function () {
        if (Object.keys(errores).length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Que mal',
                confirmButtonText: 'Regresar'
            })
            return
        }
        Swal.fire({
            icon: 'success',
            title: 'Tus datos han sido guardados',
            confirmButtonText: 'Regresar'
        })
    }, [errores])

    function validarFormulario(evento) {
        evento.preventDefault()
        let listaDeErrores = {}

        if (!nombre) {
            listaDeErrores.nombre = "El nombre está vacío"
        }

        if (!correo) {
            listaDeErrores.correo = "El correo está vacío"
        }

        if (!telefono) {
            listaDeErrores.telefono = "El telefono esta vacio"
        }

        if (!fecha) {
            listaDeErrores.fecha = "La fecha está vacía"
        }

        if (!hora) {
            listaDeErrores.hora = "Selecciona una hora"
        }
        setErrores(listaDeErrores)
    }


    return (

        <>
        <div className="form">
        <form onSubmit={validarFormulario}>
        <legend>ingreso</legend>
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-person-badge"></i>
                    </span>
                    <input type="text" className={`form-control ${errores.nombre? "is-invalid" : ""}`} placeholder="Nombre Paciente" onChange={(evento) => setNombre(evento.target.value)}/>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                   <i className="bi bi-envelope-at-fill"></i>
                    </span>
                    <input type="text" className={`form-control ${errores.correo? "is-invalid" : ""}`} placeholder="Correo Paciente" onChange={(evento) => {
                        setCorreo(evento.target.value)
                    }}/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-telephone-outbound-fill"></i>
                    </span>
                    <input type="tel" className={`form-control ${errores.telefono? "is-invalid" : ""}`} placeholder="Telefono Paciente" onChange={(evento) => {
                        setTelefono(evento.target.value)
                    }} />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-calendar-date-fill"></i>
                    </span>
                    <input type="date" className={`form-control ${errores.fecha? "is-invalid" : ""}`} placeholder="Fecha Paciente" onChange={(evento) => {
                        setFecha(evento.target.value)
                    }} />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-alarm-fill"></i>
                    </span>
                    <select className={`form-select ${errores.hora ? "is-invalid": ""}`} onChange={(event) => {
                        setHora(event.target.value)
                    }}  defaultValue={'DEFAULT'}>
                        <option value="DEFAULT">Hora:</option>
                        <option value="10:30AM">10:30 am</option>
                        <option value="11:30AM">11:30 am</option>
                        <option value="2:30PM">2:30 pm</option>
                    </select>
                </div>
            </div>
        </div>

        <button className="button-74" role="button">enviar</button>
        </form>
        </div>
        </>
    )

}
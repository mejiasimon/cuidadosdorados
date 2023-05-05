import './Empleados.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

export function Empleados() {

    let empleados = [
        {
            nombre: "Carlos Sanchez",
            edad: 45,
            cargo: "CEO",
            foto: "https://i.imgur.com/RDlxwsW.jpeg"
        },
        {
            nombre: "Federico Munera",
            edad: 38,
            cargo: "CT0",
            foto: "https://i.imgur.com/060pTd6.jpeg"

        },
        {
            nombre: "Rebeca Malagón",
            edad: 56,
            cargo: "CFO",
            foto: "https://i.imgur.com/Nl8SwBp.jpeg"

        },
        {
            nombre: "Maria Buitrago",
            edad: 25,
            cargo: "VP",
            foto: "https://i.imgur.com/aFZffNT.png"
        },
        {
            nombre: "Jimena Castro",
            edad: 37,
            cargo: "Consultora",
            foto: "https://i.imgur.com/ogtHhv7.jpeg"
        }
    ]

    let divEmpleados = empleados.map( (empleado, index)=>
        <div key={index} className={"card p-0 m-3"}>
            <img className={"card-img-top"} src={empleado.foto} alt={"Foto de " + empleado.nombre}/>
            <div className="card-body">
                <h3 className="card-title">{empleado.nombre}</h3>
                <h5 className={"card-subtitle"}>Cargo: {empleado.cargo}</h5>
                <p className={"card-text"}>Edad: {empleado.edad}</p>
            </div>
        </div>
    )

    return (
        <>
            <div className="row col-10 mx-auto justify-content-center text-center">
                <h1>Nuestra Familia</h1>
                {divEmpleados}
            </div>
        </>
    )
}
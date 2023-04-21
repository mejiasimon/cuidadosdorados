import React from "react";
import './Servicios.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


export function Servicios() {
    return (
        <>
            <div className="row justify-content-center my-5">
                <div className="card col-lg-3 mx-2 px-0">
                    <img className="card-img-top img-fluid w-100" src="https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/acompa%C3%B1amiento.jpg?alt=media&token=439c6103-e1ae-4f5e-95d3-c27c22caa9b4" alt="Acompañamiento"/>
                    <div className="card-body">
                        <h3 className="card-title">Acompañamiento a Citas y Trámites</h3>
                        <p className="card-text"> Si por razones laborales no puedes acompañar a tu ser querido en sus diligencias, uno de nuestros colaboradores estará para acompañarlos</p>
                    </div>
                </div>
                <div className="card col-12 col-lg-3 mx-2 px-1">
                    <img className="card-img-top img-fluid w-100" src="https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/cuidado_personal.jfif?alt=media&token=5b1e181e-f618-4944-aaee-b257cb69a048" alt="Cuidado personal"/>
                    <div className="card-body">
                        <h3 className="card-title">Cuidado Personal</h3>
                        <p className="card-text"> La persona encargada de ti, te brindara un aseo personal debido a tus necesidades, logrando en ti una comodidad y seguridad ante este servicio.</p>
                    </div>
                </div>
                <div className="card col-12 col-lg-3 mx-2 px-0">
                    <img className="card-img-top img-fluid w-100" src="https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/ejercicios_aerobicos.webp?alt=media&token=cc6e0db5-c6a3-478e-9194-19efba5fc581" alt="Ejercicios aerobicos"/>
                    <div className="card-body">
                        <h3 className={"card-title"}>Ejercicios Aerobicos</h3>
                        <p className={"card-text"}>Las personas mayores usualmente requieren alternativas para mantener su salud, por ello en el centro de cuidados dorados brindamos el servicio para realizar actividades físicas, las cuales se realizan al aire libre para brindar un espacio agradable a nuestros clientes</p>
                    </div>
                </div>
            </div>
        </>
    )
}
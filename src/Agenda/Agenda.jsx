import './Agenda.css'
export function Agenda() {

    return (

        <>
<div className="form">
<form>
<legend>ingreso</legend>
<div className="row">
    <div className="col-12 col-md-6">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-person-badge"></i>
            </span>
            <input type="text" className="form-control" placeholder="Nombre Paciente" />
        </div>
    </div>
    <div className="col-12 col-md-6">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
           <i className="bi bi-envelope-at-fill"></i>
            </span>
            <input type="text" className="form-control" placeholder="Correo Paciente" />
        </div>
    </div>
</div>
<div className="row">
    <div className="col-12">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i class="bi bi-telephone-outbound-fill"></i>
            </span>
            <input type="text" className="form-control" placeholder="Telefono Paciente" />
        </div>
    </div>
</div>
<div className="row">
    <div className="col-12 col-md-6">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-calendar-date-fill"></i>
            </span>
            <input type="date" className="form-control" placeholder="Fecha Paciente" />
        </div>
    </div>
    <div className="col-12 col-md-6">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-alarm-fill"></i>
            </span>
            <select className="form-select"  defaultValue={'DEFAULT'}>
                <option value="DEFAULT">Hora:</option>
                <option value="1">10:30 am</option>
                <option value="2">11:30 am</option>
                <option value="3">2:30 pm</option>
            </select>
        </div>
    </div>
</div>

<button class="button-74" role="button">enviar</button>



</form>
</div>
          


        </>
    )

}
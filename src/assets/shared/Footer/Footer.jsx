import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css"
export function Footer() {
  return (
    <>
      <div className="footer d-flex justify-content-between p-5 bg-dark text-light" >
        <div>
          <h2>Desarrolladores</h2>
          <p>
            <ul>
                <li> Simón Mejía</li>
                <li>Andrés Saldarriaga</li>
                <li>Juan David Escobar</li>
                <li> Yaritza
            Parra</li>
            <li>Alexis Roman</li>
            </ul>
          </p>
        </div>
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/cuidados-dorados.appspot.com/o/Pink%20Minimalist%20Home%20Care%20Services%20Logo.png?alt=media&token=db6e554b-0fcb-46df-a818-92f5f71714bb" alt="" height="350px"/>
        </div>
        <div>
          <h2> GitHub del Equipo</h2>
          <a className="git" href="https://github.com/cuidadosdorados">Click Aquí</a>
        </div>
      </div>
    </>
  );
}

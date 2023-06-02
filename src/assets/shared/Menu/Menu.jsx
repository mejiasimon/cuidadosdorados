import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Menu.css'
import WOW from 'wow.js'
import 'animate.css'
export function Menu(){
  const wow=new WOW(function(){
    wow.init()
        },[])
        return(
          <>
	<div>
  <a href="https://front.codes/" className="logo" target="_blank">
    <img src="https://firebasestorage.googleapis.com/v0/b/cuidados-dorados.appspot.com/o/Pink%20Minimalist%20Home%20Care%20Services%20Logo.png?alt=media&token=db6e554b-0fcb-46df-a818-92f5f71714bb" alt />
  </a>
  <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
  <label htmlFor="menu-icon" />
  <nav className="nav"> 		
    <ul className="pt-5">
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Personal</a></li>
      <li><a href="#">Agendar Cita</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <div className="section-center">
    <h1 className="mb-0">Cuidados dorados</h1>
  </div>
</div>

          </>
      )
}

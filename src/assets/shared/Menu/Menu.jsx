import './Menu.css'
export function Menu(){
return(
    <>
 <div className="navbar navbar-inverse navbar-fixed-top opaque-navbar">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNav">
        <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars" />
      </button>
      <a className="navbar-brand page-scroll" href="#">Manas</a> 
    </div>
    <div className="collapse navbar-collapse" id="myNav">
      <ul className=" nav navbar-nav pull-right">
        <li><a href="#about" className="page-scroll">About</a></li>
        <li><a href="#portfolio" className="page-scroll">Portfolio</a></li>
        <li><a href="#contact" className="page-scroll">Contact</a></li>
      </ul>
    </div>
  </div>
</div>

    </>
)


}
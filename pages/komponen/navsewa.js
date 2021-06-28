export default function navsewa(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container"> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar12">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar12"> <a className="navbar-brand d-none d-md-block" href="#">
              <i className="fa d-inline fa-lg fa-circle"></i>
           <a href=""><b>LOGO</b></a>
            </a>
            <ul className="navbar-nav mx-auto">
            <li className="nav-item"> <a href="/halamanawal"><a className="nav-link">Home</a></a> </li>
              <li className="nav-item"> <a className="nav-link" href="#">Bantuan</a> </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item"><a href="masuk"><a className="nav-link">Keluar</a></a> </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

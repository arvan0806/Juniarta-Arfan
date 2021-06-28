//@ts-check
import Link from 'next/link'

export default function Haladmin() {
    return (
<div>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css"/>
  <link rel="stylesheet" href="https://static.pingendo.com/bootstrap/bootstrap-4.3.1.css"/>

  <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
    <div className="container"> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar12">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar12"> <a className="navbar-brand d-none d-md-block" href="#">
          <i className="fa d-inline fa-lg fa-circle"></i>
          <Link href="/halamanawal"><b>LOGO</b></Link>
        </a>
        <ul className="navbar-nav mx-auto">
        <li className="nav-item"> <Link href="/halamanawal"><a className="nav-link">Home</a></Link> </li>
          <li className="nav-item"> <a className="nav-link" href="#">Fitur</a> </li>
          <li className="nav-item"> <a className="nav-link" href="#">Bantuan</a> </li>
          <li className="nav-item"> <a className="nav-link" href="#">Masalah</a> </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item"><Link href="/masuk"><a className="nav-link">Masuk</a></Link></li>
          <li className="nav-item"> <Link href="/daftar"><a className="nav-link text-primary">Daftar</a></Link></li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div className="py-5 text-center text-white align-items-center d-flex">
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1 className="display-3 mb-4">Rental PS-KU</h1>
          <p className="lead mb-5">Untuk memudahkan para user dalam mencari PS pilihan, daftarkan rentalan anda dalam situs Rental PS-KU ini dengan cara klik daftar atau masuk akun anda di pojok kanan atas.</p> <a href="#" className="btn btn-lg btn-primary mx-1">Hubungi Layanan</a>
        </div>
      </div>
    </div>
  </div>
  <div className="py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center d-md-flex align-items-center"> <i className="d-block fa fa-stop-circle fa-2x mr-md-5 text-primary"></i>
          <ul className="nav mx-md-auto d-flex justify-content-center">
            <li className="nav-item"><Link href="/halamanawal"><a className="nav-link active">Home</a></Link></li>
            <li className="nav-item"> <a className="nav-link" href="#">Features</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">Pricing</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">About</a> </li>
          </ul>
          <div className="row">
            <div className="col-md-12 d-flex align-items-center justify-content-md-between justify-content-center my-2"> <a href="#">
                <i className="d-block fa fa-facebook-official text-muted fa-lg mx-2"></i>
              </a> <a href="#">
                <i className="d-block fa fa-instagram text-muted fa-lg mx-2"></i>
              </a> <a href="#">
                <i className="d-block fa fa-twitter text-muted fa-lg ml-2"></i>
              </a> </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center text-white">
          <p className="mt-2 mb-0">© 2020-2021 Playstation. All rights reserved</p>
        </div>
      </div>
    </div>
  </div>


</div>
)
}
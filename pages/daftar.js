//@ts-check
import Link from 'next/link'
import Foter from './komponen/foter'
import Navv from './komponen/navdaftar'
export default function Daftar() {
    return (
<div>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css"/>
    <link rel="stylesheet" href="https://static.pingendo.com/bootstrap/bootstrap-4.3.1.css"/>
  <div>
    <Navv/>
</div>
  
  <div className="py-5 text-center"/>
    <div className="container">
      <div className="row">
        <div className="mx-auto col-md-6 col-10 bg-white p-5">
          <h1 className="mb-4">Daftar</h1>
          
            <div className="form-group"> <input type="email" className="form-control" placeholder="Enter email" id="form9"/><br></br>
            <div className="form-group mb-3"> <input type="password" className="form-control" placeholder="Password" id="form10"/>
                <small className="form-text text-muted text-right"/><br></br>
             <Link href="/sewa"><button type="submit" className="btn btn-primary">Lanjutkan</button></Link>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="py-5 text-center text-white">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mb-3">Buat akun anda dan kembangkan</h1>
          <p>Bangkitkan semangat anda dengan menggunakan salah satu situs platfrom ternama Rental PS-Ku untuk menjadikan<br></br>anda semakin mudah dalam memilih PS kesukaan anda.</p>
        </div>
      </div>
    </div>
 </div>
    <Foter/>
 </div>
    )
}
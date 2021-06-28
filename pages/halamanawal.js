//@ts-check
import Link from 'next/link'
import Foter from './komponen/foter'
export default function Halamanawal() {
    return (
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css"/>
  <link rel="stylesheet" href="https://static.pingendo.com/bootstrap/bootstrap-4.3.1.css"/>


    <div className="py-5 text-center text-white h-100 align-items-center d-flex" >
        <div className="container py-5">
        <div className="row">
            <div className="mx-auto col-lg-8 col-md-10">
            <h1 className="display-3 mb-4">Selamat Datang Bos!</h1>
            <p className="lead mb-5">Silahkan Anda Lanjutkan sebagai</p>
            <Link href="/haladmin"><a className="btn btn-lg mx-1 btn-outline-primary">Admin</a></Link>
            <Link href="/haluser"><a className="btn btn-lg mx-1 btn-outline-primary">User</a></Link>
            </div>
        </div>
        </div>
    </div>
    <Foter/>
</div>

    )
}
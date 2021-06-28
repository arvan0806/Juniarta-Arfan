import Iss from './propdata/propdata'
export default function tabel (){
    const datgam =[{urlgam : 'https://images.tokopedia.net/img/cache/200-square/product-1/2018/9/5/21870440/21870440_f4e96ce8-085c-4ec0-9fee-b421a4e8c3f7_435_475.jpg.webp?ect=4g',
                   nama :'PS-2' , 
                    ktg : 'Rp 30.000/24-Jam (Khusus PES)'},
                    {urlgam : 'https://images.tokopedia.net/img/cache/200-square/product-1/2020/7/10/2644987/2644987_e2f801aa-e508-47b2-b15a-ffdd118267cf_778_778.jpg.webp?ect=4g',
                    nama :'PS-2' , 
                     ktg : 'Rp 40.000/24-Jam (Full Game)'},
                     {urlgam : 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/12/24/0ac4ba78-333e-44cc-b81c-d6641d055eb4.jpg.webp?ect=4g',
                     nama :'PS3' , 
                      ktg : 'Rp 50.000/24-Jam (Khusus PES)'},
                      {urlgam : 'https://images.tokopedia.net/img/cache/200-square/product-1/2018/4/4/30339409/30339409_c871f28f-2def-4e1a-97aa-fb9bc217698e_1000_724.jpg.webp?ect=4g',
                      nama :'PS-3' , 
                       ktg : 'Rp 60.000/24-Jam (Full Game)'},
                       {urlgam : 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/11/4/792832d0-092d-492d-b940-6afb519728fc.jpg.webp?ect=3g',
                       nama :'PS-4' , 
                        ktg : 'Rp 75.000/12-Jam (PES, GTA, PUBG)'},
                        {urlgam : 'https://images.tokopedia.net/img/cache/200-square/product-1/2020/6/10/867509050/867509050_902f98a0-85ae-45dd-a074-ed1a1c6d8546_450_450.jpg.webp?ect=3g',
                        nama :'PS-4' , 
                         ktg : 'Rp 100.000/24-Jam (Khusus PES)'},
                         {urlgam : 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/7/6ee69bc0-11c4-4948-a1d9-95914c8cd2d4.jpg.webp?ect=4g',
                         nama :'PS-5' , 
                          ktg : 'Rp 125.000/24-Jam (Tanpa TV)'},
                          {urlgam : 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/23/919b3780-efd3-4928-bb3a-cd6f2ca2b309.jpg.webp?ect=4g',
                          nama :'PS-5' , 
                           ktg : 'Rp 150.000/24-Jam (+TV)'},
                           {urlgam : 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/29/9ea7a679-fba3-4d90-ab86-ee8e722b5aab.jpg.webp?ect=4g',
                           nama :'STIK PS-2' , 
                            ktg : 'Rp 10.000/24-Jam (Non Wirelless)'},
                            {urlgam : 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/4/22/1f10b1c8-b560-48f2-b0fe-3aead009cdab.jpg.webp?ect=4g',
                            nama :'STIK PS-3' , 
                             ktg : 'RP 15.000/24-Jam (Wirelless)'},
                             {urlgam : 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/1/7/21860c84-3e7d-473e-863b-b801cc4837d8.jpg.webp?ect=3g',
                             nama :'STIK PS-4' , 
                              ktg : 'RP 15.000/24-Jam (Wirelless)'},
                              {urlgam : 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/12/10/fd2479db-6204-4f91-b1b7-e237e1340cdf.jpg.webp?ect=4g',
                              nama :'STIK PS-5' , 
                               ktg : 'RP 25.000/24-Jam (Wirelless + Baru)'},]

    return(
      
<div className="container py-4">

  
  <div className="row">
  {datgam.map((card,index) =>
  <div className="col-2 -lg-4 py-4" >
    <Iss urlgam={card.urlgam} 
    nama={card.nama}
        ktg={card.ktg}/>
        </div>)
  }
  </div>
 
  </div>


    )
}

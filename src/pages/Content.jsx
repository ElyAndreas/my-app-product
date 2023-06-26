import React from 'react'
import gambar1 from '../assets/image-1.png'


const Content = () => {
  
  const isicontent = {

    id: 1,
    title: "Persembahan Istimewa! Bersama kami",
    content: "Dapatkan diskon luar biasa hingga 20% untuk produk pilihan kami. Tingkatkan gaya hidupmu dengan koleksi terbaru dan hemat lebih banyak! Segera kunjungi toko kami sebelum minggu ini berakhir. Jangan lewatkan kesempatan emas ini untuk berbelanja cerdas!"

}

  return (
    <div className="flex h-96 bg-sky-900 py-8 px-32">
        <div className="flex w-full h-full flex-col space-y-7">
            <p className="text-5xl text-white">{isicontent.title}</p>
            <p className="text-sm text-white text-ellipsis">{isicontent.content}</p>
        </div>
        <div className="w-full h-full justify-center hidden lg:flex">
            <img className="h-96" src={gambar1} alt="img"/>
        </div>
    </div>
  )
}

export default Content
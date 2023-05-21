import React from 'react'
import CourierHeader from '../../components/CourierHeader'

function ActiveOrders() {
  return (
    <>
    <div className="w-[80%] mx-auto">
      <CourierHeader />
      <div className='bg-primary p-4 flex flex-col text-white rounded-lg mt-10 gap-5'>
        <h1 className='font-bold text-3xl'>Kabul Edilen Siparişlerim</h1>
        <hr />
        <div className="flex flex-col border border-white p-3 rounded-lg">
          <div className='flex md:flex-row flex-col justify-between gap-5'>
              <div className="flex flex-col gap-2 basis-1/3">
                <p>Sipariş ID: 91347</p>
                <p><span className='text-secondary'>Gönderi İçeriği:</span> Hediye</p>
                <p><span className='text-secondary'>Telefon No:</span> 0536 254 1817</p>
                <p><span className='text-secondary'>Ek İrtibat No:</span> 0539 495 1975</p>
              </div>
              <div className='basis-1/3'>
                <p><span className='text-secondary'>Çıkış Noktası:</span> Hamidiye Mah. Serkan Sk. No:28 D:4 Çekmeköy / İstanbul</p>
              </div>
              <div className='basis-1/3'>
                <p><span className='text-secondary'>Varış Noktası:</span> Çakmak Mah. Gençtürk Sk. No:36 D:2 Ümraniye / İstanbul</p>
              </div>
          </div>
          <button className='bg-secondary text-white px-8 py-2 w-fit mt-5 rounded-lg ml-auto'>Teslim Edildi</button>
        </div>
        <div className="flex flex-col border border-white p-3 rounded-lg">
          <div className='flex md:flex-row flex-col justify-between gap-5'>
              <div className="flex flex-col gap-2 basis-1/3">
                <p>Sipariş ID: 91347</p>
                <p><span className='text-secondary'>Gönderi İçeriği:</span> Hediye</p>
                <p><span className='text-secondary'>Telefon No:</span> 0536 254 1817</p>
                <p><span className='text-secondary'>Ek İrtibat No:</span> 0539 495 1975</p>
              </div>
              <div className='basis-1/3'>
                <p><span className='text-secondary'>Çıkış Noktası:</span> Hamidiye Mah. Serkan Sk. No:28 D:4 Çekmeköy / İstanbul</p>
              </div>
              <div className='basis-1/3'>
                <p><span className='text-secondary'>Varış Noktası:</span> Çakmak Mah. Gençtürk Sk. No:36 D:2 Ümraniye / İstanbul</p>
              </div>
          </div>
          <button className='bg-secondary text-white px-8 py-2 w-fit mt-5 rounded-lg ml-auto'>Teslim Edildi</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default ActiveOrders
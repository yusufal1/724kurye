import React from 'react'
import CourierHeader from '../../components/CourierHeader'
import Modal from "react-modal";
import DeliveryImg from '../../assets/undraw_delivery_address_re_cjca.svg'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function OrderRequests() {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
    <div className="w-[80%] mx-auto">
      <CourierHeader />
      <div className='bg-secondary p-4 flex flex-col text-white rounded-lg mt-10 gap-5'>
        <h1 className='font-bold text-3xl'>Sipariş İstekleri</h1>
        <hr />
        <div className="flex flex-col border border-white p-3 rounded-lg">
          <div className='flex md:flex-row flex-col justify-between gap-5'>
              <div className="flex flex-col gap-2 basis-1/3">
                <p><span className='text-primary'>Gönderi İçeriği:</span> Hediye</p>
                <p><span className='text-primary'>Telefon No:</span> 0536 254 1817</p>
                <p><span className='text-primary'>Ek İrtibat No:</span> 0539 495 1975</p>
              </div>
              <div className='basis-1/3'>
                <p><span className='text-primary'>Çıkış Noktası:</span> Hamidiye Mah. Serkan Sk. No:28 D:4 Çekmeköy / İstanbul</p>
              </div>
              <div className='basis-1/3'>
                <p><span className='text-primary'>Varış Noktası:</span> Çakmak Mah. Gençtürk Sk. No:36 D:2 Ümraniye / İstanbul</p>
              </div>
          </div>
          <button onClick={openModal} className='bg-primary text-white px-8 py-2 w-fit mt-5 rounded-lg ml-auto'>Kabul Et</button>
        </div>
        <div className="flex flex-col border border-white p-3 rounded-lg">
          <div className='flex md:flex-row flex-col justify-between gap-5'>
              <div className="flex flex-col gap-2 basis-1/3">
                <p><span className='text-primary'>Gönderi İçeriği:</span> Hediye</p>
                <p><span className='text-primary'>Telefon No:</span> 0536 254 1817</p>
                <p><span className='text-primary'>Ek İrtibat No:</span> 0539 495 1975</p>
              </div>
              <div className='basis-1/3'>
                <p><span className='text-primary'>Çıkış Noktası:</span> Hamidiye Mah. Serkan Sk. No:28 D:4 Çekmeköy / İstanbul</p>
              </div>
              <div className='basis-1/3'>
                <p><span className='text-primary'>Varış Noktası:</span> Çakmak Mah. Gençtürk Sk. No:36 D:2 Ümraniye / İstanbul</p>
              </div>
          </div>
          <button className='bg-primary text-white px-8 py-2 w-fit mt-5 rounded-lg ml-auto'>Kabul Et</button>
        </div>
        <div className="flex flex-col border border-white p-3 rounded-lg">
          <div className='flex md:flex-row flex-col justify-between gap-5'>
              <div className="flex flex-col gap-2 basis-1/3">
                <p><span className='text-primary'>Gönderi İçeriği:</span> Hediye</p>
                <p><span className='text-primary'>Telefon No:</span> 0536 254 1817</p>
                <p><span className='text-primary'>Ek İrtibat No:</span> 0539 495 1975</p>
              </div>
              <div className='basis-1/3'>
                <p><span className='text-primary'>Çıkış Noktası:</span> Hamidiye Mah. Serkan Sk. No:28 D:4 Çekmeköy / İstanbul</p>
              </div>
              <div className='basis-1/3'>
                <p><span className='text-primary'>Varış Noktası:</span> Çakmak Mah. Gençtürk Sk. No:36 D:2 Ümraniye / İstanbul</p>
              </div>
          </div>
          <button className='bg-primary text-white px-8 py-2 w-fit mt-5 rounded-lg ml-auto'>Kabul Et</button>
        </div>
      </div>
    </div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col sm:w-[500px] w-[320px]">
          <button onClick={closeModal} className='font-bold ml-auto'>X</button>
          <img className='w-[50%] mx-auto' src={DeliveryImg} alt="" />
          <h1 className='text-primary font-bold text-center text-3xl mt-5'>Sipariş Kabul Edildi</h1>
          <a className='mt-10 mx-auto underline text-secondary' href="/aktif-siparisler">Aktif siparişlere gözat</a>
        </div>
      </Modal>
  </>
  )
}

export default OrderRequests
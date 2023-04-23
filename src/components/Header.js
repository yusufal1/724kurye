import React from 'react'
import brandlogo from '../assets/brandlogo.png';

function Header() {
    return (
      <div className='flex flex-row justify-between items-center font-sans'>
          <div>
            <img className='w-32' src={brandlogo} alt='brandlogo'/>
          </div>
          <div className='flex-grow flex justify-evenly'>
            <a href="/">Ana Sayfa</a>
            <a href="/">Hakkımızda</a>
            <a href="/">Kurye Ol</a>
            <a href="/">İletişim</a>
          </div>
          <div className='flex-grow flex justify-evenly'>
            <button className='bg-primary text-white rounded-lg px-2 py-1'>Kurye Çağır</button>
            <button className='bg-primary text-white rounded-lg px-2 py-1'>Giriş Yap</button>
          </div>
      </div>
    )
  }
  
  export default Header;

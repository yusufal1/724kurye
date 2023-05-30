import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin-in.svg";
import twitter from "../assets/twitter.svg";

function Footer() {
  return (
    <div>
      <div className="flex flex-col py-5 md:flex-row justify-around bg-primary items-center mt-10">
        <div>
        <div className="flex flex-row justify-between mt-8 mb-5 space-x-5">
  <a href="/" className="group">
    <img src={instagram} alt="instagram" className="w-10 invert icon group-hover:scale-110" />
  </a>
  <a href="/" className="group">
    <img src={facebook} alt="facebook" className="w-10 invert icon group-hover:scale-110" />
  </a>
  <a href="/" className="group">
    <img src={linkedin} alt="linkedin" className="w-10 invert icon group-hover:scale-110" />
  </a>
  <a href="/" className="group">
    <img src={twitter} alt="twitter" className="w-10 invert icon group-hover:scale-110" />
  </a>
</div>

        </div>

        <div className="flex flex-col items-center text-white">
  <a href="/cerez-politikasi" className="py-2 transition-all duration-300 transform hover:scale-110 hover:opacity-75">
    Çerez Politikası
  </a>
  <a href="/gizlilik-politikasi" className="py-2 transition-all duration-300 transform hover:scale-110 hover:opacity-75">
    Gizlilik Politikası
  </a>
  <a href="/hakkimizda" className="py-2 transition-all duration-300 transform hover:scale-110 hover:opacity-75">
    Hakkımızda
  </a>
</div>

<div className="flex flex-col items-center text-white">
  <a href="/sikca-sorulan-sorular" className="py-2 transition-all duration-300 transform hover:scale-110 hover:opacity-75">
    Sıkça Sorulan Sorular
  </a>
  <a href="/iletisim" className="py-2 transition-all duration-300 transform hover:scale-110 hover:opacity-75">
    İletişim
  </a>
  <a href="/kurye-ol" className="py-2 transition-all duration-300 transform hover:scale-110 hover:opacity-75">
    Kurye Ol
  </a>
</div>


      </div>
      <hr />
      <p className="text-white bg-primary text-center py-5">© 2023 <a href="/" className="underline">7/24 Kurye</a> Tüm Hakları Saklıdır</p>
    </div>
  );
}

export default Footer;

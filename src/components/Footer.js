import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin-in.svg";
import twitter from "../assets/twitter.svg";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col py-5 md:flex-row justify-around bg-primary items-center">
        <div>
          <div className="flex flex-row justify-between mt-8 mb-5 space-x-5">
            <a href="/">
              <img src={instagram} alt="instagram" className="w-10 invert" />
            </a>
            <a href="/">
              <img src={facebook} alt="facebook" className="w-10 invert" />
            </a>
            <a href="/">
              <img src={linkedin} alt="linkedin" className="w-10 invert" />
            </a>
            <a href="/">
              <img src={twitter} alt="twitter" className="w-10 invert" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center text-white">
          <a href="/" className="py-2">
            Fiyatlandırma
          </a>
          <a href="/" className="py-2">
            Gizlilik Politikası
          </a>
          <a href="/" className="py-2">
            Hakkımızda
          </a>
        </div>

        <div className="flex flex-col items-center text-white">
          <a href="/" className="py-2">
            Yardım Merkezi
          </a>
          <a href="/" className="py-2">
            İletişim
          </a>
          <a href="/" className="py-2">
            Kurye Ol
          </a>
        </div>

      </div>
      <hr />
      <p className="text-white bg-primary text-center py-5">© 2023 <a href="Homepage" className="underline">7/24 Kurye</a> Tüm Hakları Saklıdır</p>
    </div>
  );
}

export default Footer;

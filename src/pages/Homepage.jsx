import React from "react";
import Header from "../components/Header";
import arrowRight from "../assets/arrow-right-solid.svg";
import img1 from "../assets/resim1.jpg";
import payImg2 from '../assets/pay2.svg'
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
    <div className="w-[80%] mx-auto">
      <Header />
      <div className="flex flex-col md:flex-row gap-5 justify-between items-start md:items-center mt-20">
        <div className="w-full md:w-2/5 mb-6 md:mb-0 md:mr-8">
          <p className="font-semibold text-3xl md:text-5xl">
            KAYIT OL VE HEMEN KULLANMAYA BAŞLA
          </p>
          <a
            href="/giris-yap"
            className="flex items-center bg-primary px-4 py-2 rounded-lg text-white font-semibold w-fit mt-4 md:mt-8"
          >
            Hemen Başlayın
            <img src={arrowRight} alt="" className="ml-2 w-5 filter invert" />
          </a>
        </div>
        <div className="flex-shrink-0">
          <img
            src={img1}
            alt=""
            className="w-full md:h-auto md:max-h-96 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse gap-5 md:flex-row justify-between items-start md:items-center mt-20">
        <div className="flex-shrink-0">
          <img
            src={img1}
            alt=""
            className="w-full md:h-auto md:max-h-96 object-contain"
          />
        </div>
        <div className="w-full md:w-2/5 mb-6 md:mb-0 md:mr-8">
          <p className="font-semibold text-3xl md:text-5xl">
            BİRKAÇ SAAT İÇİNDE TESLİMATINIZI GERÇEKLEŞTİRİN
          </p>
        </div>
      </div>

      <div className="bg-primary rounded-lg flex flex-col md:flex-row items-center justify-around my-20 p-5">
        <div className="md:w-1/2 md:pr-10">
          <p className="text-white text-3xl md:text-5xl">
            Bizimle çalışmak ister misiniz?
          </p>
          <p className="text-white mt-5 md:w-4/6 md:mt-10">
            Birkaç tuşla hemen kuryeliğe başla
          </p>
        </div>
        <div className="md:w-1/4 md:ml-10 mt-5 md:mt-0">
          <a href="/kurye-ol" className="bg-white rounded-lg px-3 py-2 block text-center">
            Buradan Başvurabilirsiniz
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-20">
        <div className="w-full md:w-2/5 mb-6 md:mb-0 md:mr-8">
          <p className="font-semibold text-3xl md:text-5xl">
            Kolay Ödeme
          </p>
          <p className="flex items-center mt-4 md:mt-8">
            Ödemeni en başta yap, sürprizlerle karşılaşma
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={payImg2}
            alt=""
            className="w-full md:h-auto md:max-h-96 object-contain"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Homepage;

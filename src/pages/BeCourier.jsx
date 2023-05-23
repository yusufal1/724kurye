import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClockIcon from "../assets/clock-regular.svg";
import TurkishLiraIcon from "../assets/turkish-lira-sign-solid.svg";
import LocationIcon from "../assets/location-dot-solid (1).svg";
import MotoIcon from "../assets/moto.svg";
import CarIcon from "../assets/deliverycar.svg";

function BeCourier() {
  return (
    <>
      <div className="w-[80%] mx-auto min-h-screen">
        <Header />
        <div className="flex flex-row justify-between md:mt-28 mt-10 flex-wrap gap-3">
          <div className="flex flex-col w-[348.81px] bg-secondary p-5 px-10 text-white rounded-xl mx-auto">
            <img
              className="w-auto h-[96px] invert mx-auto"
              src={ClockIcon}
              alt=""
            />
            <span className="text-3xl text-center mt-10 font-bold">
              ESNEK ZAMAN
            </span>
            <div className="flex flex-col my-14">
              <span className="text-base text-center">
                Zamanını kendin belirle,
              </span>
              <span className="text-base text-center">istediğin zaman çalış.</span>
            </div>
          </div>
          <div className="flex flex-col bg-secondary p-5 px-10 text-white rounded-xl mx-auto">
            <img
              className="w-auto h-[96px] invert mx-auto"
              src={TurkishLiraIcon}
              alt=""
            />
            <span className="text-3xl text-center mt-10 font-bold">
              GELİR YARAT
            </span>
            <div className="flex flex-col my-14">
              <span className="text-base text-center">
                Kendi gelirini kendin yarat.
              </span>
              <span className="text-base text-center">Çalıştıkça kazan.</span>
            </div>
          </div>
          <div className="flex flex-col bg-secondary p-5 px-10 text-white rounded-xl mx-auto">
            <img
              className="w-auto h-[96px] invert mx-auto"
              src={LocationIcon}
              alt=""
            />
            <span className="text-3xl text-center mt-10 font-bold">
              ÖZGÜR ÇALIŞ
            </span>
            <div className="flex flex-col my-14">
              <span className="text-base text-center">
                İstediğin konumdan istediğin
              </span>
              <span className="text-base text-center">
                saatte özgürce çalış.
              </span>
            </div>
          </div>
        </div>
        <div className="md:mt-40 mt-16 flex flex-col">
          <h1 className="font-bold lg:text-6xl md:text-4xl text-2xl text-center">
            İSTERSEN MOTOSİKLET, İSTERSEN ARABA İLE ÇALIŞ
          </h1>
          <div className="flex md:flex-row flex-col justify-between md:gap-5 gap-10 mt-10">
            <img className="md:w-[40%] w-[70%] mx-auto" src={CarIcon} alt="" />
            <img className="md:w-[40%] w-[70%] mx-auto" src={MotoIcon} alt="" />
          </div>
        </div>
        <h1 className="font-bold lg:text-6xl md:text-4xl text-2xl text-center mt-20">
          Kurye Ol
        </h1>
        <div className="flex md:flex-row flex-col mt-10 justify-between gap-3">
          <div className="flex flex-col gap-8 md:w-[45%]">
            <input
              className="bg-[#D9D9D9] px-4 py-2 rounded-lg border-none focus:outline-none"
              placeholder="Ad"
              type="text"
            />
            <input
              className="bg-[#D9D9D9] px-4 py-2 rounded-lg border-none focus:outline-none"
              placeholder="Soyad"
              type="text"
            />
            <input
              className="bg-[#D9D9D9] px-4 py-2 rounded-lg border-none focus:outline-none"
              placeholder="TC No"
              type="text"
            />
            <select name="region" id="region" className="bg-[#D9D9D9] text-[#9CA3AF] px-4 py-2 rounded-lg border-none focus:outline-none">
                <option value="1" disabled selected>Bölge</option>
                <option value="2">İstanbul</option>
                <option value="3">Ankara</option>
                <option value="4">İzmir</option>
            </select>
            <input
              className="bg-[#D9D9D9] px-4 py-2 rounded-lg border-none focus:outline-none"
              placeholder="E-mail"
              type="text"
            />
            <input
              className="bg-[#D9D9D9] px-4 py-2 rounded-lg border-none focus:outline-none"
              placeholder="IBAN No"
              type="text"
            />
          </div>
          <div className="flex flex-col md:gap-3 gap-8 md:w-[45%] md:mt-[-19px]">
            <div>
                <label class="block text-sm font-medium" for="file_input">Sürücü Belgesi</label>
                <input class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="file_input" type="file"></input>
            </div>
            <div>
                <label class="block text-sm font-medium" for="file_input">Adli Sicil Kaydı (pdf)</label>
                <input class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="file_input" type="file"></input>
            </div>
            <div>
                <label class="block text-sm font-medium" for="file_input">İkametgah Belgesi (pdf)</label>
                <input class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="file_input" type="file"></input>
            </div>
            <select name="region" id="region" className="bg-[#D9D9D9] text-[#9CA3AF] md:mt-3 px-4 py-2 rounded-lg border-none focus:outline-none">
                <option value="1" disabled selected>Araç Türü</option>
                <option value="2">Motosiklet</option>
                <option value="3">Araba</option>
            </select>
            <button className="bg-secondary rounded-lg text-white px-4 py-2 md:mt-5">Kaydol</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BeCourier;

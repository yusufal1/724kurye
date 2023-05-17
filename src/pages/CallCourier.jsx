import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AvatarIcon from "../assets/avatar.jpg";
import MotoIcon from "../assets/motorcycle-solid.svg";
import CarIcon from "../assets/truck-solid.svg";

function CallCourier() {
  return (
    <>
      <div className="w-[80%] mx-auto min-h-screen">
        <Header />
        <h1 className="md:text-5xl text-center text-2xl font-bold mt-10">
          Kuryeler
        </h1>
        <div class="relative overflow-x-auto bg-primary rounded-lg mt-10">
          <table class="w-full text-sm text-center bg-primary">
            <thead class="text-xs text-gray-700 uppercase bg-primary border-b">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Kişisel Bilgiler
                </th>
                <th scope="col" class="px-6 py-3">
                  Durum
                </th>
                <th scope="col" class="px-6 py-3">
                  Uzaklık
                </th>
                <th scope="col" class="px-6 py-3">
                  Araç Tipi
                </th>
                <th scope="col" class="px-6 py-3">
                  #
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-primary border-b text-white text-center">
                <td class="px-6 py-4">
                  <img className="w-12 rounded-full mx-auto mb-2" src={AvatarIcon} alt="" />
                  <span>Yusuf AL</span>
                </td>
                <td class="px-6 py-4">
                    <span className="text-[#49dd50] font-bold">Çevrim içi</span>
                </td>
                <td class="px-6 py-4">1.68km</td>
                <td class="px-6 py-4">
                  <img className="w-8 invert mx-auto" src={MotoIcon} alt="" />
                </td>
                <td class="px-6 py-4">
                  <a href="/anlas" className="bg-secondary rounded-lg px-4 py-2">
                    Anlaş
                  </a>
                </td>
              </tr>

              <tr class="bg-primary border-b text-white text-center">
                <td class="px-6 py-4">
                  <img className="w-12 rounded-full mx-auto mb-2" src={AvatarIcon} alt="" />
                  <span>Ali Akbaba</span>
                </td>
                <td class="px-6 py-4">
                    <span className="text-[#7c1d1d] font-bold">Çevrim dışı</span>
                </td>
                <td class="px-6 py-4">2.44km</td>
                <td class="px-6 py-4">
                  <img className="w-8 invert mx-auto" src={CarIcon} alt="" />
                </td>
                <td class="px-6 py-4">
                <a href="/anlas" className="bg-secondary rounded-lg px-4 py-2">
                    Anlaş
                  </a>
                </td>
              </tr>

              <tr class="bg-primary border-b text-white text-center">
                <td class="px-6 py-4">
                  <img className="w-12 rounded-full mx-auto mb-2" src={AvatarIcon} alt="" />
                  <span>Hasan Çelik</span>
                </td>
                <td class="px-6 py-4">
                    <span className="text-[#49dd50] font-bold">Çevrim içi</span>
                </td>
                <td class="px-6 py-4">3.21km</td>
                <td class="px-6 py-4">
                  <img className="w-8 invert mx-auto" src={CarIcon} alt="" />
                </td>
                <td class="px-6 py-4">
                <a href="/anlas" className="bg-secondary rounded-lg px-4 py-2">
                    Anlaş
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CallCourier;

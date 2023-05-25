import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GiftIcon from "../assets/gifts-solid (1).svg";
import LocationIcon from "../assets/location-dot-solid (1).svg";
import PhoneIcon from "../assets/phone-solid.svg";
import AvatarIcon from "../assets/avatar.jpg";

function Agree() {
  return (
    <>
      <div className="md:w-[80%] mx-auto min-h-screen">
        <Header />
        <div className="bg-secondary rounded-lg mt-10 flex flex-col md:flex-row justify-between py-[4%] gap-7">
          <div className="flex flex-col gap-7 text-white basis-1/2 mx-[8%]">
            <h1 className="font-semibold md:text-4xl text-2xl mb-5">
              Gönderi Oluştur
            </h1>
            <div className="flex flex-row gap-2">
              <img className="invert w-8" src={GiftIcon} alt="" />
              <input
                className="bg-inputBg rounded-lg w-full text-sm"
                type="text"
                placeholder="Gönderi İçeriği (yemek, hediye, çiçek, diğer)"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row gap-2">
                <img className="invert w-8" src={LocationIcon} alt="" />
                <input
                  className="bg-inputBg rounded-lg w-full text-sm"
                  type="text"
                  placeholder="Çıkış Noktası (İl, İlçe)"
                />
              </div>
              <div className="mx-auto w-[1px] h-5 bg-white"></div>
              <div className="flex flex-row md:gap-2 gap-3">
                <div className="w-8"></div>
                <input
                  className="bg-inputBg rounded-lg w-full text-sm"
                  type="text"
                  placeholder="Çıkış Noktası (Açık adres)"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row gap-2">
                <img className="invert w-8" src={LocationIcon} alt="" />
                <input
                  className="bg-inputBg rounded-lg w-full text-sm"
                  type="text"
                  placeholder="Varış Noktası (İl, İlçe)"
                />
              </div>
              <div className="mx-auto w-[1px] h-5 bg-white"></div>
              <div className="flex flex-row md:gap-2 gap-3">
                <div className="w-8"></div>
                <input
                  className="bg-inputBg rounded-lg w-full text-sm"
                  type="text"
                  placeholder="Varış Noktası (Açık adres)"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <img className="invert w-8" src={PhoneIcon} alt="" />
              <input
                className="bg-inputBg rounded-lg w-full text-sm"
                type="text"
                placeholder="Ek İrtibat No"
              />
            </div>
            <hr />
            <div className="flex flex-col gap-2 p-4 border rounded-lg w-fit ml-10">
              <span className="font-semibold text-2xl">Toplam: 96.20₺</span>
              <a href="/odeme"
                className="bg-primary rounded-lg px-8 py-2 w-fit"
              >
                Ödeme Yap
              </a>
            </div>
            <div className="flex-flex-col space-y-4 ml-10 text-xs text-inputBg">
              <p>Fiyatlarımıza kdv dahildir.</p>
              <p>
                Gönderi oluşturma bedeli 34,99TL’dir. Km başına 3,99 TL ücret
                alınmaktadır.
              </p>
              <p>
                Örneğin 12km uzaklıktaki bir yere göndereceğiniz ürün için 34,99
                + 12(3,99) = 82,87 TL ücret ödeyeceksiniz.
              </p>
              <p>
                Ödeme ile ilgili herhangi bir sorun için 0850 850 8585 telefon
                numarası ile iletişime geçebilirsiniz.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-white basis-1/2 mr-[8%] items-center">
            <h1 className="font-semibold md:text-4xl text-2xl mb-5">
              Kurye Bilgileri
            </h1>
            <img className="rounded-full w-20" src={AvatarIcon} alt="" />
            <span className="font-semibold">Yusuf AL</span>
            <div className="flex flex-col mt-5">
              <span className="font-semibold">Başarılı İşlem Sayısı</span>
              <span className="text-center text-[#24FF00] font-bold text-3xl">
                56
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Başarısız İşlem Sayısı</span>
              <span className="text-center text-[#DD1515] font-bold text-3xl">
                3
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Agree;

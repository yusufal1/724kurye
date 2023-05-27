import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GiftIcon from "../assets/gifts-solid (1).svg";
import AvatarIcon from "../assets/avatar.jpg";
import LocationIcon from "../assets/location-dot-solid (1).svg";

function Agree() {
  const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const vehicle = searchParams.get("vehicle");

const [price, setPrice] = useState(0);
  const [ilce1, setIlce1] = useState("");
  const [ilce2, setIlce2] = useState("");
  const [mesafe, setMesafe] = useState(0);

  const handleAgreement = () => {
    let calculatedPrice = 0;
    let motoStartingPrice = 34.99;
    let carStartingPrice = 59.99;
    if (vehicle === "moto") {
      calculatedPrice = (motoStartingPrice+(mesafe * 3.99)).toFixed(2);
    } else if (vehicle === "car") {
      calculatedPrice = (carStartingPrice+(mesafe * 8.99)).toFixed(2);
    }
    setPrice(calculatedPrice);
  };



  const ilceler = [
    { id: 1, name: "Adalar", latitude: 40.8763, longitude: 29.0911 },
    { id: 2, name: "Arnavutköy", latitude: 41.1864, longitude: 28.7406 },
    { id: 3, name: "Ataşehir", latitude: 40.9848, longitude: 29.1063 },
    { id: 4, name: "Avcılar", latitude: 40.9791, longitude: 28.7214 },
    { id: 5, name: "Bağcılar", latitude: 41.0336, longitude: 28.8575 },
    { id: 6, name: "Bahçelievler", latitude: 41.0003, longitude: 28.8591 },
    { id: 7, name: "Bakırköy", latitude: 40.9764, longitude: 28.8724 },
    { id: 8, name: "Başakşehir", latitude: 41.0975, longitude: 28.8065 },
    { id: 9, name: "Bayrampaşa", latitude: 41.0358, longitude: 28.9121 },
    { id: 10, name: "Beşiktaş", latitude: 41.0431, longitude: 29.0077 },
    { id: 11, name: "Beykoz", latitude: 41.1864, longitude: 29.0805 },
    { id: 12, name: "Beylikdüzü", latitude: 41.001, longitude: 28.6415 },
    { id: 13, name: "Beyoğlu", latitude: 41.0284, longitude: 28.973 },
    { id: 14, name: "Büyükçekmece", latitude: 41.0151, longitude: 28.5953 },
    { id: 15, name: "Çatalca", latitude: 41.1448, longitude: 28.4617 },
    { id: 16, name: "Çekmeköy", latitude: 41.0117, longitude: 29.1754 },
    { id: 17, name: "Esenler", latitude: 41.0328, longitude: 28.8677 },
    { id: 18, name: "Esenyurt", latitude: 41.0413, longitude: 28.68 },
    { id: 19, name: "Eyüp", latitude: 41.0466, longitude: 28.925 },
    { id: 20, name: "Fatih", latitude: 41.0112, longitude: 28.9606 },
    { id: 21, name: "Gaziosmanpaşa", latitude: 41.0541, longitude: 28.9157 },
    { id: 22, name: "Güngören", latitude: 41.0224, longitude: 28.8696 },
    { id: 23, name: "Kadıköy", latitude: 40.9819, longitude: 29.0254 },
    { id: 24, name: "Kağıthane", latitude: 41.0854, longitude: 28.9724 },
    { id: 25, name: "Kartal", latitude: 40.8919, longitude: 29.196 },
    { id: 26, name: "Küçükçekmece", latitude: 41.0007, longitude: 28.7809 },
    { id: 27, name: "Maltepe", latitude: 40.9323, longitude: 29.1324 },
    { id: 28, name: "Pendik", latitude: 40.8744, longitude: 29.2267 },
    { id: 29, name: "Sancaktepe", latitude: 41.0075, longitude: 29.213 },
    { id: 30, name: "Sarıyer", latitude: 41.1706, longitude: 29.0549 },
    { id: 31, name: "Silivri", latitude: 41.0733, longitude: 28.2466 },
    { id: 32, name: "Sultanbeyli", latitude: 40.9728, longitude: 29.2564 },
    { id: 33, name: "Sultangazi", latitude: 41.1097, longitude: 28.8821 },
    { id: 34, name: "Şile", latitude: 41.1754, longitude: 29.6126 },
    { id: 35, name: "Şişli", latitude: 41.0613, longitude: 28.9871 },
    { id: 36, name: "Tuzla", latitude: 40.8746, longitude: 29.3546 },
    { id: 37, name: "Ümraniye", latitude: 41.0249, longitude: 29.118 },
    { id: 38, name: "Üsküdar", latitude: 41.0297, longitude: 29.0291 },
    { id: 39, name: "Zeytinburnu", latitude: 40.9973, longitude: 28.903 },
  ];

  useEffect(() => {
    calculateAndSetMesafe(ilce1, ilce2);
  }, [ilce1, ilce2]);

  const handleIlce1Change = (e) => {
    const selectedIlceId = e.target.value;
    setIlce1(selectedIlceId);
    calculateAndSetMesafe(selectedIlceId, ilce2);
  };
  
  const handleIlce2Change = (e) => {
    const selectedIlceId = e.target.value;
    setIlce2(selectedIlceId);
    calculateAndSetMesafe(ilce1, selectedIlceId);
  };

  const calculateAndSetMesafe = (ilceId1, ilceId2) => {
    const selectedIlce1 = ilceler.find((ilce) => ilce.id === parseInt(ilceId1));
    const selectedIlce2 = ilceler.find((ilce) => ilce.id === parseInt(ilceId2));
    if (selectedIlce1 && selectedIlce2) {
      const distance = calculateDistance(
        selectedIlce1.latitude,
        selectedIlce1.longitude,
        selectedIlce2.latitude,
        selectedIlce2.longitude
      );
      setMesafe(distance);
      handleAgreement(); // Mesafe güncellendiğinde fiyatı hesapla
    } else {
      setMesafe(0);
      setPrice(0); // Eğer ilçelerden biri seçilmediyse fiyatı sıfırla
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(2);
  };
  
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
          <select className="bg-inputBg rounded-lg w-full text-sm text-[#6B7280]" value={ilce1} onChange={handleIlce1Change}>
            <option value="">Çıkış Noktası (İlçe)</option>
            {ilceler.map((ilce) => (
              <option key={ilce.id} value={ilce.id}>
                {ilce.name}
              </option>
            ))}
          </select>
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
          <select className="bg-inputBg rounded-lg w-full text-sm text-[#6B7280]" value={ilce2} onChange={handleIlce2Change}>
        <option value="">Varış Noktası (İlçe)</option>
        {ilceler.map((ilce) => (
          <option key={ilce.id} value={ilce.id}>
            {ilce.name}
          </option>
        ))}
      </select>
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
            {mesafe > 0 && <div className="ml-10">Mesafe: {mesafe} km</div>}
            <hr />
            <div className="flex flex-col gap-2 p-4 border rounded-lg w-fit ml-10">
            <span className="font-semibold text-2xl">Toplam: {price}</span>
              <a href="/odeme"
                className="bg-primary rounded-lg px-8 py-2 w-fit"
              >
                Ödeme Yap
              </a>
            </div>
            <div className="flex-flex-col space-y-4 ml-10 text-xs text-inputBg">
              <p>Fiyatlarımıza kdv dahildir.</p>
              <p>
                Gönderi oluşturma bedeli motorsiklet için 34,99TL, araba için 59,99TL'dir. Motorsiklet için km başına 3,99 TL, araba için km başına 5,99 TL ücret alınmaktadır.
              </p>
              <p>
                Örneğin 12km uzaklıktaki bir yere göndereceğiniz ürün için motorsiklet kuryeye ödeyeceğiniz fiyat 34,99
                + 12(3,99) = 82,87 TL'dir
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

import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AvatarIcon from "../assets/avatar.jpg";
import FemaleAvatar from "../assets/femaleavatar.jpg";
import MotoIcon from "../assets/motorcycle-solid.svg";
import CarIcon from "../assets/truck-solid.svg";
import { Link } from "react-router-dom";

function CallCourier() {
  const courierArr = [
    {
      img: AvatarIcon,
      name: "Yusuf AL",
      state: "Çevrim içi",
      vehicleIcon: MotoIcon,
      vehicle: "moto",
      successfullTransaction: 52,
      failedTransaction: 4,
    },
    {
      img: AvatarIcon,
      name: "Ali Akbaba",
      state: "Çevrim dışı",
      vehicleIcon: CarIcon,
      vehicle: "car",
      successfullTransaction: 23,
      failedTransaction: 2,
    },
    {
      img: AvatarIcon,
      name: "Mesut Yılmaz",
      state: "Çevrim içi",
      vehicleIcon: CarIcon,
      vehicle: "car",
      successfullTransaction: 19,
      failedTransaction: 1,
    },
    {
      img: FemaleAvatar,
      name: "Sude Naz",
      state: "Çevrim dışı",
      vehicleIcon: MotoIcon,
      vehicle: "moto",
      successfullTransaction: 66,
      failedTransaction: 8,
    },
    {
      img: AvatarIcon,
      name: "Burak Kurt",
      state: "Çevrim içi",
      vehicleIcon: CarIcon,
      vehicle: "car",
      successfullTransaction: 72,
      failedTransaction: 0,
    },
    {
      img: FemaleAvatar,
      name: "Selinay Yıldız",
      state: "Çevrim içi",
      vehicleIcon: CarIcon,
      vehicle: "car",
      successfullTransaction: 39,
      failedTransaction: 3,
    },
    {
      img: FemaleAvatar,
      name: "Asude Demir",
      state: "Çevrim dışı",
      vehicleIcon: CarIcon,
      vehicle: "car",
      successfullTransaction: 26,
      failedTransaction: 1,
    },
    {
      img: AvatarIcon,
      name: "Ömer Yıldız",
      state: "Çevrim içi",
      vehicleIcon: MotoIcon,
      vehicle: "moto",
      successfullTransaction: 44,
      failedTransaction: 6,
    },
  ];

  const [hideOfflineCouriers, setHideOfflineCouriers] = useState(false);

  const handleCheckboxChange = (event) => {
    setHideOfflineCouriers(event.target.checked);
  };

  const filteredCouriers = hideOfflineCouriers
    ? courierArr.filter((courier) => courier.state === "Çevrim içi")
    : courierArr;

  return (
    <>
      <div className="w-[80%] mx-auto min-h-screen">
        <Header />
        <h1 className="md:text-5xl text-center text-2xl font-bold mt-10">
          Kuryeler
        </h1>
        <label className="mt-10 flex gap-3 items-center">
        <input
          type="checkbox"
          checked={hideOfflineCouriers}
          onChange={handleCheckboxChange}
        />
        Çevrim dışı kuryeleri gizle
      </label>
        <div className="relative overflow-x-auto overflow-y-auto max-h-[600px] bg-primary rounded-lg">
          <table className="w-full text-sm text-center bg-primary ">
            <thead className="text-xs text-gray-700 uppercase bg-primary border-b border-secondary">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Kişisel Bilgiler
                </th>
                <th scope="col" className="px-6 py-3">
                  Durum
                </th>
                <th scope="col" className="px-6 py-3">
                  Araç Tipi
                </th>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
              </tr>
            </thead>
            <tbody>
                {filteredCouriers.map((courier, index) => (
                <tr
                  key={index}
                  className="bg-primary border-b text-white text-center"
                >
                  <td className="px-6 py-4">
                    <img
                      className="w-12 h-12 rounded-full mx-auto mb-2"
                      src={courier.img}
                      alt=""
                    />
                    <span>{courier.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={
                        courier.state === "Çevrim dışı"
                          ? "text-[#7c1d1d] font-bold"
                          : "text-[#49dd50] font-bold"
                      }
                    >
                      {courier.state}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <img
                      className="w-8 invert mx-auto"
                      src={courier.vehicleIcon}
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-4">
                    {courier.state === "Çevrim içi" && (
                      <Link
                        to={`/anlas?vehicle=${
                          courier.vehicle
                        }&courierName=${encodeURIComponent(
                          courier.name
                        )}&successfullTransaction=${
                          courier.successfullTransaction
                        }&failedTransaction=${
                          courier.failedTransaction
                        }&img=${encodeURIComponent(courier.img)}`}
                        className="bg-secondary rounded-lg px-4 py-2"
                      >
                        Anlaş
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CallCourier;

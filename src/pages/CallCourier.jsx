import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AvatarIcon from "../assets/avatar.jpg";
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
      vehicle: "moto"
    },
    {
      img: AvatarIcon,
      name: "Ali Akbaba",
      state: "Çevrim dışı",
      vehicleIcon: CarIcon,
      vehicle: "car"
    },
    {
      img: AvatarIcon,
      name: "Mesut Yılmaz",
      state: "Çevrim içi",
      vehicleIcon: CarIcon,
      vehicle: "car"
    },
    {
      img: AvatarIcon,
      name: "Mesut Yılmaz",
      state: "Çevrim içi",
      vehicleIcon: CarIcon,
      vehicle: "car"
    },
    {
      img: AvatarIcon,
      name: "Mesut Yılmaz",
      state: "Çevrim içi",
      vehicleIcon: CarIcon,
      vehicle: "car"
    },
    {
      img: AvatarIcon,
      name: "Mesut Yılmaz",
      state: "Çevrim içi",
      vehicleIcon: CarIcon,
      vehicle: "car"
    },
    {
      img: AvatarIcon,
      name: "Mesut Yılmaz",
      state: "Çevrim içi",
      vehicleIcon: CarIcon,
      vehicle: "car"
    },
    {
      img: AvatarIcon,
      name: "Mesut Yılmaz",
      state: "Çevrim içi",
      vehicleIcon: CarIcon,
      vehicle: "car"
    },
  ];

  return (
    <>
      <div className="w-[80%] mx-auto min-h-screen">
        <Header />
        <h1 className="md:text-5xl text-center text-2xl font-bold mt-10">
          Kuryeler
        </h1>
        <div class="relative overflow-x-auto overflow-y-auto max-h-[600px] bg-primary rounded-lg mt-10">
          <table class="w-full text-sm text-center bg-primary ">
            <thead class="text-xs text-gray-700 uppercase bg-primary border-b border-secondary">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Kişisel Bilgiler
                </th>
                <th scope="col" class="px-6 py-3">
                  Durum
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
              {courierArr.map((courier, index) => (
                <tr
                  key={index}
                  className="bg-primary border-b text-white text-center"
                >
                  <td className="px-6 py-4">
                    <img
                      className="w-12 rounded-full mx-auto mb-2"
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
                    <Link 
                      to={`/anlas?vehicle=${courier.vehicle}`}
                      className="bg-secondary rounded-lg px-4 py-2"
                    >
                      Anlaş
                    </Link>
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

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MasterCard from "../assets/Mastercard-logo.svg";
import Chip from "../assets/chip.png";

function Payment() {
  const [cardNumber, setCardNumber] = useState("5412 7512 3412 3456");
  const handleNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const formatCardNumber = (cardNumber) => {
    const formattedNumber = cardNumber.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ');
    return formattedNumber || '';
  };

  const formattedCardNumber = formatCardNumber(cardNumber);

  const [cardDate, setCardDate] = useState('12/23');
  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    const formattedDate = formatCardDate(inputDate);
    setCardDate(formattedDate);
  }

  const formatCardDate = (inputDate) => {
    const formattedDate = inputDate.replace(/\//g, '');
    if (formattedDate.length > 2) {
      return formattedDate.slice(0, 2) + '/' + formattedDate.slice(2);
    } else {
      return formattedDate;
    }
  };

  const [cardCvc, setCardCvc] = useState('930')
  const handleCvcChange = (event) => {
    setCardCvc(event.target.value);
  }
  return (
    <>
      <div className="sm:w-[80%] mx-auto min-h-screen">
        <Header />
        <div className="flex xl:flex-row flex-col mt-20 border rounded-lg drop-shadow-lg">
          <div className="basis-1/3 xl:rounded-l-lg bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center">
            <div className="flex flex-col m-5 rounded-lg drop-shadow-lg h-[180px] w-[330px] bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
              <img
                className="bg-transparent h-[35px] w-[45px] mt-10"
                src={Chip}
                alt=""
              />
              <div className="flex flex-row justify-between mt-auto">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-200">{formattedCardNumber ? formattedCardNumber : <span>**** **** **** ****</span> }</span>
                  <span className="text-gray-200 text-xs">{cardDate ? cardDate : <span>12/23</span> }</span>
                  <span className="text-gray-200 text-xs">{cardCvc ? cardCvc : <span>930</span> }</span>
                </div>
                <img className="w-16 mr-4" src={MasterCard} alt="" />
              </div>
            </div>
          </div>
          <div className="basis-2/3 flex flex-col bg-slate-100">
            <h1 className="font-medium text-2xl mx-auto mt-5">
              Ödeme Bilgileri
            </h1>
            <div className="flex flex-col gap-1 mt-5">
              <label className="mx-10" htmlFor="cardNumber">
                Kart Numarası
              </label>
              <input
                id="cardNumber"
                type="text"
                className="mx-10 rounded-lg"
                onChange={handleNumberChange}
                maxLength={16}
              />
              <div className="flex xl:flex-row flex-col justify-between mb-10">
                <div className="flex flex-col w-full">
                  <label className="mx-10 mt-4" htmlFor="cardDate">
                    Son Kullanma Tarihi
                  </label>
                  <input
                    id="cardDate"
                    type="text"
                    className="mx-10 rounded-lg"
                    onChange={handleDateChange}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mx-10 mt-4" htmlFor="cardCvc">
                    CVC
                  </label>
                  <input
                    id="cardCvc"
                    type="text"
                    className="mx-10 rounded-lg"
                    onChange={handleCvcChange}
                  />
                </div>
              </div>
            </div>
            <button className="bg-secondary mx-10 rounded-lg text-white py-2 mb-4">
              Ödeme Yap
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;

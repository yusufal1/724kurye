import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="w-[80%] mx-auto min-h-screen">
        <Header />
        <div className="my-10 flex flex-col items-center mx-auto">
          <h1 className="md:text-5xl text-2xl font-bold">İletişim</h1>
          <div className="flex flex-col mt-10 lg:w-[60%] md:w-[80%] w-[80%] gap-8">
          <input
              className="bg-[#D9D9D9] w-full px-4 py-2 rounded-lg border-none focus:outline-none"
              placeholder="Ad Soyad"
              type="text"
            />
            <input
              className="bg-[#D9D9D9] w-full px-4 py-2 rounded-lg border-none focus:outline-none"
              placeholder="Telefon Numarası"
              type="text"
            />
            <input
              className="bg-[#D9D9D9] w-full px-4 py-2 rounded-lg border-none focus:outline-none"
              placeholder="E-mail"
              type="text"
            />
            <textarea name="message" id="message" cols="30" rows="7" placeholder="Mesajınız" className="resize-none bg-[#D9D9D9] w-full px-4 py-2 rounded-lg border-none focus:outline-non"></textarea>
            <button className="bg-primary rounded-lg text-white px-4 py-2 md:mt-5">Gönder</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

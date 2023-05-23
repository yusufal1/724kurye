import React, { useState } from "react";
import Modal from "react-modal";
import Header from "../components/Header";
import Footer from "../components/Footer";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function LoginSignup() {
  const [isCustomerButtonClicked, setCustomerButtonClicked] = useState(true);
  const [isCourierButtonClicked, setCourierButtonClicked] = useState(false);
  const [isRegisterButtonClicked, setRegisterButtonClicked] = useState(false);

  const handleCustomerButtonClick = () => {
    setCustomerButtonClicked(true);
    setCourierButtonClicked(false);
  };

  const handleCourierButtonClick = () => {
    setCourierButtonClicked(true);
    setCustomerButtonClicked(false);
  };

  const handleRegisterButtonClick = () => {
    setRegisterButtonClicked(true);
    setCustomerButtonClicked(false);
    setCourierButtonClicked(false);
  };

  const handleLoginButtonClick = () => {
    setRegisterButtonClicked(false);
    setCustomerButtonClicked(true);
    setCourierButtonClicked(false);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="w-[80%] mx-auto min-h-screen">
        <Header />
        <div className="bg-[#D9D9D9] p-5 mt-20 md:w-1/2 rounded-lg mx-auto drop-shadow-lg">
          <div>
            {!isRegisterButtonClicked && (
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl">GİRİŞ YAP</h1>
                <div className="flex flex-row mt-10 drop-shadow-lg">
                  <button
                    className={`bg-${
                      isCustomerButtonClicked ? "primary" : "white"
                    } text-${
                      isCustomerButtonClicked ? "white" : "black"
                    } basis-1/2 rounded-l-lg py-2`}
                    onClick={handleCustomerButtonClick}
                  >
                    MÜŞTERİ
                  </button>
                  <button
                    className={`bg-${
                      isCourierButtonClicked ? "primary" : "white"
                    } text-${
                      isCourierButtonClicked ? "white" : "black"
                    } basis-1/2 rounded-r-lg py-2`}
                    onClick={handleCourierButtonClick}
                  >
                    KURYE
                  </button>
                </div>
              </div>
            )}
            {isRegisterButtonClicked ? (
              <div className="flex flex-col gap-7 mt-10">
                <h1 className="font-bold text-2xl">Kayıt Ol</h1>
                <input
                  type="text"
                  className="text-black rounded-lg border-none focus:outline-none"
                  placeholder="Ad"
                />
                <input
                  type="text"
                  className="text-black rounded-lg border-none focus:outline-none"
                  placeholder="Soyad"
                />
                <input
                  type="tel"
                  className="text-black rounded-lg border-none focus:outline-none"
                  placeholder="Telefon Numarası"
                />
                <input
                  type="email"
                  className="text-black rounded-lg border-none focus:outline-none"
                  placeholder="E-mail"
                />
                <input
                  type="password"
                  className="text-black rounded-lg border-none focus:outline-none"
                  placeholder="Şifre"
                />
                <input
                  type="password"
                  className="text-black rounded-lg border-none focus:outline-none"
                  placeholder="Şifreyi Doğrulayın"
                />
              </div>
            ) : (
              <div className="flex flex-col gap-7 mt-10">
                <input
                  type="tel"
                  className="text-black rounded-lg border-none focus:outline-none"
                  placeholder="Telefon Numarası"
                />
                <input
                  type="password"
                  className="text-black rounded-lg border-none focus:outline-none"
                  placeholder="Şifre"
                />
              </div>
            )}
            {!isRegisterButtonClicked && (
              <div className="mt-4 text-right">
                <button onClick={openModal} className="underline text-primary">
                  Şifremi unuttum{" "}
                </button>
              </div>
            )}
          </div>
          {!isRegisterButtonClicked && (
            <div className="flex flex-col mt-4 gap-1">
              <button className="bg-secondary rounded-lg py-2 text-white">
                Giriş Yap
              </button>
              <div className="flex flex-row ml-auto gap-1">
                <span>Henüz hesabın yok mu?</span>{" "}
                <button
                  className="text-primary underline"
                  onClick={handleRegisterButtonClick}
                >
                  Kayıt Ol
                </button>
              </div>
            </div>
          )}
          {isRegisterButtonClicked && (
            <div className="flex flex-col gap-1 mt-4">
              <button className="bg-secondary rounded-lg py-2 text-white">
                Kayıt Ol
              </button>
              <button
                onClick={handleLoginButtonClick}
                className="text-primary underline text-right"
              >
                Giriş Yap
              </button>
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col sm:w-[500px] w-[320px]">
          <div className="flex justify-between items-center">
            <h2 className="text-primary text-2xl">Şifremi Unuttum</h2>
            <button onClick={closeModal} className="font-bold">
              X
            </button>
          </div>

          <form>
            <div className="mt-10 relative">
              <input
                type="tel"
                className=" rounded-lg py-2 w-full"
                placeholder="Telefon Numarası"
              />
              <button className="absolute ml-auto bg-primary rounded-lg px-4 text-white font-medium py-1 whitespace-nowrap right-1 top-1 hover:opacity-80">
                Onay Kodu Al
              </button>
              <input
                type="text"
                className=" rounded-lg py-2 w-full mt-5 border-2 border-primary focus:outline-none"
                placeholder="Onay Kodu"
              />
              <button className="bg-primary text-white w-full py-2 mt-8 rounded-lg">Şifreyi Sıfırla</button>
            </div>
          </form>
        </div>
      </Modal>
      <Footer />
    </>
  );
}

export default LoginSignup;

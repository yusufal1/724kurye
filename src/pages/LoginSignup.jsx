import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LoginSignup() {
    const [isCustomerButtonClicked, setCustomerButtonClicked] = useState(true);
    const [isCourierButtonClicked, setCourierButtonClicked] = useState(false);
    const [isRegisterButtonClicked, setRegisterButtonClicked] = useState(false);
    const [isLogginButtonClicked, setIsLogginButtonClicked] = useState(false)
  
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
  
    return (
      <>
        <div className="w-[80%] mx-auto min-h-screen">
          <Header />
          <div className="bg-[#D9D9D9] p-5 mt-20 md:w-1/2 rounded-lg mx-auto drop-shadow-lg">
            <div>
              <h1 className="font-bold text-2xl">GİRİŞ YAP</h1>
              {!isRegisterButtonClicked && (
                <div className="flex flex-row mt-10 drop-shadow-lg">
                  <button
                    className={`bg-${
                      isCustomerButtonClicked ? 'primary' : 'white'
                    } text-${isCustomerButtonClicked ? 'white' : 'black'} basis-1/2 rounded-l-lg py-2`}
                    onClick={handleCustomerButtonClick}
                  >
                    MÜŞTERİ
                  </button>
                  <button
                    className={`bg-${
                      isCourierButtonClicked ? 'primary' : 'white'
                    } text-${isCourierButtonClicked ? 'white' : 'black'} basis-1/2 rounded-r-lg py-2`}
                    onClick={handleCourierButtonClick}
                  >
                    KURYE
                  </button>
                </div>
              )}
              {isRegisterButtonClicked ? (
                <div className="flex flex-col gap-7 mt-10">
                  <input
                    type="text"
                    className="text-black rounded-lg border-none focus:outline-none"
                    placeholder="Ad Soyad"
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
                  <a href="/" className="underline text-primary">
                    Şifremi unuttum </a>
              </div>
            )}
          </div>
          {!isRegisterButtonClicked && (
            <div className="flex flex-col mt-4 gap-1">
              <button className="bg-secondary rounded-lg py-2 text-white">
                Giriş Yap
              </button>
              <div className="flex flex-row ml-auto gap-1">
                <span>Henüz hesabın yok mu?</span> <button
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
              <button onClick={handleLoginButtonClick} className="text-primary underline text-right">Giriş Yap</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginSignup;

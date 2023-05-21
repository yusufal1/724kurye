import { useState } from "react"; // import state
import brandlogo from "../assets/brandlogo.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [isOnline, setIsOnline] = useState(true)

  const handleOnline = () => {
    setIsOnline(true)
  }

  const handleOffline = () => {
    setIsOnline(false)
  }
  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <a href="Homepage">
        <img className="w-32" src={brandlogo} alt="brandlogo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/siparis-istekleri">Sipariş İstekleri</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/aktif-siparisler">Aktif Siparişlerim</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <span>Durum: {isOnline ? <span className="text-[#59FF00]">Çevrim içi</span> : <span className="text-[#DD1515]">Çevrim Dışı</span> }</span>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase flex flex-col">
                <p>
                  Hoş geldiniz, <b>Yusuf AL</b>
                </p>
                <div className="flex flex-row">
                  <li>
                    <button onClick={handleOnline} className="border border-[#24FF00] text-[#24FF00] rounded-lg px-8 bg-[#D9D9D9]">
                      Açık
                    </button>
                  </li>
                  <li>
                    <button onClick={handleOffline} className="border border-[#DD1515] text-[#DD1515] rounded-lg px-5 bg-[#D9D9D9]">
                      Kapalı
                    </button>
                  </li>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center">
          <li>
            <a href="/siparis-istekleri" className="whitespace-nowrap">
              Sipariş İstekleri
            </a>
          </li>
          <li>
            <a href="/aktif-siparisler" className="whitespace-nowrap">
              Aktif Siparişlerim
            </a>
          </li>
          <li>
            <p className="whitespace-nowrap">
              Durum: {isOnline ? <span className="text-[#59FF00]">Çevrim içi</span> : <span className="text-[#DD1515]">Çevrim Dışı</span> }
            </p>
          </li>
          <li>
            <div className="flex flex-col">
              <p>
                Hoş geldiniz, <b>Yusuf AL</b>
              </p>
              <div className="flex flex-row">
                <li>
                  <button  onClick={handleOnline}n className="border border-[#24FF00] text-[#24FF00] rounded-lg px-8 bg-[#D9D9D9]">
                    Açık
                  </button>
                </li>
                <li>
                  <button  onClick={handleOffline} className="border border-[#DD1515] text-[#DD1515] rounded-lg px-5 bg-[#D9D9D9]">
                    Kapalı
                  </button>
                </li>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 110vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

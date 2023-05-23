import { useState } from "react";
import brandlogo from "../assets/brandlogo.png";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
      <div className="flex items-center justify-between border-b border-gray-400 py-8">
        <a href="/">
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
                  <a href="/">Ana Sayfa</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/hakkimizda">Hakkımızda</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/kurye-ol">Kurye Ol</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/iletisim">İletişim</a>
                </li>
                <li className=" bg-primary p-2 text-white rounded-lg  my-8 uppercase">
                  <a href="/kurye-cagir">Kurye Çağır</a>
                </li>
                <li className=" bg-secondary p-2 text-white rounded-lg  my-8 uppercase">
                  <a href="/giris-yap">Giriş Yap</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
              <a href="/" className="whitespace-nowrap">Ana Sayfa</a>
            </li>
            <li>
              <a href="/hakkimizda" className="whitespace-nowrap">Hakkımızda</a>
            </li>
            <li>
              <a href="/kurye-ol" className="whitespace-nowrap">Kurye Ol</a>
            </li>
            <li>
              <a href="/iletisim" className="whitespace-nowrap">İletişim</a>
            </li>
            <li>
              <a
                className="bg-primary whitespace-nowrap text-white rounded-lg px-2 py-1 mx-2"
                href="/kurye-cagir"
              >
                Kurye Çağır
              </a>
            </li>
            <li>
              <a
                className="bg-secondary whitespace-nowrap text-white rounded-lg px-2 py-1 mx-2"
                href="/giris-yap"
              >
                Giriş Yap
              </a>
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


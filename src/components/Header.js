import { useState } from "react"; // import state
import brandlogo from "../assets/brandlogo.png";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

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
                  <a href="/">Ana Sayfa</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/">Hakkımızda</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/">Kurye Ol</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/">İletişim</a>
                </li>
                <li className=" bg-primary p-2 text-white rounded-lg  my-8 uppercase">
                  <a href="/">Kurye Çağır</a>
                </li>
                <li className=" bg-secondary p-2 text-white rounded-lg  my-8 uppercase">
                  <a href="/">Giriş Yap</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
              <a href="/">Ana Sayfa</a>
            </li>
            <li>
              <a href="/">Hakkımızda</a>
            </li>
            <li>
              <a href="/">Kurye</a>
            </li>
            <li>
              <a href="/">İletişim</a>
            </li>
            <li>
              <a href="/">İletişim</a>
            </li>
            <li>
              <a
                className="bg-primary text-white rounded-lg px-2 py-1 mx-2"
                href="/contact"
              >
                Kurye Çağır
              </a>
            </li>
            <li>
              <a
                className="bg-secondary text-white rounded-lg px-2 py-1 mx-2"
                href="/contact"
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
        height: 100vh;
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

// <div className='flex flex-row justify-between items-center font-sans sticky top-0 z-50 border-b-2 bg-white'>
//   <div>
//     <a href="Homepage"><img className='w-32' src={brandlogo} alt='brandlogo'/></a>
//   </div>
//   <div className='flex-grow flex justify-evenly'>
//     <a className='hover:text-primary' href="/">Ana Sayfa</a>
//     <a className='hover:text-primary' href="/">Hakkımızda</a>
//     <a className='hover:text-primary' href="/">Kurye Ol</a>
//     <a className='hover:text-primary' href="/">İletişim</a>
//   </div>
//   <div className='flex'>
//     <button className='bg-primary text-white rounded-lg px-2 py-1 mx-2'>Kurye Çağır</button>
//     <button className='bg-secondary text-white rounded-lg px-2 py-1 mx-2'>Giriş Yap</button>
//   </div>
// </div>

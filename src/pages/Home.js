import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col relative min-h-screen w-full bg-[url('/public/bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="px-6 py-5">
        <nav className="flex items-center justify-between w-full mx-auto max-w-7xl">
          <a
            href="https://lumiwallet.com"
            target=""
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img src="/logo.svg" />
            <div className="text-sm font-normal tracking-wide text-black">
              LUMI / <span className="text-stone-400">web</span>
            </div>
          </a>

          {/* <select>
            <option value="English">English</option>
            <option value="Chinese">Chinese</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Portuguese">Portuguese (PT)</option>
            <option value="Russian">Russian</option>
            <option value="Spanish">Spanish</option>
          </select> */}
        </nav>
      </div>

      <div className="flex items-center justify-center flex-1 px-4 py-6">
        <section className="grid w-full h-full max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 sm:gap-2">
          <div className="flex items-center justify-center h-full pl-8">
            <p className="text-3xl sm:text-5xl sm:leading-[62px] text-black font-bold max-w-md mx-auto w-full">
              Create a new wallet or import existing
            </p>
          </div>

          <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col w-full max-w-md p-4 px-4 py-12 space-y-4 bg-white rounded-lg shadow-lg sm:px-8">
              <div className="px-6">
                <p className="pb-4 text-base font-medium tracking-wide text-black border-b border-stone-300">
                  Welcome to Lumi
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/create"
                    className="flex flex-col p-6 space-y-3 transition-all duration-300 rounded-lg cursor-pointer group hover:bg-stone-100"
                  >
                    <p className="text-base font-medium tracking-wide text-stone-400 group-hover:text-[#073F6A]">
                      Option 1
                    </p>

                    <div className="flex items-center justify-between w-full">
                      <p className="text-xl font-normal tracking-wide text-black">
                        Create a new wallet
                      </p>

                      <span className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-stone-400 group-hover:text-[#073F6A]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>

                  <Link
                    to="/import"
                    className="flex flex-col p-6 space-y-3 transition-all duration-300 rounded-lg cursor-pointer group hover:bg-stone-100"
                  >
                    <p className="text-base font-medium tracking-wide text-stone-400 group-hover:text-[#073F6A]">
                      Option 2
                    </p>

                    <div className="flex items-center justify-between w-full">
                      <p className="text-xl font-normal tracking-wide text-black">
                        Import your existing wallet
                      </p>

                      <span className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-stone-400 group-hover:text-[#073F6A]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>

                <p className="mt-20 text-sm font-normal tracking-wide text-center text-stone-400">
                  Do you need any help?{" "}
                  <span className="text-blue-500">Contact support</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="px-6 py-4">
        <footer className="flex flex-col w-full gap-4 mx-auto sm:flex-row sm:items-center sm:justify-between max-w-7xl">
          <div className="flex items-center w-full max-w-xs space-x-4">
            <a
              href="ad"
              rel="noopener noreferrer"
              target="_blank"
              className="w-full px-2 py-2 border rounded-lg border-stone-300"
            >
              <img
                src="/appstore-big.svg"
                alt=""
                className="w-28 aspect-auto"
              />
            </a>

            <a
              href="ad"
              rel="noopener noreferrer"
              target="_blank"
              className="w-full px-2 py-2 border rounded-lg border-stone-300"
            >
              <img
                src="/googleplay-big.svg"
                alt=""
                className="w-28 aspect-auto"
              />
            </a>
          </div>

          <ul className="flex flex-col gap-4 text-sm font-normal tracking-wide sm:items-center sm:flex-row text-stone-400">
            <li className="cursor-pointer">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">License</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">© 2024 NO ONE FZCO</a>
            </li>
          </ul>
        </footer>
      </div>

      <div className="sm:flex hidden items-center py-2.5 px-6 rounded-lg max-w-fit w-full bg-white shadow-xl text-sm font-normal text-stone-400 fixed top-2 left-1/2 -translate-x-1/2">
        <div className="relative flex items-center space-x-1">
          <span>Check the domain. It must be</span>{" "}
          <span className="font-semibold text-black">WEB.LUMIWALLET.COM.</span>{" "}
          <span>Avoid phishing!️</span>
          <span className="absolute top-0 flex items-center justify-center -translate-y-1/2 -left-12">
            <img src="/arrow-up.svg" alt="" className="w-3 aspect-auto" />
          </span>
        </div>
        <img src="/attention.svg" alt="" className="w-5 ml-4 aspect-auto" />
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import InputBox from "../components/InputBox";
import { Link } from "react-router-dom";

const Import = () => {
  const [currentTab, setCurrentTab] = useState("phrase");
  return (
    <div className="flex flex-col relative w-full bg-[url('/public/bg.png')] bg-no-repeat bg-center bg-cover">
      <section className="grid w-full h-screen grid-cols-1 md:grid-cols-2">
        <div className="relative flex flex-col w-full h-full md:overflow-hidden">
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
            </nav>
          </div>

          <div className="flex items-center justify-center h-full px-4 py-10 md:py-0 md:px-0 md:pl-8">
            <p className="text-3xl md:text-5xl md:leading-[62px] text-black font-bold max-w-md mx-auto w-full">
              Import your existing crypto wallet
            </p>
          </div>

          <div className="px-6 py-4">
            <footer className="flex items-center justify-between w-full mx-auto max-w-7xl">
              <div className="flex items-center space-x-4">
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
            </footer>
          </div>

          <div className="md:flex hidden items-center py-2.5 px-6 rounded-lg max-w-[280px] w-full bg-white shadow-xl text-sm font-normal text-stone-400 absolute top-2 right-2">
            <div className="relative flex flex-wrap items-center space-x-1">
              <span>Check the domain. It must be</span>{" "}
              <span className="font-semibold text-black">
                WEB.LUMIWALLET.COM.
              </span>{" "}
              <span>Avoid phishing!️</span>
              <span className="absolute top-0 flex items-center justify-center -translate-y-1/2 -left-12">
                <img src="/arrow-up.svg" alt="" className="w-3 aspect-auto" />
              </span>
            </div>
            <img src="/attention.svg" alt="" className="w-5 ml-4 aspect-auto" />
          </div>
        </div>

        <div className="flex flex-col w-full h-full max-w-md mx-auto bg-white md:overflow-y-auto md:max-w-full">
          <div className="flex items-center justify-end px-4 py-4 md:px-16">
            <p className="text-sm font-normal tracking-wide text-center text-stone-400">
              <span className="text-blue-500">Contact support</span>
            </p>
          </div>

          <div className="flex items-center px-4 py-4 md:px-16">
            <Link
              to="/"
              className="flex items-center justify-center px-4 py-2 space-x-2 text-base font-normal tracking-wide border rounded-full text-stone-800 border-stone-300"
            >
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-stone-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </span>
              <span>Back</span>
            </Link>
          </div>

          <div className="px-4 py-10 space-y-8 md:px-16">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col gap-4 sm:items-center sm:flex-row">
                <button
                  className={`text-sm md:text-lg font-semibold text-black tracking-wide py-1.5 px-6 rounded-full ${
                    currentTab === "phrase" ? "bg-stone-100" : ""
                  }`}
                  onClick={() => setCurrentTab("phrase")}
                >
                  Enter mnemonic phrase
                </button>

                <button
                  className={`text-sm md:text-lg font-semibold text-black tracking-wide py-1.5 px-6 rounded-full ${
                    currentTab === "wallet" ? "bg-stone-100" : ""
                  }`}
                  onClick={() => setCurrentTab("wallet")}
                >
                  Upload wallet file
                </button>
              </div>

              {currentTab === "phrase" && (
                <div className="flex flex-col w-full max-w-md space-y-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-0 md:justify-between">
                    <p className="w-full max-w-sm text-base font-normal tracking-wide text-stone-800">
                      Enter words separated by a space
                    </p>

                    <div className="flex items-center space-x-2 text-base font-normal text-stone-400">
                      <span className="text-black">12</span>
                      <span>|</span>
                      <span className="cursor-pointer hover:text-black">
                        15
                      </span>
                      <span>|</span>
                      <span className="cursor-pointer hover:text-black">
                        18
                      </span>
                      <span>|</span>
                      <span className="cursor-pointer hover:text-black">
                        24
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-6 group">
                      <InputBox index={1} data="" blur={false} />
                      <InputBox index={2} data="" blur={false} />
                      <InputBox index={3} data="" blur={false} />
                    </div>
                    <div className="flex items-center gap-6 group">
                      <InputBox index={4} data="" blur={false} />
                      <InputBox index={5} data="" blur={false} />
                      <InputBox index={6} data="" blur={false} />
                    </div>
                    <div className="flex items-center gap-6 group">
                      <InputBox index={7} data="" blur={false} />
                      <InputBox index={8} data="" blur={false} />
                      <InputBox index={9} data="" blur={false} />
                    </div>
                    <div className="flex items-center gap-6 group">
                      <InputBox index={10} data="" blur={false} />
                      <InputBox index={11} data="" blur={false} />
                      <InputBox index={12} data="" blur={false} />
                    </div>
                  </div>

                  <div>
                    <Link
                      to="/activity"
                      className="py-3 px-12 w-full rounded-md text-2xl tracking-wide font-normal text-white bg-[#073F6A] hover:bg-[#1F5279]"
                    >
                      Import my wallet
                    </Link>
                  </div>

                  <div>
                    <p className="mt-8 text-sm font-normal tracking-wide text-stone-400">
                      Don’t have a wallet?
                      <span className="text-blue-500">
                        Create a new Lumi Wallet
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {currentTab === "wallet" && (
                <div className="flex flex-col w-full max-w-md space-y-8">
                  <div className="max-w-sm">
                    <form>
                      <label className="block">
                        <span className="sr-only">Choose profile photo</span>
                        <input
                          type="file"
                          className="block w-full text-base cursor-pointer text-stone-500 file:me-4 file:py-2 file:px-6 file:rounded-lg file:border file:border-stone-300 file:text-sm file:font-normal file:bg-white file:text-stone-500 hover:file:bg-white file:disabled:opacity-50 file:disabled:pointer-events-none"
                        />
                      </label>
                    </form>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col w-full space-y-4">
                      <span className="text-lg font-normal text-stone-500">
                        Wallet password
                      </span>

                      <input
                        type="password"
                        className="w-full px-4 py-3 text-lg font-normal border border-transparent rounded-md outline-none bg-stone-100 focus:border-black placeholder:text-stone-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Link
                      to="/activity"
                      className="py-3 px-12 rounded-md text-2xl tracking-wide font-normal text-white bg-[#073F6A] hover:bg-[#1F5279]"
                    >
                      Import my wallet
                    </Link>
                  </div>

                  <div>
                    <p className="mt-8 text-sm font-normal tracking-wide text-stone-400">
                      Don’t have a wallet?
                      <span className="text-blue-500">
                        Create a new Lumi Wallet
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Import;

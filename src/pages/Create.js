import React from "react";
import InputBox from "../components/InputBox";
import { Link } from "react-router-dom";

const Create = () => {
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
              Your new wallet is almost ready
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

        <div className="flex flex-col w-full h-full bg-white md:overflow-y-auto">
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
            <div className="flex flex-col space-y-6">
              <p className="text-lg font-bold tracking-wide text-black">
                1. Download your wallet file
              </p>

              <p className="w-full max-w-sm text-base font-normal tracking-wide text-stone-800">
                Create a password that will protect your wallet file. Be
                careful, there is no way to restore it.
              </p>

              <div className="flex flex-col space-y-4 sm:flex-row md:flex-col">
                <div className="flex flex-col w-full max-w-2xl gap-4 sm:flex-row sm:items-center">
                  <input
                    type="password"
                    className="w-full px-4 py-3 text-lg font-normal border border-transparent rounded-md outline-none bg-stone-100 focus:border-black placeholder:text-stone-500"
                    placeholder="Enter password"
                  />

                  <Link
                    to="/activity"
                    className="py-3 px-12 rounded-md text-lg tracking-wide font-medium text-white bg-[#073F6A] hover:bg-[#1F5279]"
                  >
                    Download
                  </Link>
                </div>

                <span className="text-sm font-normal text-stone-400">
                  At least 9 characters
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <p className="text-lg font-bold tracking-wide text-black">
                2. Write down your mnemonic phrase
              </p>

              <p className="w-full max-w-sm text-base font-normal tracking-wide text-stone-800">
                Mouseover words to reveal them
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6 group">
                  <InputBox index={1} data="Hello" />
                  <InputBox index={2} data="Hello" />
                  <InputBox index={3} data="Hello" />
                </div>
                <div className="flex items-center gap-6 group">
                  <InputBox index={4} data="Hello" />
                  <InputBox index={5} data="Hello" />
                  <InputBox index={6} data="Hello" />
                </div>
                <div className="flex items-center gap-6 group">
                  <InputBox index={7} data="Hello" />
                  <InputBox index={8} data="Hello" />
                  <InputBox index={9} data="Hello" />
                </div>
                <div className="flex items-center gap-6 group">
                  <InputBox index={10} data="Hello" />
                  <InputBox index={11} data="Hello" />
                  <InputBox index={12} data="Hello" />
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center rounded-full cursor-pointer"
                    htmlFor="link"
                  >
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-stone-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-stone-500 before:opacity-0 before:transition-opacity checked:border-[#073F6A] checked:bg-[#073F6A] checked:before:bg-[#073F6A]"
                      id="link"
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mt-px font-light cursor-pointer select-none text-stone-700"
                    htmlFor="link"
                  >
                    <p className="flex font-sans text-base ml-4 antialiased font-normal leading-relaxed text-blue-[#073F6A]">
                      I have downloaded the file and remembered the password
                    </p>
                  </label>
                </div>

                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center rounded-full cursor-pointer"
                    htmlFor="link"
                  >
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-stone-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-stone-500 before:opacity-0 before:transition-opacity checked:border-[#073F6A] checked:bg-[#073F6A] checked:before:bg-[#073F6A]"
                      id="link"
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>

                  <label
                    className="mt-px ml-4 font-light cursor-pointer select-none text-stone-700"
                    htmlFor="link"
                  >
                    <p className="flex font-sans text-base antialiased font-normal leading-relaxed text-blue-[#073F6A]">
                      I have written down the mnemonic phrase
                    </p>
                  </label>
                </div>
              </div>

              <div>
                <Link
                  to="/activity"
                  className="py-3 px-12 w-full md:w-auto rounded-md text-base sm:text-2xl tracking-wide font-normal text-white bg-[#073F6A] hover:bg-[#1F5279]"
                >
                  Create a new wallet
                </Link>
              </div>

              <div>
                <p className="mt-8 text-sm font-normal tracking-wide text-stone-400">
                  Already have a wallet?
                  <span className="text-blue-500">Sign up with a mnemonic</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;

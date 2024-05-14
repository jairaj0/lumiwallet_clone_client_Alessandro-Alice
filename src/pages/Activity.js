import React from "react";

const Activity = () => {
  return (
    <div className="relative flex flex-col w-full">
      <section className="grid w-full h-screen grid-cols-12">
        <div className="h-full col-span-12 px-4 sm:overflow-hidden sm:col-span-5 bg-stone-100">
          <div className="relative flex flex-col w-full h-full">
            <div className="py-5 sm:px-6">
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

            <div className="flex flex-col py-10 space-y-4">
              <p className="w-full max-w-md mx-auto text-2xl font-medium text-black">
                Total Balance
              </p>

              <div className="flex items-center w-full max-w-md mx-auto space-x-4">
                <div className="flex items-center gap-4">
                  <p className="w-full text-5xl font-semibold text-black">
                    0 USD
                  </p>

                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-stone-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between w-full max-w-md pt-10 mx-auto">
                <p className="text-lg font-medium tracking-wide text-black">
                  Wallets
                </p>

                <div className="flex items-center space-x-4">
                  {/* <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-stone-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span> */}

                  <button className="py-1.5 rounded-md px-4 text-sm font-medium text-stone-400 tracking-wide border border-stone-400">
                    Add wallets
                  </button>
                </div>
              </div>

              <div className="pb-24 overflow-y-auto h-96 recent__bar">
                <div className="flex flex-col w-full max-w-md gap-4 mx-auto">
                  <div className="flex flex-col w-full justify-between p-4 bg-[url('/public/eth_bg.png')] h-48 bg-no-repeat bg-center bg-cover rounded-md space-y-6">
                    <div className="flex flex-col space-y-4">
                      <p className="text-base font-medium tracking-wide text-white">
                        Ethereum
                      </p>

                      <div className="flex flex-col">
                        <p className="text-xl font-medium tracking-wide text-white">
                          <span>0</span> ETH
                        </p>

                        <p className="text-base font-medium tracking-wide text-white">
                          <span>0</span> USD
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium tracking-wide text-white">
                        1 ETH = 2881.2 USD
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between w-full p-4 bg-[url('/public/btc_bg.png')] h-48 bg-no-repeat bg-center bg-cover rounded-md">
                    <div className="flex flex-col space-y-4">
                      <p className="text-base font-medium tracking-wide text-white">
                        Bitcoin
                      </p>

                      <div className="flex flex-col">
                        <p className="text-xl font-medium tracking-wide text-white">
                          <span>0</span> BTC
                        </p>

                        <p className="text-base font-medium tracking-wide text-white">
                          <span>0</span> USD
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium tracking-wide text-white">
                        1 BTC = 60957.56 USD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full col-span-12 px-4 sm:overflow-y-auto sm:col-span-7">
          <div className="flex flex-col w-full h-full bg-white">
            <div className="sm:px-8">
              <nav className="flex items-center justify-end w-full mx-auto max-w-7xl">
                <ul className="flex flex-wrap items-center gap-2 text-base font-normal tracking-wide sm:space-x-8 text-stone-600">
                  <li className="pt-3 border-t-4 cursor-pointer border-stone-700">
                    <a href="#">Wallets</a>
                  </li>
                  <li className="pt-3 border-t-4 border-transparent cursor-pointer">
                    <a href="#">Receive</a>
                  </li>
                  <li className="pt-3 border-t-4 border-transparent cursor-pointer">
                    <a href="#">Send</a>
                  </li>
                  <li className="pt-3 border-t-4 border-transparent cursor-pointer">
                    <a href="#">Exchange</a>
                  </li>
                  <li className="pt-3 border-t-4 border-transparent cursor-pointer">
                    <a href="#">Buy</a>
                  </li>
                  <li className="pt-3 border-t-4 border-transparent cursor-pointer">
                    <a href="#">Settings</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center justify-between py-8 sm:px-12">
              <p className="w-full text-2xl font-medium text-black">Activity</p>
            </div>

            <div className="flex flex-col max-w-md py-16 mx-auto space-y-4 sm:py-32">
              <p className="w-full max-w-sm text-lg font-normal tracking-wide text-center text-stone-800">
                You have made no transition yet start with something.
              </p>

              <div className="flex items-center justify-center">
                <button className="py-1.5 rounded-md px-4 text-lg font-normal text-stone-800 tracking-wide border border-stone-400">
                  Buy Crypto
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activity;

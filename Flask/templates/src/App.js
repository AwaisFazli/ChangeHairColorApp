import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="flex flex-col bg-[#272727]">
      <div className="w-full bg-black flex flex-col justify-center items-center">
        <p className="text-white font-bold font-serif text-6xl">ADAM</p>
        <p className="tracking-[0.9em] text-white font-bold font-serif">
          VERSIONS
        </p>
      </div>
      <div className="flex flex-col justify-center m-3 items-center">
        <h1 className="text-white text-2xl">VIRTUAL COLOR TRY ON</h1>
        <p className="text-white text-md justify-center">
          INSTANTLY EXPLORE NEW HAIRCOLORS WITH
        </p>
        <p className="text-white text-md justify-center">OUR 70+ SHADES</p>
      </div>
      <div className=" flex justify-center items-center text-white ">
        <div className="flex flex-col sm:flex-row rounded-2xl p-4 my-8 bg-black justify-center items-center drop-shadow-2xl shadow-[#CD485B] shadow-lg hover:shadow-2xl transition-shadow">
          <div>
            <form
              className="form-horizontal"
              action="/submit"
              method="post"
              enctype="multipart/form-data"
            >
              <div className="form-group">
                <label className="m-4" for="pwd">
                  Upload Your Image :
                </label>
                <div className="flex items-center justify-center m-4 ">
                  <label htmlFor="pwd" className="text-sm">
                    <input
                      type="file"
                      className="rounded-md"
                      accept="image/png, image/jpg, image/jpeg"
                      name="my_image"
                      id="pwd"
                    />
                  </label>
                </div>
              </div>

              <div className="m-4 text-xl bg-[#CD485B] text-white hover:text-pink-500 hover:bg-white transition-colors flex justify-center items-center rounded-md">
                <button type="submit" className="p-1 rounded-lg w-full ">
                  Try It On
                </button>
              </div>
            </form>
            <div className="m-4 w-64">
              <p className="opacity-30 text-sm">
                By Clicking “Try It On,” I cosent that ADAM Versions may process
                and store my image.
              </p>
            </div>
          </div>

          <div>
            <img src="result.jpg" alt="" className="rounded-2xl m-4" />
          </div>
        </div>
      </div>
      <footer className="p-4 py-9 flex justify-center items-center text-[8px] bottom-1">
        <p className="sm:w-6/12 opacity-30 text-white">
          All the information on this website - www.adamversions.com - is
          published in good faith and for general information purpose only. Adam
          Versions does not make any warranties about the completeness,
          reliability and accuracy of this information. Any action you take upon
          the information you find on this website (Adam Versions), is strictly
          at your own risk. Adam Versions will not be liable for any losses
          and/or damages in connection with the use of our website.
        </p>
      </footer>
    </div>
  );
}

export default App;

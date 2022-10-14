import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="w-full h-screen bg-[#272727]">
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
      <div className="container">
        <form
          className="form-horizontal"
          action="/submit"
          method="post"
          enctype="multipart/form-data"
        >
          <div className="form-group">
            <label className="control-label col-sm-2" for="pwd">
              Upload Your Image :
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control"
                placeholder="Hours Studied"
                name="my_image"
                id="pwd"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </form>

        <img src="result.jpg" alt="" />
      </div>
    </div>
  );
}

export default App;

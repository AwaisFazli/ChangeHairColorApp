import React, { useState, useEffect } from "react";

function App() {
  const [path, setPath] = useState("");

  // useEffect(() => {
  //   fetch("/submit")
  //     .then((res) => res)
  //     .then((path) => {
  //       setPath(path);
  //     });
  // }, []);

  return (
    <div class="container">
      <h1 class="jumbotron bg-primary">Image Classfication</h1>
      <br />
      <br />
      <form
        class="form-horizontal"
        action="/submit"
        method="post"
        enctype="multipart/form-data"
      >
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">
            Upload Your Image :
          </label>
          <div class="col-sm-10">
            <input
              type="file"
              class="form-control"
              placeholder="Hours Studied"
              name="my_image"
              id="pwd"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>

      <img src="result.jpg" alt="" />
    </div>
  );
}

export default App;

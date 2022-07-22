import React from "react";
import { Button, FormControl } from "react-bootstrap";

function SearchCarousel() {
  return (
    <div className="pr-5 SearchCarousel">
      <h1 className="title-search text-white">
        Find the perfect freelance services for your business
      </h1>

      <form className="input-group mr-3 py-3">
        <input
          type="text"
          className="form-control py-2"
          placeholder={`Try "building mobile app"`}
          aria-label="Try building mobile app"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="input-group-text" id="basic-addon2">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      <div className="text-white d-none d-lg-block">
        <span className="mr-2">Popular:</span>
        <Button variant="outline-light">Website Design</Button>{" "}
        <Button variant="outline-light">WordPress</Button>{" "}
        <Button variant="outline-light">Logo Design</Button>{" "}
        <Button variant="outline-light">NFT Art</Button>{" "}
      </div>
    </div>
  );
}

export default SearchCarousel;

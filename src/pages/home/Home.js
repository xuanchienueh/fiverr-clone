import React from "react";
import CarouselBanner from "components/carouselBanner/CarouselBanner";
import RencentlyViewed from "components/recentlyViewed/RencentlyViewed";
import { graphicsDesign, logoSvg } from "../../images/imageSvg";

function Home() {
  return (
    <>
      <CarouselBanner />

      <div className="my-5">
        <RencentlyViewed />
      </div>

      <div className="py-5" style={{ backgroundColor: "#f1fdf7" }}>
        <div className="d-flex justify-content-between container max-widthContainer">
          <div className="mr-5 pr-5">
            <h1 className="mb-4">A whole world of freelance talent at your fingertips</h1>
            <ul className="list-group list-unstyled">
              <li className="border-0 mb-3">
                <span className="d-flex align-items-center">
                  <i className="far fa-check-circle fa-2x"></i>
                  <h4 className="ml-2">The best for every budget</h4>
                </span>
                <p className="text-muted h5 mt-2">
                  Find high-quality services at every price point. No hourly rates, just
                  project-based pricing.
                </p>
              </li>
              <li className="border-0 mb-3">
                <span className="d-flex align-items-center">
                  <i className="far fa-check-circle fa-2x"></i>
                  <h4 className="ml-2">Quality work done quickly</h4>
                </span>
                <p className="text-muted h5 mt-2">
                  Find the right freelancer to begin working on your project within minutes.
                </p>
              </li>
              <li className="border-0 mb-3">
                <span className="d-flex align-items-center">
                  <i className="far fa-check-circle fa-2x"></i>
                  <h4 className="ml-2">Protected payments, every time</h4>
                </span>
                <p className="text-muted h5 mt-2">
                  Always know what you'll pay upfront. Your payment isn't released until you approve
                  the work.
                </p>
              </li>
              <li className="border-0 mb-3">
                <span className="d-flex align-items-center">
                  <i className="far fa-check-circle fa-2x"></i>
                  <h4 className="ml-2">24/7 support</h4>
                </span>
                <p className="text-muted h5 mt-2">
                  Questions? Our round-the-clock support team is available to help anytime,
                  anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img
              width={"100%"}
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="container max-widthContainer">
        <h1>Explore the marketplace</h1>
        <ul className="list-unstyled">
          <li>
            <img
              width={"15%"}
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
              alt="Graphics &amp; Design"
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;

import CarouselBanner from "components/carouselBanner/CarouselBanner";
import RencentlyViewed from "components/recentlyViewed/RencentlyViewed";

function Home() {
  return (
    <>
      <CarouselBanner />

      <div className="my-5">
        <RencentlyViewed />
      </div>

      <div className="py-5" style={{ backgroundColor: "#f1fdf7" }}>
        <div className="container max-widthContainer">
          <div className="row px-3">
            <div className="pr-5 col-12 col-lg-6">
              <h2 className="mb-4">A whole world of freelance talent at your fingertips</h2>
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
                    Always know what you'll pay upfront. Your payment isn't released until you
                    approve the work.
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

            <div className="d-flex justify-content-center align-items-center col-12 col-lg-6">
              <img
                width={"100%"}
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container max-widthContainer mt-4 px-4">
        <h2 className="mb-4">Explore the marketplace</h2>
        <ul className="list-unstyled d-flex flex-wrap justify-content-center row">
          <li role="button" className="col-6 col-md-4 col-lg-3 mb-5 text-center">
            <img
              width={"30%"}
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
              alt="Graphics &amp; Design"
              loading="lazy"
            />
            <h6>Graphics & Design</h6>
          </li>
          <li role="button" className="col-6 col-md-4 col-lg-3 mb-5 text-center">
            <img
              width={"30%"}
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
              alt="Digital Marketing"
              loading="lazy"
            />

            <h6>Digital Marketing</h6>
          </li>
          <li role="button" className="col-6 col-md-4 col-lg-3 mb-5 text-center">
            <img
              width={"30%"}
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
              alt="Writing &amp; Translation"
              loading="lazy"
            />

            <h6>Writing & Translation</h6>
          </li>
          <li role="button" className="col-6 col-md-4 col-lg-3 mb-5 text-center">
            <img
              width={"30%"}
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
              alt="Video &amp; Animation"
              loading="lazy"
            />

            <h6>Video & Animation</h6>
          </li>
          <li role="button" className="col-6 col-md-4 col-lg-3 mb-5 text-center">
            <img
              width={"30%"}
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
              alt="Programming &amp; Tech"
              loading="lazy"
            />

            <h6>Music & Audio</h6>
          </li>
          <li role="button" className="col-6 col-md-4 col-lg-3 mb-5 text-center">
            <img
              width={"30%"}
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
              alt="Programming &amp; Tech"
              loading="lazy"
            />

            <h6>Programming & Tech</h6>
          </li>
          <li role="button" className="col-6 col-md-4 col-lg-3 mb-5 text-center">
            <img
              width={"30%"}
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
              alt="Business"
              loading="lazy"
            />

            <h6>Business</h6>
          </li>
          <li role="button" className="col-6 col-md-4 col-lg-3 mb-5 text-center">
            <img
              width={"30%"}
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
              alt="Lifestyle"
              loading="lazy"
            />

            <h6>Lifestyle</h6>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;

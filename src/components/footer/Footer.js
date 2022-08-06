import { useEffect, useState } from "react";
import "./footer.css";

function Footer() {
  const [widthWindow, setWidthWindow] = useState(window.screen.width);

  useEffect(() => {
    const handleResizeWindow = () => {
      setWidthWindow(window.screen.width);
    };
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [window.screen.width]);

  return (
    <section id="footer">
      <div className="container max-widthContainer">
        <div className="row text-center  d-md-flex text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-md-6 col-lg-3 text-left footer-collapsibles">
            <span className="arrow-down-footer d-block d-md-none">
              <i className="fas fa-chevron-down"></i>
            </span>
            {widthWindow < 576 ? (
              <button
                className="navbar-toggle border-0 w-100 text-left"
                data-toggle="collapse"
                data-target="#category"
              >
                Categories
              </button>
            ) : (
              <h5 className="border-0">Categories</h5>
            )}

            <ul
              className={
                widthWindow < 576
                  ? "list-unstyled quick-links collapse navbar-collapse"
                  : "list-unstyled quick-links"
              }
              id="category"
            >
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Graphics & Design
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Writing & Translation
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Video & Animation
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Music & Audio
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Programming & Tech
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Data
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Business
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-3 text-left footer-collapsibles">
            <span className="arrow-down-footer d-block d-md-none">
              <i className="fas fa-chevron-down"></i>
            </span>
            {widthWindow < 576 ? (
              <button
                className="navbar-toggle border-0 w-100 text-left "
                data-toggle="collapse"
                data-target="#about"
              >
                About
              </button>
            ) : (
              <h5 className="border-0">About</h5>
            )}

            <ul
              className={
                widthWindow < 576
                  ? "list-unstyled quick-links collapse navbar-collapse"
                  : "list-unstyled quick-links"
              }
              id="about"
            >
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Careers
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Press & News
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Intellectual Property Claims
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-3 text-left footer-collapsibles">
            <span className="arrow-down-footer d-block d-md-none">
              <i className="fas fa-chevron-down"></i>
            </span>
            {widthWindow < 576 ? (
              <button
                className="navbar-toggle border-0 w-100 text-left "
                data-toggle="collapse"
                data-target="#community"
              >
                Community
              </button>
            ) : (
              <h5 className="border-0">Community</h5>
            )}

            <ul
              className={
                widthWindow < 576
                  ? "list-unstyled quick-links collapse navbar-collapse"
                  : "list-unstyled quick-links"
              }
              id="community"
            >
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Events
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Forum
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Community Standards
                </a>
              </li>
              <li>
                <a href="#" title="Design and developed by">
                  <i className="fa fa-angle-double-right" />
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" title="Design and developed by">
                  <i className="fa fa-angle-double-right" />
                  Affiliates
                </a>
              </li>
              <li>
                <a href="#" title="Design and developed by">
                  <i className="fa fa-angle-double-right" />
                  Invite a Friend
                </a>
              </li>
              <li>
                <a href="#" title="Design and developed by">
                  <i className="fa fa-angle-double-right" />
                  Become a Seller
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-3 text-left footer-collapsibles">
            <span className="arrow-down-footer d-block d-md-none">
              <i className="fas fa-chevron-down"></i>
            </span>
            {widthWindow < 576 ? (
              <button
                className="navbar-toggle border-0 w-100 text-left "
                data-toggle="collapse"
                data-target="#Support"
              >
                Support
              </button>
            ) : (
              <h5 className="border-0">Support</h5>
            )}

            <ul
              className={
                widthWindow < 576
                  ? "list-unstyled quick-links collapse navbar-collapse"
                  : "list-unstyled quick-links"
              }
              id="Support"
            >
              <li>
                <a href="#" title="Design and developed by">
                  <i className="fa fa-angle-double-right" />
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" title="Design and developed by">
                  <i className="fa fa-angle-double-right" />
                  Trust & Safety
                </a>
              </li>
              <li>
                <a href="#" title="Design and developed by">
                  <i className="fa fa-angle-double-right" />
                  Selling on Fiverr
                </a>
              </li>
              <li>
                <a href="#" title="Design and developed by">
                  <i className="fa fa-angle-double-right" />
                  Buying on Fiverr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <i className="fa fa-envelope" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
            <p>
              <u>
                <a className="h5" href="#">
                  Fiverr
                </a>
              </u>{" "}
              is freelance services marketplace.
            </p>
            <p className="h6">
              © Fiverr International Ltd. 2022
              <a className="text-green ml-2" href="#" target="_blank">
                Sunlimetech
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

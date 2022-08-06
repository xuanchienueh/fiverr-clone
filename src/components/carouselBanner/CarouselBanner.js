import { Carousel } from "react-bootstrap";

import { imageBanner } from "images/imageSvg";
import styles from "./carouselBanner.module.scss";
import Search from "./SearchCarousel";

function CarouselBanner() {
  return (
    <div className={styles.carouselBanner}>
      <div className="position-relative">
        <div className="position-relative cpn-carousel">
          <div className="position-absolute search_input">
            <Search />
          </div>
          <div className="d-none d-lg-block">
            <Carousel fade controls={false} indicators={false}>
              {imageBanner.map((img) => (
                <Carousel.Item key={img.id}>
                  <div
                    className="d-block w-100 background-carousel"
                    style={{ backgroundImage: `url(${img.url})` }}
                  />
                  <Carousel.Caption bsPrefix="carousel-caption d-none d-md-block name">
                    <div className="float-right d-flex">
                      <h5 className="mx-1 font-weight-normal">{img.name},</h5>
                      <h5>{img.job}</h5>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselBanner;

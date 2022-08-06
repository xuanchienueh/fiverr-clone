import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardViewed from "./CardViewed/CardViewed";
import styles from "./recentlyViewed.module.scss";
import datas from "./data";

let settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function RencentlyViewed() {
  return (
    <div className={styles.rencentlyViewed}>
      <h2 className="mb-4 ml-3">Recently Viewed & More</h2>
      <Slider {...settings}>
        {datas.map((data) => {
          return (
            <div className="itemViewed" key={data.gig_id}>
              <CardViewed data={data} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

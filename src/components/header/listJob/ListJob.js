import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./listJob.module.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { listJobApi } from "./dulieu";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 0,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function ListJob() {
  const [showTooltip, setShowTooltip] = useState(false);
  const renderToolTip = (props, job) => {
    let styleTooltip = {
      ...props,
      style: {
        ...props.style,
        top: "-10px",
      },
    };
    let columnCount = Math.floor(job.subTypeJobs.length / 7);
    return (
      <Tooltip id={job._id} {...styleTooltip}>
        <div
          className="list-group list-group-jobs"
          style={{ columnCount: columnCount }}
          onMouseLeave={() => setShowTooltip(false)}
          onMouseMove={() => setShowTooltip(job._id)}
        >
          {job.subTypeJobs.map((subTypeJob) => (
            <a key={subTypeJob._id} href="#" className="list-group-item list-group-item-action h6">
              {subTypeJob.name}
            </a>
          ))}
        </div>
      </Tooltip>
    );
  };

  //---
  return (
    <div className={`py-3 border-top d-none d-md-block ${styles.listJob}`}>
      <Slider {...settings}>
        {listJobApi.map((job) => (
          <div className="text-center position-relative" key={job._id}>
            <OverlayTrigger
              placement="bottom"
              show={showTooltip === job._id ? true : false}
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderToolTip(props, job)}
            >
              <div
                role="button"
                className="py-2 job-name"
                onMouseLeave={() => setShowTooltip(false)}
                onMouseMove={() => setShowTooltip(job._id)}
              >
                {job.name}
              </div>
            </OverlayTrigger>
          </div>
        ))}
      </Slider>
    </div>
  );
}

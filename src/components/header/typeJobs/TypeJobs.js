import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import styles from "./typeJobs.module.scss";
import { getListTypeMainJobAction } from "redux/manageMainWork/actionCallApi";

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

function TypeJobs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listMainWork } = useSelector((state) => state.mainWorkReducer);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    dispatch(getListTypeMainJobAction());
  }, []);

  const renderToolTip = (props, job) => {
    let styleTooltip = {
      ...props,
      style: {
        ...props.style,
        top: "-10px",
      },
    };
    let columnCount = Math.floor(job.subTypeJobs.length / 7) || 1;
    return (
      <Tooltip id={job._id} {...styleTooltip}>
        <div
          className="list-group list-group-jobs"
          style={{ columnCount: columnCount }}
          onMouseLeave={() => setShowTooltip(false)}
          onMouseMove={() => setShowTooltip(job._id)}
        >
          {job.subTypeJobs.map((subTypeJob) => (
            <Link
              key={subTypeJob._id}
              to={`/listJobs/type-job-id=${subTypeJob.typeJob}`}
              className="list-group-item list-group-item-action h6"
            >
              {subTypeJob.name}
            </Link>
          ))}
        </div>
      </Tooltip>
    );
  };

  //---
  return (
    <div className={`py-3 border-top d-none d-md-block ${styles.typeJobs}`}>
      <Slider {...settings}>
        {listMainWork?.map((job) => (
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
                onClick={() => {
                  navigate(`/detailmainjob/${job._id}`);
                  setShowTooltip(false);
                }}
                style={{ color: showTooltip === job._id && "green" }}
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

export default TypeJobs;

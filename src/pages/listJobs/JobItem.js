import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function JobItem({ data }) {
  const navigate = useNavigate();
  return (
    <div className="px-3" onClick={() => navigate(`/detailJob/${data._id}`)}>
      <Card>
        <Card.Img
          role="button"
          height={200}
          variant="top"
          src={data.image ? data.image : "/img/img-not-found.png"}
        />
        <Card.Body>
          <Card.Title>
            {/*      <div className="d-flex align-items-center">
                <div className="mr-2">
                <img
                  className="rounded-circle"
                  width={40}
                  height={40}
                  alt={data.name}
                  src={data.avatar}
                />
              </div>
              <div>
                <Link to="#" className="mb-0 text-dark">
                  {data.seller_name}
                </Link>
                <small className="d-block">{data.seller_level}</small>
              </div>
            </div> */}
          </Card.Title>
          <Card.Text role="button">
            <span className="limit-line h5" style={{ height: "2.8rem", WebkitLineClamp: 2 }}>
              {data.name}
            </span>
          </Card.Text>
          <div className="h6">
            <span className="mr-1">
              <i className=" text-warning fas fa-star"></i>
            </span>
            <span className="text-warning mr-1">{data.rating}</span>
          </div>
        </Card.Body>
        <div className="d-flex justify-content-between align-items-center px-3 py-1 border border-top-secondary border-right-0 border-left-0 border-bottom-0">
          <span className="h4 mb-0 text-muted">
            <i className="fas fa-heart"></i>
          </span>
          <div className=" align-items-center">
            <span className="h6">STARTING AT</span>
            <span className="h4 ml-1">${`${data.price}`}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

JobItem.propTypes = {
  data: PropTypes.object.isRequired,
};

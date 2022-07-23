import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function titleCase(str) {
  let convertToArray = str.toLowerCase().split("_");
  let result = convertToArray.map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()));
  switch (result[1]) {
    case "One": {
      result[1] = 1;
      break;
    }
    case "Two": {
      result[1] = 2;
      break;
    }
  }
  return result.join(" ");
}

export default function CardViewed({ data }) {
  data.seller_level = titleCase(data.seller_level);
  data.buying_review_rating = Math.round(data.buying_review_rating * 10) / 10;
  if (data.buying_review_rating % 1 === 0) {
    data.buying_review_rating = data.buying_review_rating.toString() + ".0";
  }

  //--
  return (
    <div className="px-3">
      <Card>
        <Card.Img
          role="button"
          height={200}
          variant="top"
          src={data.assets[0].cloud_img_main_gig}
        />
        <Card.Body>
          <Card.Title>
            <div className="d-flex align-items-center">
              <div className="mr-2">
                <img
                  className="rounded-circle"
                  width={40}
                  height={40}
                  alt={data.seller_name}
                  src={data.seller_img}
                />
              </div>
              <div>
                <Link to="#" className="mb-0 text-dark">
                  {data.seller_name}
                </Link>
                <small className="d-block">{data.seller_level}</small>
              </div>
            </div>
          </Card.Title>
          <Card.Text role="button">
            <span className="limit-line h5" style={{ height: "2.8rem", WebkitLineClamp: 2 }}>
              I will {data.title}
            </span>
          </Card.Text>
          <div className="h6">
            <span className="mr-1">
              <i className=" text-warning fas fa-star"></i>
            </span>
            <span className="text-warning mr-1">{data.buying_review_rating}</span>
            <span className="text-muted">{`(${data.buying_review_rating_count})`}</span>
          </div>
        </Card.Body>
        <div className="d-flex justify-content-between align-items-center px-3 py-1 border border-top-secondary border-right-0 border-left-0 border-bottom-0">
          <span className="h4 mb-0 text-muted">
            <i className="fas fa-heart"></i>
          </span>
          <div className=" align-items-center">
            <span className="h6">STARTING AT</span>
            <span className="h4 ml-1">${`${data.price_i}`}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

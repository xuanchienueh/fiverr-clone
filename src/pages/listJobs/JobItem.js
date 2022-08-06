import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function JobItem({ data }) {
  const navigate = useNavigate();
  let numberVote = data._id.slice(2);
  numberVote = numberVote.replace(/\D/g, "");
  numberVote = Number(numberVote.slice(numberVote.length - 3));

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
          <Card.Title></Card.Title>
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
            <span className="text-muted">({numberVote})</span>
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

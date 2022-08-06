import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getDetailTypeMainJobAction } from "redux/manageMainWork/actionCallApi";
import styles from "./detailMainJob.module.scss";

export default function DetailMainJob() {
  let { idMainJob } = useParams();
  const dispatch = useDispatch();
  const { subTypeMainWork } = useSelector((state) => state.mainWorkReducer);

  useEffect(() => {
    dispatch(getDetailTypeMainJobAction(idMainJob));
  }, [idMainJob]);

  return (
    <div className={`container max-widthContainer ${styles.detailMainJob}`}>
      <h1 className="text-center my-3">{subTypeMainWork.name}</h1>
      <div className="row">
        <div className="col-3 d-none d-md-block">
          <ListGroup defaultActiveKey="#">
            <ListGroup.Item className="title h3" href="#">
              {subTypeMainWork.name}
            </ListGroup.Item>

            {subTypeMainWork?.subTypeJobs?.map((subTypeJob) => {
              return (
                <ListGroup.Item
                  key={subTypeJob._id}
                  className="border-0 text-muted jobItem"
                  as={Link}
                  action
                  to={`/listJobs/type-job-id=${subTypeJob.typeJob}`}
                >
                  {subTypeJob.name}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
        <div className="col-12 col-md-9">
          <div className="row">
            {subTypeMainWork?.subTypeJobs?.map((subTypeJob) => (
              <Link
                to={`/listJobs/type-job-id=${subTypeJob.typeJob}`}
                key={subTypeJob._id}
                className="col-12 col-md-6 col-lg-4 mb-4 text-secondary"
              >
                <span>
                  <img
                    className="rounded"
                    width={"100%"}
                    src={subTypeJob.image ? subTypeJob.image : "/img/img-not-found.png"}
                    alt={subTypeJob.name}
                  />
                </span>
                <h5 className="my-3">{subTypeJob.name}</h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

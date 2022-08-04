import { useEffect, useId, useRef, useState } from "react";
import JobItem from "../../listJobs/JobItem";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import styles from "./myListGig.module.scss";
import { getListJobAction } from "redux/manageJobs/actionCallApi";
import { manageJobServices } from "services/manageJobServices";
import { alertFail } from "components/alert/alertFail";
import { alertSuccess } from "components/alert/alertSuccess";

export default function MyListGig() {
  let id1 = useId();
  let id2 = useId();
  let id3 = useId();
  const refUploadImg = useRef();
  const dispatch = useDispatch();

  const [proServices, setProServices] = useState(false);
  const [localSellers, setLocalSellers] = useState(false);
  const [onlineSellers, setOnlineSellers] = useState(false);
  const [numberRandom, setNumberRandom] = useState(0);
  const { listJobs } = useSelector((state) => state.manageJobReducer);
  const { infoUserLogin } = useSelector((state) => state.manageUserReducer);
  let idJobUploadingImg = "";
  useEffect(() => {
    dispatch(getListJobAction());
  }, [numberRandom]);

  let jobRender = listJobs.filter((job) => {
    return job.userCreated === infoUserLogin?.user?._id;
  });

  if (proServices === true)
    jobRender = jobRender.filter((dataItem) => dataItem.proServices === true);
  if (localSellers === true)
    jobRender = jobRender.filter((dataItem) => dataItem.localSellers === true);
  if (onlineSellers === true)
    jobRender = jobRender.filter((dataItem) => dataItem.onlineSellers === true);

  const handleDelete = (job) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        manageJobServices
          .deleteJobService(job._id)
          .then((result) => {
            alertSuccess();
            setNumberRandom((prev) => prev + 1);
          })
          .catch(() => alertFail());
      }
    });
  };

  const handleUploadImg = async (e) => {
    let file = await e.target.files[0];
    const data = new FormData();
    data.append("job", file);
    manageJobServices
      .uploadImgJobService(idJobUploadingImg, data)
      .then((result) => {
        alertSuccess();
        setNumberRandom((prev) => prev + 1);
      })
      .catch(() => alertFail());
  };
  return (
    <div className={`container max-widthContainer ${styles.listJobs}`}>
      {jobRender.length > 0 ? (
        <>
          <div className="d-flex justify-content-end mb-4">
            <div className="custom-control custom-switch">
              <input
                onClick={() => setProServices(!proServices)}
                type="checkbox"
                className="custom-control-input"
                id={id1}
              />
              <label role="button" className="custom-control-label h5" htmlFor={id1}>
                Pro services
              </label>
            </div>
            <div className="custom-control custom-switch mx-3">
              <input
                onClick={() => setLocalSellers(!localSellers)}
                type="checkbox"
                className="custom-control-input"
                id={id2}
              />
              <label role="button" className="custom-control-label h5" htmlFor={id2}>
                Local sellers
              </label>
            </div>
            <div className="custom-control custom-switch">
              <input
                onClick={() => setOnlineSellers(!onlineSellers)}
                type="checkbox"
                className="custom-control-input"
                id={id3}
              />
              <label role="button" className="custom-control-label h5" htmlFor={id3}>
                Online sellers
              </label>
            </div>
          </div>
          <div className="row">
            {jobRender.length > 0 ? (
              <>
                <input
                  className="d-none"
                  onChange={handleUploadImg}
                  type="file"
                  ref={refUploadImg}
                />
                {jobRender?.map((item) => {
                  return (
                    <div
                      className={`col-12 col-md-6 col-lg-3 mb-5 ${styles.jobItem}`}
                      key={item._id}
                    >
                      <JobItem data={item} />
                      <div className={`${styles.cover} p-5`}>
                        <button onClick={() => handleDelete(item)} className="btn btn-danger mb-5">
                          Delete
                        </button>
                        <Link to={`/editMyGig/${item._id}`} className="btn btn-success mb-5">
                          Edit
                        </Link>
                        <button
                          onClick={() => {
                            refUploadImg.current.click();
                            idJobUploadingImg = item._id;
                          }}
                          className="btn btn-primary"
                        >
                          Upload Image
                        </button>
                      </div>
                      <div className={`${styles.coverMobile} d-block d-lg-none`}></div>
                    </div>
                  );
                })}
              </>
            ) : (
              <h1 className="text-center mt-5">No Services Found</h1>
            )}
          </div>
        </>
      ) : (
        <div style={{ height: "100vh" }}></div>
      )}
    </div>
  );
}

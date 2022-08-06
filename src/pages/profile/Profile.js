import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { Navigate, Link } from "react-router-dom";

import { manageUserServices } from "services/manageUserServices";
import styles from "./profile.module.scss";
import { cameraImg } from "images/imageSvg";
import UpdateInfoUser from "./updateInfoUser/UpdateInfoUser";
import MoreInfoUser from "./moreInfoUser/MoreInfoUser";
import { getListServiceUserBoughtAct } from "redux/manageJobs/actionCallApi";
import { getInfoUserLogin } from "redux/manageUser/manageUserSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const { infoUserLogin } = useSelector((state) => state.manageUserReducer);
  const { listServiceUserBought } = useSelector((state) => state.manageJobReducer);
  const [showUploadAvatar, setShowUploadAvatar] = useState(false);
  const [showModal, setshowModal] = useState(false);
  let [avatar, setAvatar] = useState(infoUserLogin.user.avatar);
  const inputUpload = useRef();

  const showUploadInput = () => inputUpload.current.click();

  const handleChangeImage = async (e) => {
    let file = await e.target.files[0];
    const data = new FormData();
    data.append("avatar", file);
    try {
      let result = await manageUserServices.uploadAvatarService(data);
      setAvatar(result.data.avatar);
      dispatch(
        getInfoUserLogin({
          ...infoUserLogin,
          user: { ...infoUserLogin.user, avatar: result.data.avatar },
        })
      );
    } catch (err) {
      console.log("upload fail", err);
    }
  };

  useEffect(() => {
    dispatch(getListServiceUserBoughtAct());
  }, []);

  if (!infoUserLogin.token) return <Navigate to="/login" replace={true} />;

  return (
    <>
      <div className="container max-widthContainer">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="card">
              <div className={styles.avatar}>
                <img
                  className="card-img-top mx-auto d-block rounded-circle"
                  src={avatar}
                  alt="avatar default"
                  style={{ width: "170px", height: "170px" }}
                  onMouseOver={() => setTimeout(() => setShowUploadAvatar(true), 100)}
                  onClick={showUploadInput}
                />

                {showUploadAvatar && (
                  <div
                    role="button"
                    className="upload-img d-none d-lg-block"
                    onMouseLeave={() => setShowUploadAvatar(false)}
                    onClick={showUploadInput}
                  >
                    <div className="bg-svg">{cameraImg}</div>
                    <input
                      className="d-none"
                      ref={inputUpload}
                      type="file"
                      onChange={handleChangeImage}
                      name="uploadAvatar"
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </div>
                )}
              </div>

              <h4 className="card-title mx-auto">{infoUserLogin?.user?.name}</h4>
              <div role="button" className="mx-auto mt-2" onClick={() => setshowModal(true)}>
                <i className="far fa-edit h4 text-muted"></i>
              </div>

              <div className="card-body mx-4">
                <hr />
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <div className=" d-flex align-items-center">
                    <span className="h5 mb-0">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <span className="h6 mb-0 ml-3">From</span>
                  </div>
                  <h5>Vietnam</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <span>
                      <i className="h5 fas fa-user"></i>
                    </span>
                    <span className="ml-3 mb-0 h6">Member since</span>
                  </span>
                  <h5>Jul 2022</h5>
                </div>
              </div>
            </div>

            <MoreInfoUser setshowModal={setshowModal} />
          </div>
          <div className="con-12 col-lg-8">
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="text-muted">
                  It seem that you don't have any active Gigs. Get selling!
                </h5>
                <Link to="/createNewGig" className="btn btn-success">
                  Create a New Gig
                </Link>
              </div>
            </div>
            {listServiceUserBought?.map((service, key) => (
              <div key={key} className="card mt-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={service.image ? service.image : "/img/img-not-found.png"}
                      alt="1"
                      className="w-100"
                      role="button"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 role="button" className="card-title">
                        {service.name}
                      </h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setshowModal(false)}>
        <Modal.Header>
          <Modal.Title>Update infomation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateInfoUser setshowModal={setshowModal} />
        </Modal.Body>
      </Modal>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { manageUserServices } from "services/manageUserServices";
import styles from "./profile.module.scss";
import { cameraImg } from "images/imageSvg";
import { Modal } from "react-bootstrap";
import UpdateInfoUser from "./updateInfoUser/UpdateInfoUser";
import MoreInfoUser from "./moreInfoUser/MoreInfoUser";

const callApiUploadAvatar = async (formData) => {
  try {
    let result = await manageUserServices.uploadAvatarService(formData);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export default function Profile() {
  const { infoUserLogin } = useSelector((state) => state.manageUserReducer);

  const [showUploadAvatar, setShowUploadAvatar] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const inputUpload = useRef();
  const showUploadInput = () => inputUpload.current.click();

  const handleChangeImage = async (e) => {
    let file = await e.target.files[0];
    callApiUploadAvatar({ avatar: file });
  };

  return (
    <>
      <div className="container max-widthContainer">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="card">
              <div className={styles.avatar}>
                <img
                  className="card-img-top mx-auto d-block rounded-circle"
                  src={
                    infoUserLogin?.user?.avatar
                      ? infoUserLogin?.user?.avatar
                      : "/img/avatar-default.jpg"
                  }
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
          <div className="col-8"></div>
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

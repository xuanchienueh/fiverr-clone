import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function MoreInfoUser({ setshowModal }) {
  const { infoUserLogin } = useSelector((state) => state.manageUserReducer);
  const user = infoUserLogin.user;

  return (
    <div className="card mt-5">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-5">
          <h5>Description</h5>
          <p className="mb-0 text-info h6" role="button">
            Edit
          </p>
        </div>
        <div className="pb-3 border-bottom">
          <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
            <h5>Skill</h5>
            <p onClick={() => setshowModal(true)} className="mb-0 text-info h6" role="button">
              Edit
            </p>
          </div>
          <div>
            {user?.skill?.map((itemSkill, i) => (
              <span key={i} className='mx-1'>{itemSkill}</span>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-5 mt-4">
          <h5>Education</h5>
          <p href="#" className="mb-0 text-info h6" role="button">
            Edit
          </p>
        </div>

        <div className="pb-2">
          <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
            <h5>Certification</h5>
            <p onClick={() => setshowModal(true)} className="mb-0 text-info h6" role="button">
              Edit
            </p>
          </div>
          <div>
            {user?.certification?.map((item, i) => (
              <span key={i} className='mx-1'>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

MoreInfoUser.propTypes = {
  setshowModal: PropTypes.func.isRequired,
};

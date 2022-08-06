import PropTypes from "prop-types";
import { manageJobServices } from "services/manageJobServices";
import { alertSuccess } from "components/alert/alertSuccess";

function BookService({ jobId }) {
  const bookingService = () => {
    (async () => {
      try {
        let { status } = await manageJobServices.bookService(jobId);
        if (status === 200) {
          alertSuccess();
        }
      } catch (err) {
        console.log("bookingService fail", err);
      }
    })();
  };
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h5>Upto 7 Sections 😍</h5>
        <p className="h5 text-muted">$105</p>
      </div>
      <p className="disabled h6 my-4" style={{ color: "#dbdcdd" }}>
        Convert from Figma/Sketch/XD/PSD/etc... to HTML5 https://bit.ly/3ogT4QC
      </p>

      <ul className="list-unstyled">
        <li className="h6 text-muted">✔️ 1 page</li>
        <li className="h6 text-muted">✔️ Design customization</li>
        <li className="h6 text-muted">✔️ Content upload</li>
        <li className="h6 text-muted">✔️ Responsive design</li>
        <li className="h6 text-muted">✔️ Include source code</li>
      </ul>
      <button onClick={bookingService} className="btn-lg btn btn-success btn-block my-4">
        Continue ($105)
      </button>
      <div role="button" className="h5 text-success text-center">
        Compare Package
      </div>
    </div>
  );
}

export default BookService;

BookService.propTypes = {
  jobId: PropTypes.string.isRequired,
};

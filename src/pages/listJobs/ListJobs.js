import { useEffect, useId, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getListJobAction,
  getListJobBaseMainJobAction,
  searchJobByNameAction,
} from "redux/manageJobs/actionCallApi";
import { searchJobByName } from "redux/manageJobs/manageJobSlice";
import JobItem from "./JobItem";
import styles from "./listJob.module.scss";

export default function ListJobs() {
  let id1 = useId();
  let id2 = useId();
  let id3 = useId();
  const { valueSearch } = useParams();
  const [indexPage, setIndexPage] = useState(0);
  let [jobRender, setJobRender] = useState([]);
  const [proServices, setProServices] = useState(false);
  const [localSellers, setLocalSellers] = useState(false);
  const [onlineSellers, setOnlineSellers] = useState(false);
  const dispatch = useDispatch();
  const { resultSearchJobByName, listJobBaseMainJob } = useSelector(
    (state) => state.manageJobReducer
  );

  useEffect(() => {
    if (valueSearch.slice(0, valueSearch.indexOf("=", 0) + 1) === "type-job-id=") {
      dispatch(getListJobBaseMainJobAction(valueSearch.slice(valueSearch.indexOf("=", 0) + 1)));
      dispatch(searchJobByName([]));
    } else {
      dispatch(getListJobAction());
    }
  }, [valueSearch]);
  useEffect(() => {
    dispatch(searchJobByNameAction(valueSearch));
    if (jobRender.length === 0) setJobRender(data.slice(0, 20));
  }, [valueSearch]);

  let data = resultSearchJobByName;
  if (resultSearchJobByName.length === 0) {
    data = listJobBaseMainJob;
  }

  if (proServices === true) data = data.filter((dataItem) => dataItem.proServices === true);
  if (localSellers === true) data = data.filter((dataItem) => dataItem.localSellers === true);
  if (onlineSellers === true) data = data.filter((dataItem) => dataItem.onlineSellers === true);

  useEffect(() => {
    setJobRender(data.slice(indexPage * 20, indexPage * 20 + 20));
    window.scrollTo({ top: 50, behavior: "smooth" });
  }, [indexPage]);

  const columns = [{ dataField: "_id", text: "" }];
  const options = {
    sizePerPage: 20,
    paginationSize: 8,
    hidePageListOnlyOnePage: true,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
    showTotal: true,
    onPageChange: (page, sizePerPage) => setIndexPage(+page - 1),
  };

  if (jobRender.length === 0) {
    jobRender = data.slice(0, 20);
  }

  return (
    <div className={`container max-widthContainer ${styles.listJobs}`}>
      {data.length > 0 ? (
        <>
          {valueSearch.slice(0, valueSearch.indexOf("=", 0) + 1) === "type-job-id=" ? (
            <p></p>
          ) : (
            <h1>Results for "{valueSearch}"</h1>
          )}

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
            {jobRender?.map((item) => {
              return (
                <div className="col-12 col-md-6 col-lg-3 mb-5" key={item._id}>
                  <JobItem data={item} />
                </div>
              );
            })}
          </div>
          <div style={{ display: data.length < 21 && "none" }}>
            <BootstrapTable
              keyField="_id"
              data={data}
              columns={columns}
              pagination={paginationFactory(options)}
            />
          </div>
        </>
      ) : (
        <h1 className="text-center my-5">No Services Found For Your Search</h1>
      )}
    </div>
  );
}

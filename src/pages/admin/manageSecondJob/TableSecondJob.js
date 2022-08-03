import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Input, Table, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { getListSecondJobAct } from "redux/manageSecondJob/actionCallApi";
import { getListTypeMainJobAction } from "redux/manageMainWork/actionCallApi";
import { manageSecondJobService } from "services/manageSecondJob";

const { Search } = Input;

export default function TableSecondJob() {
  const [resultSearchName, setResultSearchName] = useState([]);
  const dispatch = useDispatch();
  const refUploadImg = useRef();
  const { listSecondJob } = useSelector((state) => state.manageSecondJobReducer);
  let idJobUploadingImg = "";
  let data = [];

  useEffect(() => {
    dispatch(getListSecondJobAct());
    dispatch(getListTypeMainJobAction());
    return () => setResultSearchName([]);
  }, []);

  const onSearch = (values) => {
    let resultSearch = listSecondJob.filter((job) => {
      return job?.name?.toLowerCase().includes(values.toLowerCase());
    });
    resultSearch.length > 0 && setResultSearchName(resultSearch);
  };
  const columns = [
    { title: "Name", dataIndex: "name", key: "_id" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/add-edit-SecondJob/${record._id}`} className="btn btn-outline-success">
            <i className="fas fa-edit"></i>
          </Link>

          <Popconfirm
            title="Are you sure？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDeleteSecondJob(record._id)}
          >
            <a className="btn btn-outline-danger" href="#">
              <i className="fas fa-trash"></i>
            </a>
          </Popconfirm>

          <a
            className="btn btn-outline-info"
            onClick={() => {
              refUploadImg.current.click();
              idJobUploadingImg = record._id;
            }}
          >
            <i className="fas fa-upload"></i>
          </a>
        </Space>
      ),
    },
  ];

  function handleDeleteSecondJob(idSecondJob) {
    manageSecondJobService
      .deleteScondJobService(idSecondJob)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Success",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(getListSecondJobAct());
        setResultSearchName([]);
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "errors",
          title: "Fail",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }
  if (resultSearchName.length > 0) {
    data = resultSearchName;
  } else {
    data = listSecondJob;
  }

  const handleChangeImage = async (e) => {
    let file = await e.target.files[0];
    const data = new FormData();
    data.append("subtype", file);
    try {
      let { status } = await manageSecondJobService.upLoadSeconJobImgService(
        idJobUploadingImg,
        data
      );
      if (status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Upload Success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input
        onChange={handleChangeImage}
        type="file"
        name="subtype"
        className="d-none"
        ref={refUploadImg}
        accept="image/png, image/jpeg, image/jpg"
      />
      <div className="d-block d-md-flex align-items-center justify-content-between pt-5">
        <Link to="/admin/add-edit-SecondJob" className="btn btn-primary mb-3 mb-md-0">
          Add Second Job
        </Link>
        <Search
          placeholder="Search name"
          onSearch={onSearch}
          enterButton
          style={{ width: 360 }}
          allowClear
          size="large"
        />
      </div>
      <Table columns={columns} dataSource={data} rowKey={"_id"} />
    </div>
  );
}

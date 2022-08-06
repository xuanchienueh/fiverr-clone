import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Input, Table, Popconfirm } from "antd";
import { Link } from "react-router-dom";

import { getListSubJobAct } from "redux/manageSubJob/actionCallApi";
import { getListTypeMainJobAction } from "redux/manageMainWork/actionCallApi";
import { manageSubJobService } from "services/manageSubJob";
import { alertSuccess } from "components/alert/alertSuccess";
import { alertFail } from "components/alert/alertFail";

const { Search } = Input;

export default function TableSubJob() {
  const [resultSearchName, setResultSearchName] = useState([]);
  const dispatch = useDispatch();
  const refUploadImg = useRef();
  const { listSubJob } = useSelector((state) => state.manageSubJobReducer);
  let idJobUploadingImg = "";
  let data = [];

  useEffect(() => {
    dispatch(getListSubJobAct());
    dispatch(getListTypeMainJobAction());
    return () => setResultSearchName([]);
  }, []);

  const onSearch = (values) => {
    let resultSearch = listSubJob.filter((job) => {
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
          <Link to={`/admin/add-edit-SubJob/${record._id}`} className="btn btn-outline-success">
            <i className="fas fa-edit"></i>
          </Link>

          <Popconfirm
            title="Are you sure？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDeleteSubJob(record._id)}
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

  function handleDeleteSubJob(idSubJob) {
    manageSubJobService
      .deleteScondJobService(idSubJob)
      .then(() => {
        alertSuccess();

        dispatch(getListSubJobAct());
        setResultSearchName([]);
      })
      .catch(() => alertFail());
  }
  if (resultSearchName.length > 0) {
    data = resultSearchName;
  } else {
    data = listSubJob;
  }

  const handleChangeImage = async (e) => {
    let file = await e.target.files[0];
    const data = new FormData();
    data.append("subtype", file);
    try {
      let { status } = await manageSubJobService.upLoadSeconJobImgService(idJobUploadingImg, data);
      if (status === 200) {
        alertSuccess();
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
        <Link to="/admin/add-edit-SubJob" className="btn btn-primary mb-3 mb-md-0">
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

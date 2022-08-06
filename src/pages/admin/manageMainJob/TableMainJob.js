import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Popconfirm, Space, Table } from "antd";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { getListTypeMainJobAction } from "redux/manageMainWork/actionCallApi";
import { mainWorkService } from "services/mainWorkService";

let data = [];

export default function TableMainJob() {
  const [render, setRender] = useState(0);
  const dispatch = useDispatch();
  const { listMainWork } = useSelector((state) => state.mainWorkReducer);
  useEffect(() => {
    dispatch(getListTypeMainJobAction());
  }, [render]);

  const handleAddMainJob = () => {
    Swal.fire({
      title: "Add Main Job",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
        placeholder: "name's job",
      },
      showCancelButton: true,
      confirmButtonText: "Add",
      showLoaderOnConfirm: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value.length > 0) {
            resolve();
          } else {
            resolve("Name is required!");
          }
        });
      },
      preConfirm: (name) => {
        const payload = { name, status: false };
        console.log(payload);
        mainWorkService
          .createMainJobService(payload)
          .then(() => {
            setRender((prev) => prev + 1);
          })
          .catch((err) => {
            console.log("createMainJobService fail", err);
          });
      },
    });
  };

  const handleDeleteMainJob = (idMainJob) => {
    mainWorkService.deleteMainJobService(idMainJob).then(() => {
      setRender((prev) => prev + 1);
    });
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "_id" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/editMainJob/${record._id}`} className="btn btn-outline-success">
            Edit
          </Link>

          <Popconfirm
            title="Are you sure？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDeleteMainJob(record._id)}
          >
            <a className="btn btn-outline-danger" href="#">
              Delete
            </a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  data = listMainWork;
  return (
    <div>
      <button onClick={handleAddMainJob} className="btn btn-primary ml-5">
        Add Main Job
      </button>
      <Table columns={columns} dataSource={data} rowKey={"_id"} />
    </div>
  );
}

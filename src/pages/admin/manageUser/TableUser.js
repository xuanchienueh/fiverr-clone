import { useEffect, useMemo, useState } from "react";
import { Form, Menu, Input, Switch, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";

import { getListUserAction } from "redux/manageUser/actionCallApi";
import { manageUserServices } from "services/manageUserServices";
import { getListUser } from "redux/manageUser/manageUserSlice";
import styles from "./tableUser.module.scss";
import EditUser from "./editUser/EditUser";
import { alertFail } from "components/alert/alertFail";

const { Search } = Input;

function getItem(label, key, children, type) {
  return { key, children, label, type };
}

const TableUser = () => {
  const [yScroll, setYScroll] = useState(false);
  const xScroll = false;

  const handleYScrollChange = (enable) => setYScroll(enable);

  const scroll = {};
  if (yScroll) scroll.y = 480;
  if (xScroll) scroll.x = "100vw";

  const columns = useMemo(
    () => [
      { title: "Name", dataIndex: "name" },
      { title: "Email", dataIndex: "email" },
      { title: "Phone", dataIndex: "phone" },
      {
        title: "Action",
        key: "action",
        render: (row) => (
          <Menu
            theme="light"
            items={[
              getItem(<div className="text-center">More</div>, "sub1", [
                getItem(
                  <div
                    className="text-center"
                    onClick={() => handleDeleteUser(row, dispatch, valueSearch, setData)}
                  >
                    Delete
                  </div>,
                  "1"
                ),
                getItem(
                  <div
                    className="text-center"
                    onClick={() => {
                      setShowModal(true);
                      localStorage.setItem("editUserAdmin", JSON.stringify(row));
                    }}
                  >
                    Edit
                  </div>,
                  "2"
                ),
              ]),
            ]}
          />
        ),
      },
    ],
    []
  );

  const tableColumns = columns.map((item) => ({ ...item }));

  const tableProps = { bordered: true, size: "small", showHeader: true, scroll };

  //--------------
  const dispatch = useDispatch();
  const { listUser } = useSelector((state) => state.manageUserReducer);
  useEffect(() => {
    dispatch(getListUserAction());
  }, []);

  const [data, setData] = useState(listUser);
  const [valueSearch, setValueSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [reloadListUser, setReloadListUser] = useState(false);
  useEffect(() => {
    if (reloadListUser) {
      handleSearch(valueSearch, dispatch, setData);
    }
    return () => setReloadListUser(false);
  }, [reloadListUser]);

  const onSearch = (value) => {
    handleSearch(value, dispatch, setData);
  };

  return (
    <div className={styles.tableUser}>
      <div className="container" style={{ transform: "translateX(40px)" }}>
        <div className="row">
          <div className="d-none d-lg-block col-lg-3">
            <Form layout="inline" className="components-table-demo-control-bar mb-3">
              <Form.Item label="Fixed Header">
                <Switch checked={!!yScroll} onChange={handleYScrollChange} />
              </Form.Item>
            </Form>
          </div>

          <div className="col-6 col-lg-5">
            <Search
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value)}
              allowClear
              placeholder="Search name"
              onSearch={onSearch}
              enterButton
            />
          </div>
          <div className="col-6 col-lg-4 text-center">
            <Link
              to="/admin/adduser"
              className="btn btn-info mt-lg-0"
              style={{ padding: ".2rem .75rem" }}
            >
              Add Admin User
            </Link>
          </div>
        </div>
      </div>

      <Table
        {...tableProps}
        pagination={{ position: ["bottomRight"] }}
        columns={tableColumns}
        dataSource={listUser.length === 0 ? data : listUser}
        scroll={scroll}
        rowKey={"_id"}
      />
      {/* Modal eidt user */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Update infomation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUser setReloadListUser={setReloadListUser} setshowModal={setShowModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TableUser;

function handleDeleteUser(infoUser, dispatch, valueSearch, setData) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      manageUserServices
        .deleteUserService(infoUser._id)
        .then((result) => {
          handleSearch(valueSearch, dispatch, setData);
          Swal.fire("Deleted!", "", "success");
        })
        .catch((err) => {
          console.log("delete user fail", err);
          alertFail();
        });
    }
  });
}

function handleSearch(valueSearch, dispatch, setData) {
  if (valueSearch.length > 0) {
    manageUserServices
      .searchUserService(valueSearch)
      .then((result) => {
        dispatch(getListUser([]));
        setData(result.data);
      })
      .catch((err) => console.log(err));
  } else {
    dispatch(getListUserAction());
  }
}

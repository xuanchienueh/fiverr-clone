import { useState, useEffect } from "react";
import { Form, Input, InputNumber, Rate, Switch, Cascader } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getListTypeMainJobAction } from "redux/manageMainWork/actionCallApi";
import { manageJobServices } from "services/manageJobServices";
import styles from "./createNewGig.module.scss";
import { alertSuccess } from "components/alert/alertSuccess";

const CreateNewGig = () => {
  const [widthWindow, setWidthWindow] = useState(window.screen.width);
  const [resultSwitch, setResultSwitch] = useState({
    proServices: false,
    localSellers: false,
    onlineSellers: false,
  });
  const dispatch = useDispatch();
  const { listMainWork } = useSelector((state) => state.mainWorkReducer);
  useEffect(() => {
    const handleResizeWindow = () => {
      setWidthWindow(window.screen.width);
    };
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [window.screen.width]);
  useEffect(() => {
    dispatch(getListTypeMainJobAction());
  }, []);

  let option = listMainWork.map((mainWork) => {
    return {
      label: mainWork.name,
      value: mainWork._id,
      children: mainWork.subTypeJobs.map((typeJob) => ({
        label: typeJob.name,
        value: typeJob._id,
      })),
    };
  });
  const onFinish = (values) => {
    values.deliveryTime = true;
    values.type = values.typeAndSubType[0];
    values.subType = values.typeAndSubType[1];
    delete values.typeAndSubType;
    if (widthWindow < 500) {
      values = { ...values, ...resultSwitch };
    }
    manageJobServices
      .createYourJobService(values)
      .then((reslult) => {
        alertSuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeSwitch = (checked, label) => {
    setResultSwitch({ ...resultSwitch, [label]: checked });
  };

  return (
    <div className={styles.CreateNewGig}>
      <div className="container">
        <h1 className="text-center mb-4">Create a new gig!</h1>
        <Form
          name="createNewGig"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{
            rating: 1,
            proServices: false,
            localSellers: false,
            onlineSellers: false,
          }}
          size="large"
          onFinish={onFinish}
        >
          <Form.Item
            label="Title"
            name="name"
            rules={[{ required: true, message: "Name is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: "Rating is required!" }]}
          >
            <Rate count={10} />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Price must be a number!" }]}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item
            label="Type"
            name="typeAndSubType"
            rules={[{ required: true, message: "Type is required!" }]}
          >
            <Cascader options={option} />
          </Form.Item>
          {widthWindow < 500 ? (
            <>
              <div className="mb-4">
                <label style={{ width: "90px" }} className="mr-3">
                  Pro service:{" "}
                </label>
                <Switch onChange={(value) => handleChangeSwitch(value, "proServices")} />
              </div>
              <div className="mb-4">
                <label style={{ width: "90px" }} className="mr-3">
                  Local Seller:{" "}
                </label>
                <Switch onChange={(value) => handleChangeSwitch(value, "localSellers")} />
              </div>
              <div className="mb-4">
                <label style={{ width: "90px" }} className="mr-3">
                  Online Seller:{" "}
                </label>
                <Switch onChange={(value) => handleChangeSwitch(value, "onlineSellers")} />
              </div>
            </>
          ) : (
            <>
              <Form.Item label="Pro Service" name="proServices" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Form.Item label="Local Seller" name="localSellers" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Form.Item label="Online Seller" name="onlineSellers" valuePropName="checked">
                <Switch />
              </Form.Item>
            </>
          )}

          <div>
            <div>
              <button
                className="btn px-5 d-block d-lg-none mx-auto btn-outline-success"
                type="submit"
              >
                Create
              </button>
              <button
                className="btn px-5 d-none mx-auto d-lg-block btn-outline-success"
                type="submit"
              >
                Create
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateNewGig;

import { useState, useEffect } from "react";
import { Form, Input, InputNumber, Rate, Switch } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import { manageJobServices } from "services/manageJobServices";
import styles from "../createNewGig/createNewGig.module.scss";
import { alertSuccess } from "components/alert/alertSuccess";
import useCallApi from "hooks/useCallApi";
import { alertFail } from "components/alert/alertFail";

const EditMyGig = () => {
  const [widthWindow, setWidthWindow] = useState(window.screen.width);
  const { GigId } = useParams();
  const navigate = useNavigate();
  let detailGig = useCallApi(manageJobServices.getDetailJobService, GigId);
  let [resultSwitch, setResultSwitch] = useState(null);

  if (!resultSwitch) {
    resultSwitch = {
      proServices: detailGig?.proServices,
      localSellers: detailGig?.localSellers,
      onlineSellers: detailGig?.onlineSellers,
    };
  }

  useEffect(() => {
    const handleResizeWindow = () => {
      setWidthWindow(window.screen.width);
    };
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [window.screen.width]);

  const onFinish = (values) => {
    values.deliveryTime = true;
    values.type = detailGig?.type?._id;
    values.subType = detailGig?.subType?._id;

    if (widthWindow < 500) {
      values = { ...values, ...resultSwitch };
    }

    (async () => {
      try {
        const result = await manageJobServices.updateJobService(detailGig?._id, values);
        alertSuccess();
        navigate("/myGigs");
      } catch (err) {
        console.log(err);
        alertFail();
      }
    })();
  };

  const handleChangeSwitch = (checked, label) => {
    setResultSwitch({ ...resultSwitch, [label]: checked });
  };

  return detailGig ? (
    <div className={styles.CreateNewGig}>
      <div className="container">
        <h1 className="text-center mb-4">Edit your gig!</h1>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{
            rating: detailGig?.rating,
            price: detailGig?.price,
            name: detailGig?.name,
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

          {widthWindow < 500 ? (
            <>
              <div className="mb-4">
                <label style={{ width: "90px" }} className="mr-3">
                  Pro service:{" "}
                </label>
                <Switch
                  defaultChecked={detailGig?.proServices}
                  onChange={(value) => handleChangeSwitch(value, "proServices")}
                />
              </div>
              <div className="mb-4">
                <label style={{ width: "90px" }} className="mr-3">
                  Local Seller:{" "}
                </label>
                <Switch
                  defaultChecked={detailGig?.localSellers}
                  onChange={(value) => handleChangeSwitch(value, "localSellers")}
                />
              </div>
              <div className="mb-4">
                <label style={{ width: "90px" }} className="mr-3">
                  Online Seller:{" "}
                </label>
                <Switch
                  defaultChecked={detailGig?.onlineSellers}
                  onChange={(value) => handleChangeSwitch(value, "onlineSellers")}
                />
              </div>
            </>
          ) : (
            <>
              <Form.Item label="Pro Service" name="proServices" valuePropName="checked">
                <Switch defaultChecked={detailGig?.proServices} />
              </Form.Item>
              <Form.Item label="Local Seller" name="localSellers" valuePropName="checked">
                <Switch defaultChecked={detailGig?.localSellers} />
              </Form.Item>
              <Form.Item label="Online Seller" name="onlineSellers" valuePropName="checked">
                <Switch defaultChecked={detailGig?.onlineSellers} />
              </Form.Item>
            </>
          )}

          <div>
            <button
              className="btn px-5 d-block d-lg-none mx-auto btn-outline-success"
              type="submit"
            >
              Edit
            </button>
            <button
              className="btn px-5 d-none mx-auto d-lg-block btn-outline-success"
              type="submit"
            >
              Edit
            </button>
          </div>
        </Form>
      </div>
    </div>
  ) : null;
};

export default EditMyGig;

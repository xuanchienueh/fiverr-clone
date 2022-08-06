import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, DatePicker, Select } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import styles from "./updateInfoUser.module.scss";
import { manageUserServices } from "services/manageUserServices";
import { getInfoUserLogin } from "redux/manageUser/manageUserSlice";

const { Option } = Select;
const formItemLayout = {
  labelCol: { xs: { span: 10 }, sm: { span: 9 } },
  wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
};

export default function UpdateInfoUser({ setshowModal }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [getInfoDetailUser, setGetInfoDetailUser] = useState(false);
  const { infoUserLogin } = useSelector((state) => state.manageUserReducer);

  useEffect(() => {
    if (getInfoDetailUser && infoUserLogin.token) {
      manageUserServices
        .getInfoDetailUserService(infoUserLogin.user._id)
        .then((result) => {
          dispatch(getInfoUserLogin({ user: { ...result.data }, token: infoUserLogin.token }));
        })
        .catch((err) => console.log(err));
    }

    return () => setGetInfoDetailUser(false);
  }, [getInfoDetailUser]);

  const onFinish = (values) => {
    setshowModal(false);
    values.email = infoUserLogin.user.email;
    values.gender = infoUserLogin.user.gender;
    values.birthday = moment(values.birthday).format("YYYY-MM-DD");
    let result = manageUserServices.updateInfoUserService(infoUserLogin.user._id, values);
    result.then(() => setGetInfoDetailUser(Math.random())).catch((err) => console.log(err));
  };

  return (
    <div className={styles.uploadInfoUser}>
      <Form
        {...formItemLayout}
        form={form}
        name="updateInfoUser"
        onFinish={onFinish}
        initialValues={{
          name: infoUserLogin?.user?.name,
          phone: infoUserLogin?.user?.phone,
          skill: infoUserLogin?.user?.skill,
          certification: infoUserLogin?.user?.certification,
          birthday: moment(infoUserLogin?.user?.birthday),
        }}
        scrollToFirstError
        size="large"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
            {
              message: "Your name is invalid!",
              type: "string",
              pattern:
                /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
            {
              message: "Your phone number is invalid!",
              pattern: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
            },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Birthday"
          name="birthday"
          rules={[{ required: true, message: "Please select your birthday!" }]}
        >
          <DatePicker format={"DD/MM/YYYY"} />
        </Form.Item>

        <Form.Item name="skill" label="Skill">
          <Select mode="multiple" placeholder="select your skills">
            <Option value="LoL">LoL</Option>
            <Option value="WEB">WEB</Option>
            <Option value="DESIGN">DESIGN</Option>
          </Select>
        </Form.Item>
        <Form.Item name="certification" label="Certification">
          <Select mode="multiple" placeholder="select your certification">
            <Option value="DIB">DIB</Option>
            <Option value="PYNOW">PYNOW</Option>
          </Select>
        </Form.Item>
        <div className="text-center">
          <button
            onClick={() => setshowModal(false)}
            type="button"
            className="btn btn-outline-danger mr-3"
          >
            Close
          </button>

          <button type="submit" className="btn btn-outline-success">
            Update
          </button>
        </div>
      </Form>
    </div>
  );
}

UpdateInfoUser.propTypes = {
  setshowModal: PropTypes.func.isRequired,
};

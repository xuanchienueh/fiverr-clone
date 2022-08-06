import { useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Input, DatePicker, Select } from "antd";
import moment from "moment";

import styles from "./editUser.module.scss";
import { manageUserServices } from "services/manageUserServices";

const { Option } = Select;
const formItemLayout = {
  labelCol: { xs: { span: 10 }, sm: { span: 9 } },
  wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
};

export default function EditUser({ setshowModal, setReloadListUser }) {
  let userEditing = JSON.parse(localStorage.getItem("editUserAdmin"));
  const [form] = Form.useForm();

  useEffect(() => {
    return () => {
      localStorage.removeItem("editUserAdmin");
    };
  }, []);

  const onFinish = (values) => {
    values.email = userEditing.email;
    values.gender = userEditing.gender;
    values.birthday = moment(values.birthday).format("YYYY-MM-DD");
    setshowModal(false);
    let result = manageUserServices.updateInfoUserService(userEditing._id, values);
    result.then(() => setReloadListUser(Math.random() + 1)).catch((err) => console.log(err));
  };

  return (
    <div className={styles.uploadInfoUser}>
      <Form
        {...formItemLayout}
        form={form}
        name="updateInfoUser"
        onFinish={onFinish}
        initialValues={{
          name: userEditing?.name,
          phone: userEditing?.phone,
          skill: userEditing?.skill,
          certification: userEditing?.certification,
          birthday: moment(userEditing?.birthday),
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

EditUser.propTypes = {
  setshowModal: PropTypes.func.isRequired,
};

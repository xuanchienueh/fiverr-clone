import { Form, Input, Select, DatePicker } from "antd";
import moment from "moment";

import { manageUserServices } from "services/manageUserServices";
import styles from "./addUserAdmin.module.scss";
import { alertSuccess } from "components/alert/alertSuccess";

const { Option } = Select;

const formItemLayout = {
  labelCol: { xs: { span: 16 }, sm: { span: 16 } },
  wrapperCol: { xs: { span: 36 }, sm: { span: 16 } },
};

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    values.birthday = moment().format("YYYY-MM-DD");
    values = { ...values, role: "ADMIN" };
    console.log(values);
    let promise = manageUserServices.createAdminUserService(values);
    promise
      .then((result) => {
        alertSuccess();
      })
      .catch((err) => {
        console.log("create admin user fail", err);
      });
  };

  return (
    <div className={`container ${styles.registerUser}`}>
      <h1 className="text-center my-3 mt-lg-5">Create Admin Account</h1>
      <br />
      <Form
        {...formItemLayout}
        form={form}
        name="create-acount-admin"
        onFinish={onFinish}
        initialValues={{}}
        scrollToFirstError
        size="large"
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

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
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value={true}>Male</Option>
            <Option value={false}>Female</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Birthday"
          name="birthday"
          rules={[{ required: true, message: "Please select your birthday!" }]}
        >
          <DatePicker format={"DD/MM/YYYY"} />
        </Form.Item>

        <Form.Item
          name="skill"
          label="Skill"
          rules={[{ required: true, message: "Please select your skills!" }]}
        >
          <Select mode="multiple" placeholder="select your skills">
            <Option value="LoL">LoL</Option>
            <Option value="WEB">WEB</Option>
            <Option value="DESIGN">DESIGN</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="certification"
          label="Certification"
          rules={[{ required: true, message: "Please select your certification!" }]}
        >
          <Select mode="multiple" placeholder="select your certification">
            <Option value="DIB">DIB</Option>
            <Option value="PYNOW">PYNOW</Option>
          </Select>
        </Form.Item>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-success mb-5">
            Register
          </button>
          <button
            onClick={() => form.resetFields()}
            type="button"
            className="btn btn-outline-danger ml-5 mb-5"
          >
            Reset form
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Register;

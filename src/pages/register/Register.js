import { Form, Input, Select, DatePicker } from "antd";
import moment from "moment";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { manageUserServices } from "services/manageUserServices";
import styles from "./register.module.scss";
import { useSelector } from "react-redux";
import { alertSuccess } from "components/alert/alertSuccess";
import { alertFail } from "components/alert/alertFail";

const { Option } = Select;

const formItemLayout = {
  labelCol: { xs: { span: 16 }, sm: { span: 16 } },
  wrapperCol: { xs: { span: 36 }, sm: { span: 16 } },
};

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { infoUserLogin } = useSelector((state) => state.manageUserReducer);
  if (Object.entries(infoUserLogin).length > 0) {
    return <Navigate to="/" replace={true} />;
  }

  const onFinish = (values) => {
    values.birthday = moment().format("YYYY-MM-DD");
    values = { ...values, type: "ADMIN" };

    let result = manageUserServices.customerRegisterService(values);
    result
      .then((resolve) => {
        alertSuccess();
        navigate("/login");
      })
      .catch((reject) => {
        console.log(reject);
        alertFail();
      });
  };

  return (
    <div className={`container ${styles.registerUser}`}>
      <h1 className="text-center my-3 mt-lg-5">Register</h1>
      <p className="text-center my-3 mb-lg-5 ">
        Create your account. It's free and only takes a minute.
      </p>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
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

        <div className="text-center btn-submit ">
          <button type="submit" className="btn btn-outline-success ">
            Register
          </button>
        </div>
      </Form>
      <div className="text-center my-4">
        Already have an account?{" "}
        <Link className="h5" to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Register;

import { useEffect } from "react";
import { Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getDetailTypeMainJobAction } from "redux/manageMainWork/actionCallApi";
import { getsubTypeMainWork } from "redux/manageMainWork/mainWorkSlice";
import { mainWorkService } from "services/mainWorkService";
import styles from "./editMianJob.module.scss";

const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
  size: "large",
};

const EditMainJob = () => {
  const { mainJobId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { subTypeMainWork } = useSelector((state) => state.mainWorkReducer);
  useEffect(() => {
    dispatch(getDetailTypeMainJobAction(mainJobId));

    return () => dispatch(getsubTypeMainWork({}));
  }, [mainJobId]);

  let subTypeJobs = subTypeMainWork?.subTypeJobs?.map((subTypeJob) => {
    return subTypeJob.name;
  });

  const onFinish = (values) => {
    let subTypeJobs = subTypeMainWork.subTypeJobs.filter((item) => {
      return values.subTypeJobs.some((subTypeJob) => subTypeJob === item.name);
    });
    subTypeJobs = subTypeJobs.map((_) => _._id);
    values.subTypeJobs = subTypeJobs;
    values.status = true;

    mainWorkService
      .updateMainJobService(mainJobId, values)
      .then((result) => {
        navigate("/admin/listmainjob");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return subTypeJobs ? (
    <div className={`pt-5 ${styles.EditMainJob}`}>
      <Form
        name="editMainJob"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          subTypeJobs: subTypeJobs && subTypeJobs,
          name: subTypeMainWork?.name,
        }}
      >
        <Form.Item label="Name">
          <Form.Item name="name">
            <Input />
          </Form.Item>
        </Form.Item>

        <Form.Item
          name="subTypeJobs"
          label="Sub Type Jobs"
          rules={[{ required: true, message: "Please select your type job!", type: "array" }]}
        >
          <Select mode="multiple">
            {subTypeMainWork?.subTypeJobs?.map((item, i) => (
              <Option key={i} value={item._id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <div>
          <button type="submit" className="d-block mx-auto btn btn-success">
            Submit
          </button>
        </div>
      </Form>
    </div>
  ) : null;
};

export default EditMainJob;

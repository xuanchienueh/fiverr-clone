import { useEffect } from "react";
import { Form, Input, Select } from "antd";
import { useParams } from "react-router-dom";
import useCallApi from "hooks/useCallApi";
import { useDispatch, useSelector } from "react-redux";

import { getListTypeMainJobAction } from "redux/manageMainWork/actionCallApi";
import { manageSubJobService } from "services/manageSubJob";
import { alertSuccess } from "components/alert/alertSuccess";
import { alertFail } from "components/alert/alertFail";

const AddSubJob = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { idSubJob } = useParams();
  let jobDetail = useCallApi(manageSubJobService.getDetailSubJobService, idSubJob);

  const { listMainWork } = useSelector((state) => state.mainWorkReducer);

  useEffect(() => {
    dispatch(getListTypeMainJobAction());
  }, [idSubJob]);

  const onFinish = (values) => {
    values.status = true;
    if (idSubJob) {
      if (values.typeJob.value) values.typeJob = values.typeJob.value;
      manageSubJobService
        .updateSubJobService(idSubJob, values)
        .then((result) => {
          alertSuccess();

          form.resetFields();
        })
        .catch(() => {
          alertFail();
        });
    } else {
      manageSubJobService
        .createSubJobService(values)
        .then((result) => {
          alertSuccess();
          form.resetFields();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (idSubJob && jobDetail) {
    return (
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
        size="large"
        initialValues={{
          name: jobDetail?.name,
          typeJob: {
            value: jobDetail?.typeJob?._id,
            label: jobDetail?.typeJob?.name,
          },
        }}
      >
        <h1 className="text-center my-4">Edit second job</h1>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Name is required!", type: "string" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Main job"
          name="typeJob"
          rules={[{ required: true, message: "Main job is required!" }]}
        >
          <Select disabled>
            {listMainWork?.map((mainJob) => (
              <Select.Option key={mainJob._id} value={mainJob._id}>
                {mainJob.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <div>
          <button type="submit" className="btn btn-outline-success d-block mx-auto">
            Submit
          </button>
        </div>
      </Form>
    );
  }

  if (!idSubJob && !jobDetail) {
    return (
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
        size="large"
      >
        <h1 className="text-center my-4">Add second Job</h1>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Name is required!", type: "string" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Main job"
          name="typeJob"
          rules={[{ required: true, message: "Main job is required!", type: "string" }]}
        >
          <Select>
            {listMainWork?.map((mainJob) => (
              <Select.Option key={mainJob._id} value={mainJob._id}>
                {mainJob.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <div>
          <button type="submit" className="btn btn-outline-success d-block mx-auto">
            Submit
          </button>
        </div>
      </Form>
    );
  }
};

export default AddSubJob;

import { useState, useEffect } from "react";
import { Form, Input, Select } from "antd";
import { useParams } from "react-router-dom";
import useCallApi from "hooks/useCallApi";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { getListTypeMainJobAction } from "redux/manageMainWork/actionCallApi";
import { manageSecondJobService } from "services/manageSecondJob";
import { alertSuccess } from "components/alert/alertSuccess";
import { alertFail } from "components/alert/alertFail";

const AddSecondJob = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { idSecondJob } = useParams();
  let jobDetail = useCallApi(manageSecondJobService.getDetailSecondJobService, idSecondJob);

  const { listMainWork } = useSelector((state) => state.mainWorkReducer);

  useEffect(() => {
    dispatch(getListTypeMainJobAction());
  }, [idSecondJob]);

  const onFinish = (values) => {
    values.status = true;
    if (idSecondJob) {
      if (values.typeJob.value) values.typeJob = values.typeJob.value;
      manageSecondJobService
        .updateSecondJobService(idSecondJob, values)
        .then((result) => {
          alertSuccess();

          form.resetFields();
        })
        .catch(() => {
          alertFail();
        });
    } else {
      manageSecondJobService
        .createSecondJobService(values)
        .then((result) => {
          alertSuccess();

          form.resetFields();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (idSecondJob && jobDetail) {
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

  if (!idSecondJob && !jobDetail) {
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

export default AddSecondJob;

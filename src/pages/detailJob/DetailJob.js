import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Form, Input } from "antd";
import { useSelector } from "react-redux";

import { manageJobServices } from "services/manageJobServices";
import styles from "./detailJob.module.scss";
import BookService from "./bookService/BookService";
import { manageComment } from "../../services/manageComment";
import useCallApi from "hooks/useCallApi";

const { TabPane } = Tabs;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function DetailJob() {
  const { jobId } = useParams();
  const [form] = Form.useForm();
  const { infoUserLogin } = useSelector((state) => state.manageUserReducer);
  const [loadComment, setLoadComment] = useState(0);

  let comments = useCallApi(manageComment.getCommentService, jobId, loadComment, "reverse") || [];
  let jobDetail = useCallApi(manageJobServices.getDetailJobService, jobId) || { _id: "" };

  const onFinish = (values) => {
    values.job = jobId;
    manageComment
      .createCommentService(values)
      .then((result) => {
        setLoadComment((prev) => prev + 1);
        form.resetFields();
      })
      .catch((err) => {
        console.log("createCommentService fail", err);
      });
  };

  return (
    <div className="container max-widthContainer mt-5">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h2>{jobDetail && jobDetail?.name}</h2>
          <div className="text-center mt-4">
            <img
              width={"80%"}
              src={
                jobDetail && jobDetail?.image
                  ? jobDetail && jobDetail?.image
                  : "/img/img-not-found.png"
              }
              alt="1"
            />
          </div>

          <h4 className="my-4">About This Gig</h4>
          <div className="text-muted h5 mb-4">Greetings, entrepreneurs! 😊</div>
          <p className="text-muted h6 mb-4" style={{ lineHeight: 1.5 }}>
            If you need a front-end developer to convert{" "}
            <mark>PSD, Sketch, XD, Figma, Invision,</mark> and other design files to HTML5 using
            Bootstrap4, CSS3, jQuery, and JavaScript, with all browsers responsive then allow me to
            help. Let's take your company to new heights and be the perfect match made in heaven! 😉
          </p>

          <h5 className="mb-2">HTML Conversion Process:</h5>
          <ul className="list-unstyled ml-3">
            <li className="text-muted h6">
              ✔️ Source file in PSD, Sketch, XD, Figma, Invision, etc...
            </li>
            <li className="text-muted h6">✔️ Initial check</li>
            <li className="text-muted h6">✔️ Start of HTML Conversion process</li>
            <li className="text-muted h6">✔️ Testing of the responsiveness</li>
            <li className="text-muted h6">✔️ Delivery of the first draft of work</li>
            <li className="text-muted h6">
              ✔️ Making revisions in accordance with the revision request (if any)
            </li>
            <li className="text-muted h6">✔️ Approval of HTML conversion</li>
            <li className="text-muted h6">✔️ Final delivery of the source file to the client</li>
          </ul>
          <h5 className="mb-2">My package includes:</h5>
          <ul className="list-unstyled ml-3">
            <li className="text-muted h6">✔️ 100% manually-coded HTML/CSS</li>
            <li className="text-muted h6">
              ✔️ Tested for compatibility with all latest browsers (Chrome, Safari, Firefox)
            </li>
            <li className="text-muted h6">✔️ Pixel perfect conversion with clean coding</li>
            <li className="text-muted h6">
              ✔️ Desktop, tablet, and mobile-friendly responsive design
            </li>
            <li className="text-muted h6">
              ✔️ Wow js animation, jQuery effects, image slider integration (if needed)
            </li>
          </ul>
          <p className="text-muted font-italic h5">
            Kindly contact me if you would like to employ my services. 👉🏻
          </p>
          <hr />
          <h4 className={comments.length > 0 ? "d-block" : "d-none"}>Comment of user</h4>
          <div>
            {infoUserLogin.user ? (
              <>
                <div className="d-flex align-items-center mt-4 mb-2">
                  <img
                    width={40}
                    height={40}
                    src={infoUserLogin.user.avatar}
                    alt="1"
                    className="rounded-circle"
                  />
                  <h5 className="ml-3" style={{ color: "#404145" }}>
                    {infoUserLogin.user.name}
                  </h5>
                </div>
                <Form {...layout} form={form} onFinish={onFinish}>
                  <Form.Item name="content" className="mb-2">
                    <Input.TextArea />
                  </Form.Item>
                  <div>
                    <button className="btn btn-success" type="submit">
                      Enter
                    </button>
                  </div>
                </Form>
              </>
            ) : null}
          </div>
          <div>
            {comments?.map((comment) => {
              let randomNumber = Math.floor(Math.random() * 77);
              return (
                <div key={comment._id}>
                  <div className="d-flex align-items-center mt-4">
                    <img
                      width={40}
                      height={40}
                      src={`https://xsgames.co/randomusers/assets/avatars/male/${randomNumber}.jpg`}
                      alt="1"
                      className="rounded-circle"
                    />
                    <h5 className="ml-3" style={{ color: "#404145" }}>
                      {comment.user.name}
                    </h5>
                  </div>
                  <p className=" h6 ml-5" style={{ color: "#404145" }}>
                    {comment.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className={styles.bookingService}>
            <Tabs size="large" defaultActiveKey="1" centered type="card">
              <TabPane tab={<h4>Basic</h4>} key="1">
                <BookService jobId={jobDetail && jobDetail?._id} />
              </TabPane>
              <TabPane tab={<h4>Standard</h4>} key="2">
                <BookService jobId={jobDetail && jobDetail?._id} />
              </TabPane>
              <TabPane tab={<h4>Premium</h4>} key="3">
                <BookService jobId={jobDetail && jobDetail?._id} />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailJob;

import { useState, useForm } from "react";
import style from "./Form.module.scss";
import { Input, Row, Col, DatePicker, Button, Form, notification } from "antd";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const FormBlog = () => {
  const pickDateHandler = () => {};
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const dateFormat = "YYYY/MM/DD";
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  const onChange = (event) => {
    getBase64(event.target.files[0]).then((base64) => {
      setFileList(base64);
    });
  };

  const submit = (values) => {
    return (dispatch, getState) => {
      const newBlog = {
        id: Math.random(),
        title: values.title,
        desc: values.desc,
        date: moment(values.date).format("L"),
        image: fileList,
      };
      dispatch({ type: "ADD", newBlog });
      form.resetFields();
      setFileList([]);
    };
  };

  const submitHandler = (values) => {
    setLoading(true);
    dispatch(submit(values));
    notification.open({
      message: "Notification",
      description: "Blog Has Been Added Succesfully",
      placement: "bottomRight",
    });
    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={style.form}>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={submitHandler}
        autoComplete="off"
        form={form}
      >
        <Row gutter={[30, 40]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Title require!",
                },
              ]}
            >
              <Input placeholder="Blog Title" />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item
              name="date"
              rules={[
                {
                  required: true,
                  message: "Date require",
                },
              ]}
            >
              <DatePicker
                onChange={pickDateHandler}
                placeholder="Enter Blog Date"
                style={{ width: "100%" }}
                format={dateFormat}
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }}>
            <Form.Item
              name="desc"
              rules={[
                {
                  required: true,
                  message: "Description require!",
                },
              ]}
            >
              <Input.TextArea rows={4} placeholder="Blog Description" />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }}>
            <Form.Item
              name="img"
              rules={[
                {
                  required: true,
                  message: "Image require!",
                },
              ]}
            >
              <Input type="file" onChange={onChange} />
            </Form.Item>
            {fileList.length > 0 && (
              <img src={fileList} width={200} height={200} />
            )}
          </Col>
          <Form.Item className={style.form__btn}>
            <Button type="primary" htmlType="submit" disabled={loading}>
              ADD
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
};

export default FormBlog;

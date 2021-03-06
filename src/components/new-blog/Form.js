import { useState, useForm } from "react";
import style from "./Form.module.scss";
import { Input, Row, Col, DatePicker, Button, Form, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useDispatch } from "react-redux";
import moment from "moment";

const FormBlog = () => {
  const pickDateHandler = () => {};
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const dateFormat = "YYYY/MM/DD";
  const [form] = Form.useForm();

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
      setFileList([])
    };
  };

  const submitHandler = (values) => {
    dispatch(submit(values));
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
                  required: false,
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
                  required: false,
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
                  required: false,
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
                  required: false,
                  message: "Image require!",
                },
              ]}
            >
              <Input type="file" onChange={onChange} />
            </Form.Item>
            {fileList.length > 0 && <img src={fileList} width={200} height={200} />}
          </Col>
          <Form.Item className={style.form__btn}>
            <Button type="primary" htmlType="submit">
              ADD
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
};

export default FormBlog;

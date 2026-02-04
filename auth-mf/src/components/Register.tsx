import { Button, Form, Input, type FormProps } from "antd";
import type { RegisterFieldType } from "../types/register/type";

function Register() {
  const onFinish: FormProps<RegisterFieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<RegisterFieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<RegisterFieldType>
        label={<span className="font-medium text-gray-700">Username</span>}
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input className="py-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </Form.Item>

      <Form.Item<RegisterFieldType>
        label={<span className="font-medium text-gray-700">Email</span>}
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input className="py-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </Form.Item>

      <Form.Item<RegisterFieldType>
        label={<span className="font-medium text-gray-700">Password</span>}
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password className="py-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </Form.Item>

      <Form.Item<RegisterFieldType>
        label={
          <span className="font-medium text-gray-700">Confirm Password</span>
        }
        name="confirmPassword"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password className="py-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </Form.Item>

      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full h-10 text-base font-semibold bg-blue-600 hover:bg-blue-700 border-none rounded-lg"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Register;

import { Button, Checkbox, Form, Input, type FormProps } from "antd";
import type { FieldType } from "../types/login/type";

function Login() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    window.dispatchEvent(new CustomEvent("auth:login-success",{
      detail: { token: "dummy-token" }
    }));
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
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
      <Form.Item<FieldType>
        label={<span className="font-medium text-gray-700">Username</span>}
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input className="py-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </Form.Item>

      <Form.Item<FieldType>
        label={<span className="font-medium text-gray-700">Password</span>}
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password className="py-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        label={null}
      >
        <Checkbox className="text-blue-600">Remember me</Checkbox>
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

export default Login;

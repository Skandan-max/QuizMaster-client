import React from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";

const Login = () => {
	const history = useHistory();
	const [form] = Form.useForm();

	const onFinish = async (values) => {
		try {
			const response = await fetch("http://localhost:5000/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});

			if (!response.ok) {
				throw new Error("Login failed");
			}

			history.push("/quizzes");
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	return (
		<Form form={form} onFinish={onFinish}>
			<Form.Item
				name="username"
				rules={[{ required: true, message: "Please input your username!" }]}
			>
				<Input placeholder="Username" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: "Please input your password!" }]}
			>
				<Input.Password placeholder="Password" />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Login
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Login;

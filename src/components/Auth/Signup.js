import React from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";

const Signup = () => {
	const history = useHistory();
	const [form] = Form.useForm();

	const onFinish = async (values) => {
		try {
			const response = await fetch("http://localhost:5000/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});

			if (!response.ok) {
				throw new Error("Signup failed");
			}

			history.push("/login");
		} catch (error) {
			console.error("Signup error:", error);
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
				name="email"
				rules={[
					{ required: true, message: "Please input your email!" },
					{ type: "email", message: "Invalid email format!" },
				]}
			>
				<Input placeholder="Email" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: "Please input your password!" }]}
			>
				<Input.Password placeholder="Password" />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Signup
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Signup;

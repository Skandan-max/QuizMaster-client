import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import CreateQuiz from "./components/Quiz/CreateQuiz";
import QuizList from "./components/Quiz/QuizList";
import Quiz from "./components/Quiz/Quiz";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

const { Header, Content } = Layout;

const App = () => {
	return (
		<Router>
			<Layout>
				<Header>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
						<Menu.Item key="1">Home</Menu.Item>
						{/* Add more menu items as needed */}
					</Menu>
				</Header>
				<Content style={{ padding: "0 50px" }}>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/signup" component={Signup} />
						<Route path="/create" component={CreateQuiz} />
						<Route path="/quizzes" component={QuizList} />
						<Route path="/quiz/:id" component={Quiz} />
					</Switch>
				</Content>
			</Layout>
		</Router>
	);
};

export default App;

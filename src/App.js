import './App.css';
import { Container, Row, Col } from "react-bootstrap";

import MainForm from "./components/MainForm/MainForm";

function App() {
	return (
		<div className="App">
			<Container>
				<Row>
					<Col>
						<MainForm />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;

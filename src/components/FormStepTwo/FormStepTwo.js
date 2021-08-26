import React from "react";
import { Form } from "react-bootstrap";

const FormStepTwo = props => {
	if (props.currentStep !== 2) {
		return null;
	}
	
	return (
		<>
			<Form.Group className="mb-3">
				<Form.Label>Username</Form.Label>
				<Form.Control 
					type="text"
					name="username"
					id="username"
					placeholder="Enter your Username"
					onChange={props.handleChange}
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control 
					type="password"
					name="password"
					id="password"
					placeholder="Enter your password"
					onChange={props.handleChange}
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Confirm Password</Form.Label>
				<Form.Control 
					type="password"
					name="confirm_password"
					id="confirm_password"
					placeholder="Enter your password again"
					onChange={props.handleChange}
				/>
			</Form.Group>
		</>
	);
}

export default FormStepTwo;

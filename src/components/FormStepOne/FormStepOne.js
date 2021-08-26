import React from "react";
import { Form } from "react-bootstrap";

const FormStepOne = props => {
	if (props.currentStep !== 1) {
		return null;
	}

	return (
		<>
			<Form.Group className="mb-3">
				<Form.Label>First Name</Form.Label>
				<Form.Control 
					type="text"
					name="first_name"
					id="first_name"
					placeholder="Enter First Name"
					onChange={props.handleChange} 
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Last Name</Form.Label>
				<Form.Control 
					type="text"
					name="last_name"
					id="last_name"
					placeholder="Enter Last Name"
					onChange={props.handleChange}
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Email address</Form.Label>
				<Form.Control 
					type="text"
					name="email"
					id="email"
					placeholder="Enter your Email"
					onChange={props.handleChange} 
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Control 
					as="select"
					name="country"
					id="country"
					onChange={props.handleChange} >
						<option>Please Choose country</option>
						<option value="Bangladesh">Bangladesh</option>
						<option value="USA">USA</option>
						<option value="UK">UK</option>
				</Form.Control>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Check 
					aria-label="option 1" 
					label="Please acept our Terms & conditions"
					name="term_check"
					id="term_check"
					onChange={props.handleChange} 
				/>
			</Form.Group>
		</>
	);
}

export default FormStepOne;


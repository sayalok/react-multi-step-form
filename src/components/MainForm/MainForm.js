import React, { useState } from "react";
import { Form,  Button,  Card } from "react-bootstrap";

import FormProgressBar from "../FormProgressBar/FormProgressBar";


import FormStepOne from "../FormStepOne/FormStepOne";
import FormStepTwo from "../FormStepTwo/FormStepTwo";
import FormStepThree from "../FormStepThree/FormStepThree";

const MainForm = props => {


	let [currentStep, setCurrentStep] = useState(1);

	let [getFieldValue, setFieldValue] = useState({
		first_name: "",
		last_name: "",
		email: "",
		country: "",
		term_check: false,
		username: "",
		password:"",
		confirm_password:"",
	});

	const handleChange = e => {
		let name = e.target.name;
		let value = e.target.value;

		console.log(name)
		console.log(value)
	
		if (name == "inputbrand") {
		  props.getAllCoupon(value);
		}
		getFieldValue[name] = value;
		setFieldValue(getFieldValue);
 	}

	const handleSubmitHelp = e => {
		e.preventDefault();
		console.log(getFieldValue)
		if (true) {
			console.log('askjdj')
		} else {
			console.log('askjdj')
		}
	};

	const previousButton = () => {	
		return currentStep !== 1 ? <Button variant="primary" className="mr-2" onClick={() => prev()}>Previous</Button> : null;
	}

	const nextButton = () => {
		return currentStep < 3 ? <Button variant="primary" onClick={() => next()}>Next</Button> : null;
	}

	const submitButton = () => {
		return currentStep > 2 ? <Button type="submit" className="ml-2">Submit</Button> : null;
	}

	const next = () =>  {
		currentStep = currentStep >= 2 ? 3 : currentStep + 1;
		setCurrentStep(currentStep)
	}
	
	const prev = () => {
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		setCurrentStep(currentStep)
	}

	return (
		<>
			<Form onSubmit={handleSubmitHelp}>
				<Card>
					<Card.Header>Create an Account</Card.Header>
					<Card.Body>
						<Card.Title>
							<FormProgressBar currentStep={currentStep} />
						</Card.Title>

						<FormStepOne
							currentStep={currentStep}
							handleChange={(e) => handleChange(e)}
						/>
						<FormStepTwo
							currentStep={currentStep}
							handleChange={(e) => handleChange(e)}
						/>
						<FormStepThree
							currentStep={currentStep}
							userData={getFieldValue}
						/>

					</Card.Body>
					<Card.Footer>
						{previousButton()}
						{nextButton()}
						{submitButton()}
					</Card.Footer>
				</Card>
			</Form>
		</>
	);
}

export default MainForm;


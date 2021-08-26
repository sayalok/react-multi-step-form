import React from "react";
import { Table } from "react-bootstrap";

const FormStepThree = props => {
	if (props.currentStep !== 3) {
		return null;
	}
	console.log(props)
	return (
		<>
			<div>
				<h3 className="mt-3 mb-4">Summary</h3>

				<div>
					<h4>Personal details</h4>
					<Table>
						<tr>
							<td>First Name</td>
							<td>{props.userData.first_name}</td>
							
						</tr>
						<tr>
							<td>Last Name</td>
							<td>{props.userData.last_name}</td>
							
						</tr>
						<tr>
							<td>Email</td>
							<td>{props.userData.email}</td>
							
						</tr>
						<tr>
							<td>Country</td>
							<td>{props.userData.country}</td>
						</tr>
					</Table>
				</div>

				<div>
					<h4>Account Details</h4>
					<Table>
						<tr>
							<td>Username</td>
							<td>{props.userData.username}</td>
							
						</tr>
						<tr>
							<td>Password</td>
							<td>{props.userData.password}</td>
							
						</tr>
					</Table>
				</div>

			</div>
		</>
	);
}

export default FormStepThree;

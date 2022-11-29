import React, { Component } from "react";

export class RecipeForm extends Component {
	constructor() {
		super();
		this.state = {
			img: "",
			title: "",
			desc: "",
			err: "",
		};
	}
	render() {
		return (
			<div className="d-flex flex-column justify-content-center align-items-center">
				<div className="col-6">
					<form>
						<div className="mb-3">
							<label htmlFor="image" className="form-label">
								Image
							</label>
							<input type="text" className="form-control" id="image" />
						</div>
						<div className="mb-3">
							<label htmlFor="title" className="form-label">
								Title
							</label>
							<input type="text" className="form-control" id="title" />
						</div>
						<div className="mb-3">
							<label htmlFor="description" className="form-label">
								Description
							</label>
							<input type="text" className="form-control" id="description" />
						</div>

						<button type="submit" className="btn btn-success">
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default RecipeForm;

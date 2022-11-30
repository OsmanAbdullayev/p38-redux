import React, { Component } from "react";

export class RecipeForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			img: props.editRecipe?props.editRecipe.img:"",
			title: props.editRecipe?props.editRecipe.title:"",
			desc: props.editRecipe?props.editRecipe.desc:"",
			err: "",
		};
	}

	formSubmit = (e) => {
		e.preventDefault();
		if (!this.state.img || !this.state.title || !this.state.desc) {
			this.setState({ err: "Please, fill out this form." });
		} else {
			this.setState({err:""});
			this.props.onFormSubmit({
				img:this.state.img,
				title:this.state.title,
				desc:this.state.desc
			})

		}
	};
	render() {
		return (
			<div className="d-flex flex-column justify-content-center align-items-center">
				{this.state.err && <p className="text-center col-6 alert alert-warning">{this.state.err}</p>}
				<div className="col-6">
					<form onSubmit={this.formSubmit}>
						<div className="mb-3">
							<label htmlFor="image" className="form-label">
								Image
							</label>
							<input
								onChange={(e) => {
									const img = e.target.value;
									this.setState(() => ({ img }));
								}}
								type="text"
								className="form-control"
								id="image"
								value={this.state.img}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="title" className="form-label">
								Title
							</label>
							<input
								onChange={(e) => {
									const title = e.target.value;
									this.setState(() => ({ title }));
								}}
								type="text"
								className="form-control"
								id="title"
								value={this.state.title}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="description" className="form-label">
								Description
							</label>
							<input
								onChange={(e) => {
									const desc= e.target.value;
									this.setState(() => ({ desc }));
								}}
								type="text"
								className="form-control"
								id="description"
								value={this.state.desc}
							/>
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

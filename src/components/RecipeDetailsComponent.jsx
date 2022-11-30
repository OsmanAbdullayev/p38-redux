import React from "react";

const RecipeDetailsComponent = ({ title, desc, img }) => {
	return (
		<div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-1">
			<div className="col-10 col-sm-8 col-lg-5">
				<img
					src={img}
					className="d-block mx-lg-auto img-fluid shadow"
					alt={title}
					width={700}
					height={500}
					loading="lazy"
				/>
			</div>
			<div className="col-lg-7">
				<h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
				<p className="lead">{desc}</p>
				<div className="d-grid gap-2 d-md-flex justify-content-md-start">
					<button type="button" className="btn btn-success btn-lg px-4 me-md-2">
						Add to Card
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetailsComponent;

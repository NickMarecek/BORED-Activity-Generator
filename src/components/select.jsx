import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<select name={name} id={name} {...rest} className="form-control">
				<option value="" />
				{options.map((option, i) => (
					<option key={i} value={i}>
						{option}
					</option>
				))}
			</select>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default Select;

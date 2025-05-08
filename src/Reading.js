import "./main.css";
import "./reading.css";

function Reading() {
	return (
		<div className="reading">
			<div className="greeting">
				<h2>Welcome James!</h2>
				<h2>How are you doing today?</h2>
			</div>
			<div className="dropdown"></div>
			<div className="quote">
				<p>
					God is most satisfied in us when we are most satisfied in
					Him.
				</p>
			</div>
			<div className="progress">
				<label htmlFor="">Select a plan</label>
				<select name="" id="">
					<option value="option1">Romans</option>
				</select>
			</div>
			<br />
			<div className="bible-plan">
				<label className="checkbox-label" htmlFor="plan">
					<input type="checkbox" name="plan" id="plan" />
					<span className="label-text">Luke 4 - 5</span>
				</label>
				<p className="date">April 24, 2025</p>
				<br />
				<p>60 Days Remaining</p>
			</div>
		</div>
	);
}

export default Reading;

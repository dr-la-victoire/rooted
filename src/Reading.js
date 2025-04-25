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
				<p>Coming soon</p>
			</div>
			<br />
			<div className="bible-plan">
			<label htmlFor="plan">Luke 4 - 5</label>
				<input type="checkbox" name="plan" id="plan"/> 
				<p className="date">April 24, 2025</p>
				<br />
				<p>60 Days Remaining</p>
			</div>
		</div>
	);
}

export default Reading;

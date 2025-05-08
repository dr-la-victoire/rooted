import "./thoughts.css"

function Thoughts() {
	return (
		<div className="thoughts">
			<h2>Thoughts and Prayers</h2>
			<div className="bible-notes">
				<div className="note-section">
					<label htmlFor="thoughts">
						💭 Thoughts on the Scripture
					</label>
					<textarea
						id="thoughts"
						name="thoughts"
						placeholder="Write what you learned, questions, insights..."
					/>
				</div>

				<div className="note-section">
					<label htmlFor="verses">📖 Verses to Remember</label>
					<textarea
						id="verses"
						name="verses"
						placeholder="Type out key verses, memory verses, etc..."
					/>
				</div>
			</div>
		</div>
	);
}

export default Thoughts;

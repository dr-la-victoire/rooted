import "./main.css"

function Main() {
	return (
		<div className="main">
			<div className="intro-text">
				<div className="intro-headings">
					<h1>Rooted</h1>
					<h3>Eat your Bible</h3>
					<p>Your words were found and I did eat them...</p>
				</div>
			</div>
			<div className="intro-form">
				<form action="">
					<label htmlFor="name">Name</label>
					<input
						id="name"
						name="name"
						type="text"
						placeholder="What should we call you?"
					/>
					<button>Get Started</button>
				</form>
			</div>
		</div>
	);
}

export default Main;

// src/App.jsx
import "./App.css";
import Card from "./components/Card";
import DeclarativeLogo from "./assets/icon1.png";
import ComponentsLogo from "./assets/icon2.png";
import SingleWayLogo from "./assets/icon3.png";
import JSXLogo from "./assets/icon4.png";
import Navbar from "./components/Navbar";
import Header from "./components/Header";


function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<section id="cards" className="cards">
				<Card
					title="Declarative"
					imgSrc={DeclarativeLogo}
					text="React makes it painless to create interactive UIs"
				/>
				<Card
					title="Components"
					imgSrc={ComponentsLogo}
					text="Build encapsulated components that manage their state"
				/>
				<Card
					title="Single-Way"
					imgSrc={SingleWayLogo}
					text="A set of immutable values are passed to the component"
				/>
				<Card
					title="JSX"
					imgSrc={JSXLogo}
					text="Statically typed, designed to run on modern browsers"
				/>
			</section>
		</div>
	);
}

export default App;

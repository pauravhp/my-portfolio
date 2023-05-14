import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<About />
			<Skills />
			<Project />
			<Contact />
		</div>
	);
}

export default App;

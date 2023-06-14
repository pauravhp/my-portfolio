import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Home = () => {
	// To achieve text animation where the text slowly being showcased
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["A Full-Stack Developer", "A Machine Learning Researcher"];
	const period = 750;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<div name="home" className="w-full h-screen bg-[#798777]">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-[#F9F5EB]">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#F8EDE3]">
					Paurav H Param
				</h1>
				<span
					className="txt-rotate text-4xl sm:text-7xl font-bold text-[#e6ccb2]"
					dataPeriod="1000"
					data-rotate='["A Full-Stack Developer", "A Machine Learning Researcher"]'
				>
					<span className="wrap">{text}</span>
				</span>
				{/* <h2 className="text-4xl sm:text-7xl font-bold text-[#e6ccb2]">
					I'm a Full Stack Developer and ML Enthusiast.
				</h2> */}
				<p className="text-[#e6ccb2] py-4 max-ww-[700px]">
					Welcome, my name is Paurav. Feel free to have a look aroud.
				</p>
				<div>
					<Link to="projects" smooth={true} duration={500}>
						<button className="text-[#F8EDE3] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#b08968] hover:border-[#b08968]">
							View Work
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight className="ml-3" />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;

import React from "react";
import Github from "../assets/github.png";
import JS from "../assets/javascript.png";
import Python from "../assets/python.png";
import ReactImg from "../assets/react.png";
import SKLearn from "../assets/scikit-learn.png";
import Java from "../assets/java.png";
import Clang from "../assets/c.png";
import SQL from "../assets/sql.png";

const Skills = () => {
	return (
		<div name="skills" className="w-full h-screen bg-[#798777] text-[#F8EDE3]">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-[#e6ccb2]">
						Skillssss
					</p>
					<p className="py-4">These are the technologies I have worked with</p>
				</div>
				{/* Python, C, Java, SKLearn, React, JS, MySQL, Github */}
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-md shadow-[#214E34] hover:scale-110 duration-500">
						<img className="w-50 mx-auto my-1" src={Python} alt="Python Icon" />
						<p className="my-3">Python</p>
					</div>
					<div className="shadow-md shadow-[#214E34] hover:scale-110 duration-500">
						<img className="w-40 mx-auto my-1" src={Clang} alt="C Icon" />
						<p className="my-3">C</p>
					</div>
					<div className="shadow-md shadow-[#214E34] hover:scale-110 duration-500">
						<img className="w-40 mx-auto my-1" src={Java} alt="Java Icon" />
						<p className="my-3">Java</p>
					</div>
					<div className="shadow-md shadow-[#214E34] hover:scale-110 duration-500">
						<img
							className="w-40 mx-auto my-1"
							src={SKLearn}
							alt="SciKit-Learn Icon"
						/>
						<p className="my-3">SciKit-Learn</p>
					</div>
					<div className="shadow-md shadow-[#214E34] hover:scale-110 duration-500">
						<img
							className="w-40 mx-auto my-1"
							src={ReactImg}
							alt="React Icon"
						/>
						<p className="my-3">React</p>
					</div>
					<div className="shadow-md shadow-[#214E34] hover:scale-110 duration-500">
						<img className="w-40 mx-auto my-1" src={JS} alt="JS Icon" />
						<p className="my-3">JavaScript</p>
					</div>
					<div className="shadow-md shadow-[#214E34] hover:scale-110 duration-500">
						<img className="w-40 mx-auto my-1" src={SQL} alt="SQL Icon" />
						<p className="my-3">SQL</p>
					</div>
					<div className="shadow-md shadow-[#214E34] hover:scale-110 duration-500">
						<img className="w-40 mx-auto my-1" src={Github} alt="Github Icon" />
						<p className="my-3">Github</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;

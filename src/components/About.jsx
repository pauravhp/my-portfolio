import React from "react";
import ProfilePhoto from "../assets/My_Profile_Photo.jpg";

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#798777] text-[#F8EDE3]">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right bottom-0 pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-[#e6ccb2]">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
					<div className="sm:text-right text-4xl font-bold">
						<p>Hi I'm Paurav, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>
							"I'm a passionate third-year computer science student at
							University of Victoria, specializing in full-stack development and
							Machine Learning. An avid learner with a strong foundation in C,
							Python, and JavaScript. Seeking practical experience to complement
							theoretical knowledge. A collaborative team player with excellent
							communication skills. Enthusiastic about exploring new
							technologies and solving real-world challenges. Let's connect for
							exciting opportunities to apply my skills and contribute to
							innovative projects."
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

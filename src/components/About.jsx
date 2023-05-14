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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

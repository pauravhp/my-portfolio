import React from "react";
import PAksharImg from "../assets/predict_akshar.png";
import TinDogImg from "../assets/tindog.png";
import DDGameImg from "../assets/delivery_driver_game.png";
import RPortalImg from "../assets/recruiters_portal.png";

const Project = () => {
	return (
		<div
			name="projects"
			className="w-full md:h-screen bg-[#798777] text-[#F8EDE3]"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font bold inline border-b-4 border-[#e6ccb2]">
						Projects
					</p>
					<p className="py-6">Check out some of my projects.</p>
				</div>

				{/* Card Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					<div
						style={{ backgroundImage: `url(${PAksharImg})` }}
						className="shadow-lg shadow-[#214E34] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-[#F8EDE3] tracking-wider">
								Predict Akshar App
							</span>
							<div className="pt-8 text-center">
								<a href="https://github.com/pauravhp/Predict_Akshar">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F8EDE3] text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Card Item 1*/}
					<div
						style={{ backgroundImage: `url(${TinDogImg})` }}
						className="shadow-lg shadow-[#214E34] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-[#F8EDE3] tracking-wider">
								TinDog CSS Website
							</span>
							<div className="pt-8 text-center">
								<a href="https://pauravhp.github.io/TinDog/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F8EDE3] text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/pauravhp/TinDog">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F8EDE3] text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Card Item 2*/}
					<div
						style={{ backgroundImage: `url(${DDGameImg})` }}
						className="shadow-lg shadow-[#214E34] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-[#F8EDE3] tracking-wider">
								DeliveryForT Game
							</span>
							<div className="pt-8 text-center">
								<a href="https://github.com/pauravhp/Delivery-For-T">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F8EDE3] text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Card Item 3*/}
					<div
						style={{ backgroundImage: `url(${RPortalImg})` }}
						className="shadow-lg shadow-[#214E34] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-[#F8EDE3] tracking-wider">
								Recruiters' Portal
							</span>
							<div className="pt-8 text-center">
								<a href="https://github.com/Sakshamdua/Recruiters-Portal">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F8EDE3] text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;

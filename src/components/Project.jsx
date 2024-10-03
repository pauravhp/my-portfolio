import React from "react";
import PAksharImg from "../assets/predict_akshar.png";
import TinDogImg from "../assets/tindog.png";
import DDGameImg from "../assets/delivery_driver_game.png";
import RPortalImg from "../assets/recruiters_portal.png";
import SGameImg from "../assets/simons_game.png";
import VayaImg from "../assets/Vaya.jpeg";
import ProjectCard from "./ProjectCard";
import BMVImg from "../assets/be_my_valentine.jpeg";
import UTTTImg from "../assets/uttt_automation.png";

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
					<ProjectCard
						img={VayaImg}
						title="Vaya: Your Personalized Restaurant Recommender"
						codelink="https://github.com/AbhayAnoopC/vaya-vaya"
						demolink="https://www.linkedin.com/posts/rushaan-chawla_recently-i-had-the-opportunity-to-participate-activity-7208672930325549057-jNeW?utm_source=share&utm_medium=member_desktop"
					/>
					<ProjectCard
						img={UTTTImg}
						title="UTTT Hackathon Automation"
						codelink="https://github.com/pauravhp/uttt-tournament-automation"
					/>
					<ProjectCard
						img={PAksharImg}
						title="Predict Akshar App"
						codelink="https://github.com/pauravhp/Predict_Akshar"
						demolink=""
					/>
					<ProjectCard
						img={RPortalImg}
						title="Recruiters' Portal"
						codelink="https://github.com/Sakshamdua/Recruiters-Portal"
					/>
					<ProjectCard
						img={BMVImg}
						title="Be My Valentine"
						codelink="https://github.com/pauravhp/be_my_valentine"
						demolink="https://pauravhp.github.io/be_my_valentine/"
					/>
					<ProjectCard
						img={SGameImg}
						title="Simon's Game"
						codelink="https://github.com/pauravhp/SimonGame"
						demolink="https://pauravhp.github.io/SimonGame/"
					/>
					<ProjectCard
						img={TinDogImg}
						title="TinDog CSS Website"
						codelink="https://github.com/pauravhp/TinDog"
						demolink="https://pauravhp.github.io/TinDog/"
					/>
					<ProjectCard
						img={DDGameImg}
						title="DeliveryForT Game"
						codelink="https://github.com/pauravhp/Delivery-For-T"
					/>
				</div>
			</div>
		</div>
	);
};

export default Project;

import React from "react";

const ProjectCard = ({ img, title, codelink, demolink }) => {
	return (
		<div>
			<div
				style={{ backgroundImage: `url(${img})` }}
				className="shadow-lg shadow-[#214E34] group container rounded-md flex justify-center items-center mx-auto content-div"
			>
				{/* Hover Effects */}
				<div className="opacity-0 group-hover:opacity-100">
					<span className="text-2xl font-bold text-[#F8EDE3] tracking-wider">
						{title}
					</span>
					<div className="pt-8 text-center">
						{demolink && (
							<a href={demolink}>
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F8EDE3] text-gray-700 font-bold text-lg">
									Demo
								</button>
							</a>
						)}
						<a href={codelink}>
							<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F8EDE3] text-gray-700 font-bold text-lg">
								Code
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

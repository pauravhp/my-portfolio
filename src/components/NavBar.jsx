import React from "react";
import logo from "../assets/P.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#798777] text-[#F8EDE3]">
			<div>
				<img src={logo} alt="Logo" style={{ width: "75px" }} />
			</div>
			{/* Menu */}
			<div>
				<ul className="hidden md:flex">
					<li>
						<Link to="home" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li>
						<Link to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link to="skills" smooth={true} offset={-65} duration={500}>
							Skills
						</Link>
					</li>
					<li>
						<Link to="projects" smooth={true} duration={500}>
							Projects
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} offset={-65} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			{/* Hamburger */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			{/* Mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#798777] flex flex-col justify-center items-center'"
				}
			>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="skills"
						smooth={true}
						offset={-65}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="projects"
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="contact"
						smooth={true}
						offset={-65}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social Icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<a
							className="flex justify-between items-center w-full text-[#F8EDE3]"
							href="https://www.linkedin.com/in/paurav-h-param-025055264"
						>
							Linkedin <FaLinkedin size={25} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-[#F8EDE3]"
							href="https://github.com/pauravhp"
						>
							Github <FaGithub size={25} />
						</a>
					</li>
					<Link to="contact" smooth={true} offset={-65} duration={500}>
						<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
							<a
								className="flex justify-between items-center w-full text-[#F8EDE3]"
								href="/"
							>
								Email <HiOutlineMail size={25} />
							</a>
						</li>
					</Link>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-[#F8EDE3]"
							href="https://docs.google.com/document/d/18Qjchnmsei3jlZo9FOEFV4X_8CeSVTIm82yghBfmZZU/edit?usp=sharing"
						>
							Resume <BsFillPersonLinesFill size={25} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;

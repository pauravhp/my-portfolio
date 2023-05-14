import React from "react";

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-[#798777] text-[#F8EDE3] flex justify-center items-center p-4"
		>
			<form
				method="POST"
				action="https://getform.io/f/04bc0024-5c35-4fbf-af65-fa6dafc4dfa3"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#e6ccb2]">
						Contact
					</p>
					<p className="text-[#F8EDE3] py-4">
						Submit the form below or shoot me an email - pauravhp2003@gmail.com
					</p>
				</div>
				<input
					className="p-2 bg-[#e6ccb2] text-[#565f69]"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-[#e6ccb2] text-[#565f69]"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					name="message"
					className="bg-[#e6ccb2] my-4 p-2 text-[#565f69]"
					rows="10"
					placeholder="Message"
				></textarea>
				<button className="text-[#F8EDE3] border-2 hover:bg-[#b08968] hover:border-[#b08968] px-4 py-3 my-8 mx-auto flex items-center rounded-lg">
					Contact Me
				</button>
			</form>
		</div>
	);
};

export default Contact;

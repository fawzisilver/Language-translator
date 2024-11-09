import React from "react";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { CiCircleChevDown } from "react-icons/ci";

const translatorContent = () => {
	return (
		<div className="-w-full flex flex-col gap-y-4 justify-center items-center px-8 pt-12 pb-6 relative ">
			<button className="absolute top-4 left-4 text-gray-700">
				<FaRegRectangleXmark />
			</button>
			<div className="w-full flex bg-custom-beige py-3 justify-center items-center text-gray-700 font-medium rounded-md">
				<div>English</div>
				<IoReload />
				<div>English</div>
			</div>
			<div>
				<textarea></textarea>
				<div>0/200</div>
			</div>
			<button>
				<CiCircleChevDown />
			</button>
			<div>
				<textarea></textarea>
			</div>
		</div>
	);
};

export default translatorContent;

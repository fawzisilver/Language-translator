import React from "react";

const Translator = () => {
	return (
		<main className=" flex flex-col justify-center items-center p-12 bg-[#f5f5f5]">
			<div className="flex flex-col justify-center w-full h-80 bg-custom-beige text-center rounded text-gray-700 font-semibold border-t-2 border-b-2 border-[#749eb2]">
				<span className="text-2xl">Hello</span>
				<span className="text-2xl">dsdsd</span>
				<span className="text-2xl">dsdsd</span>
				<span className="text-2xl">helloh</span>
			</div>
			<div className="w-full mb-7">
				<h1 className="text-3xl py-4">Translator App</h1>
				<button className="bg-custom-beige h-8 w-28 font-semibold rounded uppercase hover:bg-slate-500  ">
					Start
				</button>
			</div>
		</main>
	);
};

export default Translator;

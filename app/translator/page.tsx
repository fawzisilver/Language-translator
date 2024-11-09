"use client";
import { useState } from "react";
import React from "react";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { CiCircleChevDown } from "react-icons/ci";
import Link from "next/link";
import { languages } from "@/dataset/languagesData.js";
import { TextArea } from "@/component/TextArea";

const Translator = () => {
	const [selectedLanguageFrom, setSelectedLanguageFrom] = useState<string>("en");
	const [selectedLanguageTo, setSelectedLanguageTo] = useState<string>("en");
	const [showLanguages, setShowLanguages] = useState<boolean>(false);
	const [currentLangSelected, setCurrentLangSelected] = useState<string | null>(
		null
	);

	const handleLanguageClick = (type: string) => {
		console.log("im workin!");
		setCurrentLangSelected(type);
		setShowLanguages(!showLanguages);
	};

	return (
		<main className="w-full h-screen flex justify-center items-center m-4">
			<div className="min-w-fit min-h-[569px] flex flex-col justify-center items-center py-12 px-4 bg-[#f5f5f5] rounded relative">
				<div className="gap-y-4 items-center  bg-[#f5f5f5]">
					<Link href="/">
						<button className="absolute top-4 left-4 text-gray-700">
							<FaRegRectangleXmark />
						</button>
					</Link>
					<div className="w-[28rem] min-h-16 flex gap-10 justify-center items-center mb-4 text-gray-700 bg-[#cc9767] font-medium rounded-md shadow-md">
						<div
							onClick={() => handleLanguageClick("from")}
							className="cursor-pointer font-semibold"
						>
							English
						</div>
						<IoReload />
						<div
							onClick={() => handleLanguageClick("to")}
							className="cursor-pointer font-semibold"
						>
							English
						</div>
					</div>

					{showLanguages && (
						<div className="w-[93.5%] h-[calc(100%-8rem)] bg-[#fff0db] absolute top-[7rem] z-10 rounded shadow-lg overflow-y-auto">
							<ul>
								{Object.entries(languages).map(([key, value]) => (
									<li
										key={key}
										className="text-center cursor-pointer hover:bg-slate-800 hover:text-white transition duration-200 px-10 py-[0.1rem] rounded"
									>
										{value}
									</li>
								))}
							</ul>
						</div>
					)}

					<div className="w-full flex justify-center relative">
						<textarea className="w-[28rem] h-44 shadow-md rounded-lg px-5 py-2" />
						<div className="absolute bottom-1 right-11 text-xs">0/200</div>
					</div>
					<div className="w-full flex justify-center py-2">
						<button>
							<CiCircleChevDown style={{ height: "25px", width: "25px" }} />
						</button>
					</div>
					<div className="w-full">
						<textarea className="w-[28rem] flex justify-center h-44 shadow-md rounded-lg px-5 py-2" />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Translator;

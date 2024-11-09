"use client";
import { useState } from "react";
import React from "react";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { CiCircleChevDown } from "react-icons/ci";
import Link from "next/link";
import { languages } from "@/dataset/languagesData.js";

const Translator = () => {
	const [selectedLanguageFrom, setSelectedLanguageFrom] = useState<string>("en");
	const [selectedLanguageTo, setSelectedLanguageTo] = useState<string>("en");
	const [showLanguages, setShowLanguages] = useState<boolean>(false);
	const [currentLangSelected, setCurrentLangSelected] = useState<string | null>(
		null
	);

	const handleLanguageClick = (type: string) => {
		setCurrentLangSelected(type);
		setShowLanguages(true);
	};

	return (
		<main className="w-full h-screen flex justify-center items-center m-4">
			<div className="w-[50%] flex flex-col justify-center items-center p-12 bg-[#f5f5f5] rounded relative">
				<div className="gap-y-4 items-center px-8pb-6 bg-[#f5f5f5]">
					<Link href="/">
						<button className="absolute top-4 left-4 text-gray-700">
							<FaRegRectangleXmark />
						</button>
					</Link>
					<div className="w-[28rem] min-h-16 flex gap-10 justify-center items-center mb-4 text-gray-700 bg-custom-beige font-medium rounded-md shadow-md">
						<div className="cursor-pointer font-semibold">English</div>
						<IoReload />
						<div className="cursor-pointer font-semibold">English</div>
					</div>
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

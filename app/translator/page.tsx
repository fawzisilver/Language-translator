"use client";
import { useEffect, useRef, useState } from "react";
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
	const [inputText, setInputText] = useState<string>("");
	const [translated, setTranslated] = useState<string>("");
	const [characterCount, setCharacterCount] = useState<number>(0);
	const maxChars = 200;
	const dropDownRef = useRef<HTMLDivElement>(null);

	const handleLanguageClick = (type: string) => {
		setCurrentLangSelected(type);
		setShowLanguages(!showLanguages);
	};

	const handleLanguageSelect = (languageCode: string) => {
		if (currentLangSelected === "from") {
			setSelectedLanguageFrom(languageCode);
		} else {
			setSelectedLanguageTo(languageCode);
		}

		setShowLanguages(false);
	};

	const handleSwapLanguages = () => {
		setSelectedLanguageFrom(selectedLanguageTo);
		setSelectedLanguageTo(selectedLanguageFrom);
	};

	const handleTranslate = async () => {
		if (!inputText.trim()) {
			setTranslated("");
			return;
		}

		// https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it (hard-coded url)
		const response = await fetch(
			`https://api.mymemory.translated.net/get?q=${encodeURIComponent(
				inputText
			)}&langpair=${selectedLanguageFrom}|${selectedLanguageTo}`
		);

		const data = await response.json();

		setTranslated(data.responseData.translatedText); // based on api method
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		if (value.length <= maxChars) {
			setInputText(value);
			setCharacterCount(value.length);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleTranslate();
		}
	};

	const handleClickOut = (e: MouseEvent) => {
		if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
			setShowLanguages(false);
		}
	};

	useEffect(() => {
		if (showLanguages) {
			document.addEventListener("mousedown", handleClickOut);
		} else if (!showLanguages) {
			document.removeEventListener("mousedown", handleClickOut);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOut);
		};
	}, [showLanguages]);

	return (
		<main className="w-full h-screen flex justify-center items-center m-4">
			<div className="min-w-fit min-h-[569px] flex flex-col justify-center items-center py-12 px-4 bg-[#f5f5f5] rounded relative shadow-2xl">
				<div className="gap-y-4 items-center  bg-[#f5f5f5]">
					<Link href="/">
						<button className="absolute top-4 left-4 text-gray-700">
							<FaRegRectangleXmark className="hover:scale-110" />
						</button>
					</Link>
					<div className="w-[28rem] min-h-16 flex gap-10 justify-center items-center mb-4 text-gray-700 bg-[#cc9767] font-medium rounded-md shadow-md">
						<div
							onClick={() => handleLanguageClick("from")}
							className="relative cursor-pointer font-semibold hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-slate-700 before:transition-all before:duration-200"
						>
							{languages[selectedLanguageFrom as keyof typeof languages] ||
								"English"}
						</div>
						<IoReload
							onClick={handleSwapLanguages}
							className="cursor-pointer hover:scale-110 hover:rotate-[360deg] duration-700"
						/>
						<div
							onClick={() => handleLanguageClick("to")}
							className="relative cursor-pointer font-semibold hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-slate-700 before:transition-all before:duration-200"
						>
							{languages[selectedLanguageTo as keyof typeof languages] || "English"}
						</div>
					</div>

					{showLanguages && (
						<div
							ref={dropDownRef}
							className="w-[93.5%] h-[calc(100%-8rem)] bg-[#fff0db] absolute top-[7rem] z-10 rounded shadow-lg overflow-y-auto"
						>
							<ul>
								{Object.entries(languages).map(([key, value]) => (
									<li
										onClick={() => handleLanguageSelect(key)}
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
						<textarea
							onChange={handleInputChange}
							className="w-[28rem] min-h-44 shadow-md rounded-lg px-5 py-2"
							value={inputText || ""}
							onKeyDown={handleKeyDown}
						/>
						<div className="absolute bottom-1 right-11 text-xs">
							{characterCount}/{maxChars}
						</div>
					</div>
					<div className="w-full flex justify-center py-2">
						<button>
							<CiCircleChevDown
								onClick={handleTranslate}
								style={{ height: "25px", width: "25px" }}
								className="hover:cursor-pointer hover:scale-110"
							/>
						</button>
					</div>
					<div className="w-full">
						<textarea
							readOnly
							value={translated || ""}
							className="w-[28rem] flex justify-center h-44 shadow-md rounded-lg px-5 py-2 min-h-44"
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Translator;

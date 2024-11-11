import Link from "next/link";

const HomePage = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center m-4 antialiased text-gray-700">
			<main className="w-[20%] min-w-96 flex flex-col justify-center items-center p-6 bg-[#f5f5f5] shadow-lg rounded sm:p-6">
				<div className="flex flex-col justify-center w-full h-80 bg-custom-beige text-center rounded  font-semibold border-t-2 border-b-2 border-[#749eb2]">
					<span className="px-8 text-left text-sm sm:text-xl">Hello</span>
					<span className="px-8 text-right text-lg sm:text-xl">Konnichiwa</span>
					<span className="px-8 text-left text-lg sm:text-xl">สวัสดี</span>
					<span className="px-8 text-right text-lg sm:text-xl">אהלן</span>
					<span className="px-8 text-lg sm:text-2xl">прывітанне</span>
				</div>
				<div className="w-full mb-7">
					<h1 className="text-2xl sm:text-3xl py-4">Translator App</h1>
					<Link href={"/translator"}>
						<button className="bg-custom-beige h-8 w-28 font-semibold rounded uppercase duration-300 hover:opacity-80 hover:scale-110 hover:font-bold">
							Start
						</button>
					</Link>
				</div>
			</main>
		</div>
	);
};

export default HomePage;

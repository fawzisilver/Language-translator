import Translator from "@/components/translator";

const HomePage = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center m-4">
			<div className="w-[90%] max-w-lg rounded-lg shadow-xl shadow-slate-600">
				<Translator />
			</div>
		</div>
	);
};

export default HomePage;

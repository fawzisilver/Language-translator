import Translator from "@/components/Translator";
import TranslatorContent from "@/components/TranslatorContent";

const HomePage = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center m-4">
			<div className="w-[90%] max-w-lg rounded-lg shadow-xl shadow-slate-600">
				<Translator />
				{/* <TranslatorContent /> */}
			</div>
		</div>
	);
};

export default HomePage;

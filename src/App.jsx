import Home from "./components/Home";
const App = () => {
    return (
        <div className="min-h-[100dvh] bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <div className="inline-block p-2 px-4 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100">
                        <span className="text-sm font-medium text-blue-600">AI-Powered Image Enhancement</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3 sm:mb-4">
                        AI Image Enhancer
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        Transform your images with the power of AI. Upload your image and watch it enhance in seconds!
                    </p>
                </div>

                <Home />

                <div className="text-center mt-8 sm:mt-10 md:mt-12">
                    <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                        <span>Powered by</span>
                        <span className="font-semibold text-blue-600">@kunalAI</span>
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

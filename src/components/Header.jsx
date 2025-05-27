const Header = () => {
    return (
        <div className="text-center px-4 py-6 sm:py-8 md:py-10 lg:py-12">
            <div className="inline-block p-2 px-4 mb-4 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 backdrop-blur-sm shadow-sm">
                <span className="text-sm sm:text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    AI-Powered Image Enhancement
                </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-3 sm:mb-4">
                AI Image Enhancer
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
                Transform your images with the power of AI. Upload your image and watch it enhance in seconds!
            </p>
        </div>
    );
};

export default Header; 
const Footer = () => {
    return (
        <div className="text-center mt-6 sm:mt-8 md:mt-10">
            <div className="inline-flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <span>Powered by</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">@kunalAI</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>
        </div>
    );
};

export default Footer; 
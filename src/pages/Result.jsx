import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';

const Result = ({ enhancedImage }) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [showHome, setShowHome] = useState(false);

    const handleDownload = async () => {
        try {
            setIsDownloading(true);
            const response = await fetch(enhancedImage);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'enhanced-image.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download error:', error);
        } finally {
            setIsDownloading(false);
        }
    };

    const handleEnhanceAnother = () => {
        setShowHome(true);
    };

    if (showHome) {
        return <Home />;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col">
                <Header />
                <main className="flex-1 container mx-auto px-4 py-6 sm:py-8 md:py-10 lg:py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient">
                                        Image Enhanced Successfully!
                                    </h2>
                                    <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                        Your image has been enhanced with AI. You can download it or enhance another image.
                                    </p>
                                </div>

                                <div className="relative group">
                                    <img
                                        src={enhancedImage}
                                        alt="Enhanced"
                                        className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-glow"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                                        <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                            Enhanced Image
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        onClick={handleDownload}
                                        disabled={isDownloading}
                                        className="flex-1 sm:flex-none px-6 py-3 rounded-xl text-white text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 shadow-lg hover:shadow-glow-lg animate-gradient"
                                    >
                                        {isDownloading ? (
                                            <span className="flex items-center justify-center space-x-2">
                                                <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                <span>Downloading...</span>
                                            </span>
                                        ) : (
                                            'Download Enhanced Image'
                                        )}
                                    </button>
                                    <button
                                        onClick={handleEnhanceAnother}
                                        className="flex-1 sm:flex-none px-6 py-3 rounded-xl text-gray-700 dark:text-gray-200 text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 shadow-lg hover:shadow-glow"
                                    >
                                        Enhance Another Image
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Result; 
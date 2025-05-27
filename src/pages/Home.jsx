import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Result from './Result';

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [enhancedImage, setEnhancedImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setError('File size should be less than 5MB');
                return;
            }
            if (!file.type.startsWith('image/')) {
                setError('Please select an image file (PNG, JPG, or GIF)');
                return;
            }
            setSelectedFile(file);
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
            setError(null);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        
        const file = e.dataTransfer.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setError('File size should be less than 5MB');
                return;
            }
            if (!file.type.startsWith('image/')) {
                setError('Please select an image file (PNG, JPG, or GIF)');
                return;
            }
            setSelectedFile(file);
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
            setError(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setError('Please select an image');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('image', selectedFile);

            const response = await fetch('http://localhost:5000/api/enhance', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Failed to enhance image');
            }

            const data = await response.json();
            if (!data.enhancedImage) {
                throw new Error('No enhanced image received from server');
            }

            setEnhancedImage(data.enhancedImage);
            setShowResult(true);
        } catch (err) {
            setError(err.message || 'An error occurred while enhancing the image');
            console.error('Enhancement error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    // Cleanup preview URL when component unmounts or when preview changes
    const cleanupPreview = () => {
        if (preview) {
            URL.revokeObjectURL(preview);
        }
    };

    if (showResult && enhancedImage) {
        cleanupPreview();
        return <Result enhancedImage={enhancedImage} />;
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
                    <div className="max-w-2xl mx-auto h-full flex flex-col">
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 flex-1">
                            <form onSubmit={handleSubmit} className="h-full flex flex-col space-y-4 sm:space-y-6">
                                <div
                                    className={`flex-1 border-2 border-dashed rounded-xl p-4 sm:p-6 md:p-8 text-center cursor-pointer transition-all duration-300 ${
                                        isDragging
                                            ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 scale-[1.02] shadow-glow'
                                            : 'border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 hover:shadow-glow'
                                    }`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => document.getElementById('fileInput').click()}
                                >
                                    <input
                                        type="file"
                                        id="fileInput"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    {preview ? (
                                        <div className="h-full flex flex-col justify-center space-y-3 sm:space-y-4">
                                            <div className="relative group">
                                                <img
                                                    src={preview}
                                                    alt="Preview"
                                                    className="max-h-40 sm:max-h-48 md:max-h-56 lg:max-h-64 mx-auto rounded-lg shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-glow"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                                    <span className="text-white text-xs sm:text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                                        Click to change
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                                Click or drag to change image
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="h-full flex flex-col justify-center space-y-3 sm:space-y-4">
                                            <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto animate-float">
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                                                <svg
                                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto text-gray-400 dark:text-gray-500 relative z-10"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="space-y-1 sm:space-y-2">
                                                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                                                    Click to upload or drag and drop
                                                </p>
                                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                                    PNG, JPG, GIF up to 5MB
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {error && (
                                    <div className="text-red-500 text-xs sm:text-sm text-center bg-red-50 dark:bg-red-900/20 py-2 px-3 sm:px-4 rounded-lg animate-shimmer bg-gradient-to-r from-red-50 via-red-100 to-red-50 dark:from-red-900/20 dark:via-red-900/30 dark:to-red-900/20">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={!selectedFile || isLoading}
                                    className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl text-white text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                                        !selectedFile || isLoading
                                            ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 shadow-lg hover:shadow-glow-lg animate-gradient'
                                    }`}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center space-x-2">
                                            <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            <span>Enhancing...</span>
                                        </span>
                                    ) : (
                                        'Enhance Image'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Home; 
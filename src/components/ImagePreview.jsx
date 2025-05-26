import Loading from "./Loading";

const ImagePreview = (props) => {
    return (
        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl mx-auto px-4 sm:px-6">
            {/* Original Image */}
            <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <h2 className="text-lg sm:text-xl font-semibold text-center bg-gradient-to-r from-gray-800 to-gray-700 text-white py-2 sm:py-3 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Original Image</span>
                </h2>

                {props.uploaded ? (
                    <div className="relative group">
                        <img
                            src={props.uploaded}
                            alt="Original"
                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-gray-50 to-white">
                        <p className="text-sm sm:text-base text-gray-400">No Image Selected</p>
                    </div>
                )}
            </div>

            {/* Enhanced Image */}
            <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <h2 className="text-lg sm:text-xl font-semibold text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 sm:py-3 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Enhanced Image</span>
                </h2>

                {props.enhanced && !props.loading && (
                    <div className="relative group">
                        <img
                            src={props.enhanced}
                            alt="Enhanced"
                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                )}

                {props.loading ? (
                    <div className="h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                        <Loading />
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-gray-50 to-white">
                        <p className="text-sm sm:text-base text-gray-400">No Enhanced Image</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImagePreview;

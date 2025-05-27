const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className=" h-[40%] w-[40%] bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-2xl mx-auto transform transition-all duration-300 hover:scale-[1.02] border border-gray-100">
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-2 border-dashed border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 text-center hover:border-blue-500 transition-all duration-300 group bg-gradient-to-br from-gray-50 to-white"
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                    accept="image/*"
                />
                <div className="space-y-3 sm:space-y-4">
                    <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 shadow-sm">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                            Click to upload or drag and drop
                        </p>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">
                            PNG, JPG, GIF up to 10MB
                        </p>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default ImageUpload;

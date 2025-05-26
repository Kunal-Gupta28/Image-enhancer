import React from "react";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
                <div className="w-12 h-12 rounded-full border-4 border-blue-100"></div>
                <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin absolute top-0 left-0"></div>
                <div className="w-12 h-12 rounded-full border-4 border-purple-500 border-t-transparent animate-spin absolute top-0 left-0" style={{ animationDelay: '-0.5s' }}></div>
            </div>
            <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-500 animate-pulse">Enhancing your image</p>
                <div className="flex space-x-1">
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;

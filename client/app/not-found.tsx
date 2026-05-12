'use client'

import React from 'react'
import Link from 'next/link'
import { Home, ArrowLeft, Wrench, SearchX } from 'lucide-react'

const NotFound = () => {
    return (
        <div className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-white/50">
            
            {/* --- Decorative Background Blobs --- */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full pointer-events-none -z-10'>
                <div className='absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse'></div>
                <div className='absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse' style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-2xl mx-auto px-4 flex flex-col items-center text-center">
                
                {/* 404 Visual element */}
                <div className="relative flex items-center justify-center mb-8">
                    <h1 className="text-[8rem] md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-300 select-none">
                        404
                    </h1>
                    {/* Floating broken/search icon overlapping the 404 */}
                    <div className="absolute flex items-center justify-center size-24 md:size-32 bg-white rounded-full shadow-2xl shadow-green-900/10 border border-gray-50 animate-bounce" style={{ animationDuration: '3s' }}>
                        <SearchX className="size-10 md:size-14 text-orange-500" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-6 text-orange-600 font-medium text-sm">
                    <Wrench className="size-4" />
                    <span>Looks like this page needs a repair!</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                    Oops! Page Not Found
                </h2>
                
                <p className="text-gray-500 text-lg md:text-xl max-w-md mx-auto mb-10 leading-relaxed">
                    We searched everywhere, but we couldn't find the page you're looking for. Let's get you back on track.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    {/* Primary Back to Home Button */}
                    <Link 
                        href="/" 
                        className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-green-900/20 hover:shadow-green-900/40 hover:-translate-y-1 active:scale-95"
                    >
                        <Home className="size-5" />
                        <span>Back to Homepage</span>
                    </Link>

                    {/* Secondary Go Back Button */}
                    <button 
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 active:scale-95"
                    >
                        <ArrowLeft className="size-5" />
                        <span>Go Back</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default NotFound
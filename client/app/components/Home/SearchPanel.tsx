'use client'

import { MapPin, Search, Crosshair, Smartphone, ArrowRight, Sparkles } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const searchCategories = [
    "Plumber",
    "Electrician",
    "AC Repair",
    "Home Cleaning",
    "Pest Control",
    "Carpenter",
    "Appliance Repair",
    "Packers & Movers",
    "Salon at Home",
    "Home Tutor",
    "CCTV Installation",
    "Interior Designer"
];

const SearchPanel = () => {
    const [location, setLocation] = useState("Patna, Bihar")
    const [serviceQuery, setServiceQuery] = useState("")
    const [activeIndex, setActiveIndex] = useState(0)

    // Handle Dynamic Text Animation (changes every 2.5 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % searchCategories.length)
        }, 2500) // Slightly increased time so user can read it comfortably
        return () => clearInterval(interval)
    }, [])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Searching for:", serviceQuery || searchCategories[activeIndex], "in", location)
        // Add your search routing logic here
    }

    return (
        <div className='relative w-full overflow-hidden bg-white/50 py-16 md:py-24'>
            
            {/* --- Decorative Background Blobs for Premium Feel --- */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none -z-10'>
                <div className='absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-green-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-pulse'></div>
                <div className='absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse' style={{ animationDelay: '2s' }}></div>
            </div>

            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                
                {/* Top Section: Heading (Left) & App Button (Right) */}
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12'>

                    {/* Left: Dynamic Heading */}
                    <div className='text-left flex-1 relative z-10'>
                        {/* Trust Badge */}
                        <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mb-6'>
                            <Sparkles className='size-4 text-green-600' />
                            <span className='text-sm font-semibold text-green-800 tracking-wide'>India's #1 Local Service App</span>
                        </div>

                        <h1 className='text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.15]'>
                            Find trusted <br className="hidden sm:block lg:hidden" />
                            {/* Animated changing text with fixed minimum width to prevent layout jump */}
                            <span className='inline-block align-bottom lg:pl-3 text-green-700 min-w-[280px] sm:min-w-[350px] lg:min-w-[450px]'>
                                <div className="relative h-[1.2em] w-full overflow-hidden">
                                    {searchCategories.map((item, index) => (
                                        <span
                                            key={index}
                                            className={`absolute left-0 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                                index === activeIndex
                                                    ? "translate-y-0 opacity-100"
                                                    : index < activeIndex 
                                                        ? "-translate-y-full opacity-0" // Move up and fade
                                                        : "translate-y-full opacity-0"  // Come from bottom
                                            }`}
                                        >
                                            <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 drop-shadow-sm'>
                                                {item}
                                            </span>
                                        </span>
                                    ))}
                                </div>
                            </span>
                        </h1>
                    </div>

                    {/* Right: Download App Button */}
                    <div className='shrink-0 w-full sm:w-auto relative z-10'>
                        <button className='group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/80 backdrop-blur-md border border-gray-200 hover:border-orange-300 hover:bg-orange-50 text-gray-800 px-7 py-4 rounded-2xl font-bold transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1'>
                            <div className='bg-orange-100 p-2 rounded-xl group-hover:scale-110 transition-transform'>
                                <Smartphone className='size-5 text-orange-600 group-hover:-rotate-12 transition-transform' />
                            </div>
                            <span>Get the App</span>
                            <ArrowRight className='size-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1.5 transition-all' />
                        </button>
                    </div>
                </div>

                {/* Bottom Section: Search Functionality */}
                <form
                    onSubmit={handleSearch}
                    className='w-full bg-white/95 backdrop-blur-xl rounded-[2rem] md:rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-2.5 md:p-3 flex flex-col md:flex-row items-center gap-3 md:gap-0 transition-all hover:shadow-[0_20px_40px_-15px_rgba(22,163,74,0.15)] focus-within:ring-4 focus-within:ring-green-500/20 relative z-20'
                >
                    {/* Location Input */}
                    <div className='w-full md:w-[35%] lg:w-[30%] flex items-center px-5 py-4 md:py-3 md:border-r border-gray-200 bg-gray-50/80 md:bg-transparent rounded-2xl md:rounded-none group hover:bg-gray-100/50 transition-colors'>
                        <MapPin className='size-5 text-orange-500 shrink-0' />
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder='Select Location'
                            className='w-full bg-transparent border-none outline-none px-4 text-gray-800 placeholder-gray-400 font-semibold text-[15px]'
                        />
                        <button
                            type="button"
                            className='text-gray-400 hover:text-green-600 hover:bg-green-100 p-2 rounded-full transition-all active:scale-95'
                            title="Detect my location"
                        >
                            <Crosshair className='size-4.5' />
                        </button>
                    </div>

                    {/* Service Search Input */}
                    <div className='w-full md:w-[65%] lg:w-[70%] flex items-center px-5 py-4 md:py-3 bg-gray-50/80 md:bg-transparent rounded-2xl md:rounded-none relative group hover:bg-gray-100/50 transition-colors'>
                        <Search className='size-5 text-gray-400 shrink-0 hidden md:block z-10' />

                        {/* Fake Animated Placeholder - synced with heading */}
                        {!serviceQuery && (
                            <div className="absolute left-5 md:left-14 right-4 top-0 bottom-0 flex items-center overflow-hidden pointer-events-none select-none z-0">
                                <span className="relative w-full h-[1.5em] overflow-hidden">
                                    {searchCategories.map((item, index) => (
                                        <span
                                            key={index}
                                            className={`absolute left-0 text-gray-400/80 font-medium whitespace-nowrap transition-all duration-500 ease-in-out text-[15px] ${
                                                index === activeIndex
                                                    ? "translate-y-0 opacity-100"
                                                    : index < activeIndex 
                                                        ? "-translate-y-full opacity-0"
                                                        : "translate-y-full opacity-0"
                                            }`}
                                        >
                                            Search for {item}...
                                        </span>
                                    ))}
                                </span>
                            </div>
                        )}

                        <input
                            type="text"
                            value={serviceQuery}
                            onChange={(e) => setServiceQuery(e.target.value)}
                            className='w-full bg-transparent border-none outline-none pl-0 md:pl-4 pr-3 text-gray-800 font-medium text-[15px] relative z-10'
                        />
                    </div>

                    {/* Search Button */}
                    <button
                        type="submit"
                        className='w-full md:w-auto shrink-0 bg-green-900 hover:bg-green-800 text-white rounded-2xl md:rounded-full px-10 py-4 md:py-4 flex items-center justify-center gap-2 font-bold transition-all duration-300 active:scale-95 shadow-lg shadow-green-900/30 hover:shadow-green-900/40'
                    >
                        <Search className='size-5 md:hidden' />
                        <span className='md:block text-[15px] tracking-wide'>Search</span>
                    </button>
                </form>

            </div>
        </div>
    )
}

export default SearchPanel
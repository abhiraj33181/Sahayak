'use client'

import { MapPin, Search, Crosshair, Smartphone, ArrowRight } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const searchCategories = [
    "Sahayak",
    "Real Estate Agent",
    "Plumber",
    "Electrician",
    "AC Technician",
    "Pest Controller"
]

const SearchPanel = () => {
    const [location, setLocation] = useState("Patna, Bihar")
    const [serviceQuery, setServiceQuery] = useState("")
    const [activeIndex, setActiveIndex] = useState(0)

    // Handle Dynamic Text Animation (changes every 2.5 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % searchCategories.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Searching for:", serviceQuery || searchCategories[activeIndex], "in", location)
        // Add your search routing logic here
    }

    return (
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
            
            {/* Top Section: Heading (Left) & App Button (Right) */}
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-10'>
                
                {/* Left: Dynamic Heading */}
                <div className='text-left flex-1'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]'>
                        Find the perfect <br className="hidden sm:block lg:hidden" />
                        {/* Animated changing text */}
                        <span className='inline-flex overflow-hidden h-[1.2em] align-bottom pl-2 sm:pl-0 lg:pl-3'>
                            <span 
                                key={activeIndex} 
                                className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 animate-slide-up-fade block'
                            >
                                {searchCategories[activeIndex]}
                            </span>
                        </span>
                    </h1>
                </div>

                {/* Right: Download App Button */}
                <div className='shrink-0 w-full sm:w-auto'>
                    <button className='group w-full sm:w-auto flex items-center justify-center gap-3 bg-orange-50 border border-orange-200 hover:border-orange-400 text-orange-700 px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-orange-500/10 hover:-translate-y-0.5'>
                        <div className='bg-orange-100 p-1.5 rounded-lg'>
                            <Smartphone className='size-5 text-orange-600 group-hover:-rotate-12 transition-transform' />
                        </div>
                        Download App
                        <ArrowRight className='size-4 text-orange-600 group-hover:translate-x-1.5 transition-transform' />
                    </button>
                </div>
            </div>

            {/* Bottom Section: Search Functionality */}
            {/* Added focus-within:ring for premium form glow effect */}
            <form 
                onSubmit={handleSearch}
                className='w-full bg-white rounded-3xl md:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200/80 p-2 md:p-2.5 flex flex-col md:flex-row items-center gap-3 md:gap-0 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus-within:ring-4 focus-within:ring-green-500/10 relative z-10'
            >
                {/* Location Input */}
                <div className='w-full md:w-[35%] lg:w-[30%] flex items-center px-4 py-3.5 md:py-2 md:border-r border-gray-200 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none group hover:bg-gray-50 transition-colors'>
                    <MapPin className='size-5 text-orange-500 shrink-0' />
                    <input 
                        type="text" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder='Select Location' 
                        className='w-full bg-transparent border-none outline-none px-3 text-gray-800 placeholder-gray-400 font-semibold'
                    />
                    <button 
                        type="button" 
                        className='text-gray-400 hover:text-green-600 hover:bg-green-50 p-1.5 rounded-full transition-all'
                        title="Detect my location"
                    >
                        <Crosshair className='size-4.5' />
                    </button>
                </div>

                {/* Service Search Input with Animated Placeholder */}
                <div className='w-full md:w-[65%] lg:w-[70%] flex items-center px-4 py-3.5 md:py-2 bg-gray-50 md:bg-transparent rounded-2xl md:rounded-none relative group hover:bg-gray-50 transition-colors h-14 md:h-auto'>
                    <Search className='size-5 text-gray-400 shrink-0 hidden md:block z-10' />
                    
                    {/* Fake Animated Placeholder */}
                    {!serviceQuery && (
                        <div className="absolute left-4 md:left-12 right-4 top-0 bottom-0 flex items-center overflow-hidden pointer-events-none select-none z-0">
                            <span 
                                key={activeIndex} 
                                className="text-gray-400/80 font-medium animate-slide-up-fade whitespace-nowrap"
                            >
                                Search for {searchCategories[activeIndex]}...
                            </span>
                        </div>
                    )}

                    <input 
                        type="text" 
                        value={serviceQuery}
                        onChange={(e) => setServiceQuery(e.target.value)}
                        className='w-full bg-transparent border-none outline-none pl-0 md:pl-3 pr-3 text-gray-800 font-medium relative z-10'
                    />
                </div>

                {/* Search Button */}
                <button 
                    type="submit"
                    className='w-full md:w-auto shrink-0 bg-green-900 hover:bg-green-800 text-white rounded-2xl md:rounded-full px-10 py-4 md:py-3.5 flex items-center justify-center gap-2 font-bold transition-all duration-300 active:scale-95 shadow-md shadow-green-900/20'
                >
                    <Search className='size-5 md:hidden' />
                    <span className='md:block'>Searches</span>
                </button>
            </form>
            
        </div>
    )
}

export default SearchPanel
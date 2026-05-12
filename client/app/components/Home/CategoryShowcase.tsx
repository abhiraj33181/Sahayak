'use client'

import React from 'react'
import { 
    Briefcase, Wrench, Building2, Stethoscope, HeartHandshake, 
    Utensils, Hotel, Sparkles, Sofa, GraduationCap, 
    Key, Cross, HardHat, PawPrint, Home, 
    Toolbox, Activity, Banknote, Calendar, Car, 
    Truck, Package, Menu, ChevronRight
} from 'lucide-react'

// Featured Cards Data (Replaced Banner with these)
const featuredCards = [
    {
        id: 1,
        title: "B2B",
        subtitle: "Quick Quotes",
        bgClass: "bg-gradient-to-br from-blue-500 to-blue-700",
        // Replace this with real person PNG path like '/images/b2b-guy.png'
        imgFallback: <Briefcase className="size-16 text-white/20 absolute -bottom-2 -right-2" />
    },
    {
        id: 2,
        title: "Repairs & Services",
        subtitle: "Get Nearest Vendor",
        bgClass: "bg-gradient-to-br from-indigo-600 to-indigo-800",
        imgFallback: <Wrench className="size-16 text-white/20 absolute -bottom-2 -right-2" />
    },
    {
        id: 3,
        title: "Real Estate",
        subtitle: "Finest Agents",
        bgClass: "bg-gradient-to-br from-purple-500 to-purple-700",
        imgFallback: <Building2 className="size-16 text-white/20 absolute -bottom-2 -right-2" />
    },
    {
        id: 4,
        title: "Doctors",
        subtitle: "Book Now",
        bgClass: "bg-gradient-to-br from-teal-500 to-teal-700",
        imgFallback: <Stethoscope className="size-16 text-white/20 absolute -bottom-2 -right-2" />
    },
    {
        id: 5,
        title: "Wedding",
        subtitle: "Top Planners",
        bgClass: "bg-gradient-to-br from-pink-500 to-rose-600",
        imgFallback: <HeartHandshake className="size-16 text-white/20 absolute -bottom-2 -right-2" />
    }
]

// Small Icons Grid Data
const gridCategories = [
    { name: "Restaurants", icon: Utensils, color: "text-orange-500" },
    { name: "Hotels", icon: Hotel, color: "text-blue-500" },
    { name: "Beauty Spa", icon: Sparkles, color: "text-pink-500" },
    { name: "Home Decor", icon: Sofa, color: "text-teal-500" },
    { name: "Education", icon: GraduationCap, color: "text-green-600" },
    { name: "Rent & Hire", icon: Key, color: "text-indigo-500" },
    { name: "Hospitals", icon: Cross, color: "text-red-500" },
    { name: "Contractors", icon: HardHat, color: "text-yellow-600" },
    { name: "Pet Shops", icon: PawPrint, color: "text-amber-500" },
    { name: "PG/Hostels", icon: Home, color: "text-cyan-600" },
    { name: "Estate Agent", icon: Toolbox, color: "text-purple-500" },
    { name: "Dentists", icon: Activity, color: "text-sky-500" },
    { name: "Loans", icon: Banknote, color: "text-emerald-500" },
    { name: "Events", icon: Calendar, color: "text-rose-500" },
    { name: "Driving", icon: Car, color: "text-blue-600" },
    { name: "Movers", icon: Truck, color: "text-orange-600" },
    { name: "Courier", icon: Package, color: "text-stone-600" },
    { name: "View All", icon: Menu, color: "text-white", bg: "bg-blue-600" },
]

const CategoryShowcase = () => {
    return (
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            
            {/* --- TOP ROW: Featured Vertical Cards --- */}
            {/* Mobile: Horizontal Scroll (Snap), Desktop: Grid */}
            <div className='flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 lg:grid-cols-5 pb-6 hide-scrollbar'>
                {featuredCards.map((card) => (
                    <div 
                        key={card.id} 
                        className={`relative min-w-[140px] w-full h-[180px] md:h-[200px] lg:h-[220px] rounded-2xl p-4 flex flex-col justify-between cursor-pointer overflow-hidden snap-start group shadow-sm hover:shadow-lg transition-all duration-300 ${card.bgClass}`}
                    >
                        {/* Text Content */}
                        <div className='relative z-10'>
                            <h3 className='text-white font-bold text-lg leading-tight mb-1 group-hover:scale-105 transition-transform origin-top-left'>
                                {card.title}
                            </h3>
                            <p className='text-white/80 text-xs font-medium'>
                                {card.subtitle}
                            </p>
                        </div>

                        {/* Bottom Arrow Button */}
                        <div className='relative z-10 bg-black/20 w-fit p-1 rounded-md backdrop-blur-sm group-hover:bg-black/40 transition-colors'>
                            <ChevronRight className='size-4 text-white' />
                        </div>

                        {/* Image / Fallback Icon Positioned at Bottom Right */}
                        {/* To add real images: replace imgFallback with <img src="/path.png" className="absolute bottom-0 right-0 h-[80%] object-contain" /> */}
                        {card.imgFallback}

                        {/* Hover Overlay Gradient */}
                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-0'></div>
                    </div>
                ))}
            </div>

            {/* --- BOTTOM ROW: Small Category Grid --- */}
            <div className='mt-6 pt-6 border-t border-gray-100'>
                <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-x-2 gap-y-6'>
                    {gridCategories.map((cat, idx) => (
                        <div 
                            key={idx} 
                            className='flex flex-col items-center justify-start gap-2 cursor-pointer group'
                        >
                            {/* Icon Box */}
                            <div className={`size-14 sm:size-16 rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-gray-300 transition-all duration-300 bg-white ${cat.bg ? cat.bg : ''}`}>
                                <cat.icon className={`size-6 sm:size-7 ${cat.color} group-hover:scale-110 transition-transform duration-300`} />
                            </div>
                            
                            {/* Category Text */}
                            <span className='text-[10px] sm:text-xs text-center font-medium text-gray-700 leading-tight group-hover:text-green-700 transition-colors px-1'>
                                {cat.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom CSS for hiding scrollbar but keeping functionality */}
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    )
}

export default CategoryShowcase
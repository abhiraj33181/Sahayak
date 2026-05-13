'use client'

import React from 'react'

// 1. Top Featured Cards Data
const featuredCards = [
    {
        id: 1,
        image: "/images/hero/1.png", // Property & Rent
        alt: "Property and Rent Category"
    },
    {
        id: 2,
        image: "/images/hero/2.png", // Events & Wedding
        alt: "Events and Wedding Category"
    },
    {
        id: 3,
        image: "/images/hero/3.png", // Home Services
        alt: "Home Services Category"
    },
    {
        id: 4,
        image: "/images/hero/4.png", // Health & Medical
        alt: "Health and Medical Category"
    },
    {
        id: 5,
        image: "/images/hero/5.png", // Medical 2
        alt: "Additional Category"
    }
]

// 2. Sub-categories (16 items + 1 View All)
export const categories = [
    { name: "Plumber", src: "/images/hero/icons/plumber.png", link: "/services/plumber" },
    { name: "Electrician", src: "/images/hero/icons/electrician.png", link: "/services/electrician" },
    { name: "AC Repair", src: "/images/hero/icons/ac-repair.png", link: "/services/ac-repair" },
    { name: "Home Cleaning", src: "/images/hero/icons/home-cleaning.png", link: "/services/home-cleaning" },
    { name: "Pest Control", src: "/images/hero/icons/pest-control.png", link: "/services/pest-control" },
    { name: "RO Service", src: "/images/hero/icons/ro-service.png", link: "/services/ro-service" },
    { name: "Carpenters", src: "/images/hero/icons/carpenters.png", link: "/services/carpenter" },
    { name: "Groccery", src: "/images/hero/icons/grocerry.png", link: "/services/grocerry" },
    { name: "Painters", src: "/images/hero/icons/painters.png", link: "/services/painter" },
    { name: "Doctors", src: "/images/hero/icons/doctors.png", link: "/services/doctors" },
    { name: "Hospitals", src: "/images/hero/icons/hospitals.png", link: "/services/hospitals" },
    { name: "Pharmacy", src: "/images/hero/icons/pharmacy.png", link: "/services/pharmacy" },
    { name: "Movers & Packers", src: "/images/hero/icons/mover-packer.png", link: "/services/movers-packers" },
    { name: "Rent & Hire", src: "/images/hero/icons/rent-hire.png", link: "/services/rent-hire" },
    { name: "PG / Hostels", src: "/images/hero/icons/pg.png", link: "/services/pg-hostels" },
    { name: "Real Estate Agent", src: "/images/hero/icons/real-estate.png", link: "/services/real-estate" },
    { name: "Contractors", src: "/images/hero/icons/contractors.png", link: "/services/contractors" },
    { name: "View All", src: "/images/hero/icons/view-all.png", link: "/services" },
];

const CategoryShowcase = () => {
    return (
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

            {/* --- TOP ROW: Featured Image Cards --- */}
            <div className='flex overflow-x-auto snap-x snap-mandatory gap-5 md:grid md:grid-cols-3 lg:grid-cols-5 pb-8 hide-scrollbar pt-4 px-2'>
                {featuredCards.map((card) => (
                    <div
                        key={card.id}
                        className="relative min-w-[220px] w-full h-[280px] md:h-[300px] lg:h-[320px] rounded-[24px] cursor-pointer overflow-hidden snap-start group shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white"
                    >
                        <img
                            src={card.image}
                            alt={card.alt}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10 pointer-events-none"></div>
                    </div>
                ))}
            </div>

            {/* --- BOTTOM ROW: Sub-Category Grid (Your Custom Images) --- */}
            <div className='mt-4 pt-8 border-t border-gray-100'>
                {/* Responsive grid: 3 items on mobile, 4 on small screens, 6 on tablet, 8/9 on desktop */}
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-3 sm:gap-4 justify-items-center'>
                    {categories.map((cat, idx) => (
                        <a
                            key={idx}
                            href={cat.link}
                            className='relative block w-full max-w-[85px] sm:max-w-[105px] rounded-[18px] overflow-hidden bg-white shadow-sm border border-gray-100 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                        >
                            {/* Smooth zoom-in on image hover */}
                            <img
                                src={cat.src}
                                alt={cat.name}
                                className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105'
                            />

                            {/* Subtitle black tint overlay for click interaction */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none z-10"></div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Custom CSS for hiding scrollbar */}
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
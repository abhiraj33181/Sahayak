'use client'

import {
    ChartNoAxesCombined,
    ChevronDown,
    LayoutDashboard,
    LogOut,
    Megaphone,
    Menu,
    Search,
    Shield,
    User,
    X
} from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AppContext'

const searchPlaceholders = [
    "Search for electricians near you",
    "Find plumbers in your area",
    "Book home cleaning services",
    "Search for AC repair",
    "Find interior designers",
    "Search for tutors near you",
];

const Navbar = () => {
    let {user, logout} = useAuth();
    const router = useRouter();

    const [userMenuOpen, setUserMenuOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    const [isScrolled, setIsScrolled] = useState(false)
    const [placeholderIndex, setPlaceholderIndex] = useState(0)

    const handleLogout = () => {
        setMobileMenuOpen(false)
        setUserMenuOpen(false)
        logout()
    }

    // Handle Scroll Visibility for Search
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle Dynamic Placeholder Text
    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen])


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
            setSearchQuery("")
            setMobileMenuOpen(false)
        }
    }

    return (
        <nav className='sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4'>

                {/* Left: Logo */}
                <Link href='/' className='shrink-0 h-12 md:h-14 flex items-center'>
                    <img
                        src="/images/logo.png" /* Yahan apne Sahayak logo ka exact path daal dena */
                        alt="Sahayak Logo"
                        className='h-full w-auto object-contain drop-shadow-sm'
                    />
                </Link>

                {/* Center: Search Bar (Desktop) */}
                <div className='flex-1 flex justify-center'>
                    <form
                        onSubmit={handleSearch}
                        className={`hidden md:flex w-full max-w-lg relative transition-all duration-500 ease-in-out ${isScrolled
                            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                            }`}
                    >
                        <Search className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 z-10' />

                        {!searchQuery && (
                            <div className="absolute left-10 right-4 top-0 bottom-0 flex items-center overflow-hidden pointer-events-none select-none">
                                <span
                                    key={placeholderIndex} // Key change hone par animation restart hoti hai
                                    className="text-sm text-gray-500 animate-slide-up-fade whitespace-nowrap"
                                >
                                    {searchPlaceholders[placeholderIndex]}
                                </span>
                            </div>
                        )}

                        <input
                            type="text"
                            /* placeholder yahan se hata diya hai */
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full pl-10 pr-4 py-2 bg-gray-100 hover:bg-gray-200/60 border-transparent focus:border-green-500 rounded-full text-sm outline-none transition-all duration-300 shadow-sm focus:shadow-md'
                        />
                        <button type="submit" className="hidden">Search</button>
                    </form>
                </div>

                {/* Right: Desktop Navigation & Profile */}
                <div className='flex items-center gap-4 lg:gap-6'>

                    {/* Desktop Links */}
                    <div className='hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600'>
                        <Link href='/' className='hover:text-green-600 transition-colors'>
                            Home
                        </Link>
                        <Link href='/' className='flex items-center gap-1.5 hover:text-green-600 transition-colors'>
                            <Megaphone size={16} />
                            Advertise
                        </Link>
                        <Link href='/' className='flex items-center gap-1.5 hover:text-green-600 transition-colors relative group'>
                            <ChartNoAxesCombined size={16} />
                            Free Listing
                            <span className='absolute -top-3.5 -right-2 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full group-hover:bg-red-600 transition-colors shadow-sm'>
                                BUSINESS
                            </span>
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className='hidden lg:block h-6 w-px bg-gray-200'></div>

                    {/* User Profile / Login */}
                    <div className='relative'>
                        {user ? (
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className='flex items-center gap-2 p-1 pr-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-green-500/20 outline-none'
                            >
                                <div className='size-8 rounded-full bg-green-900 text-white flex items-center justify-center font-semibold text-sm shadow-inner'>
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <ChevronDown size={14} className={`text-gray-500 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
                            </button>
                        ) : (
                            <Link
                                href='/login'
                                className='hidden md:flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-green-900 rounded-full hover:bg-green-800 transition-all shadow-sm hover:shadow-md'
                            >
                                <User size={16} /> Sign In
                            </Link>
                        )}

                        {/* User Dropdown Menu */}
                        {userMenuOpen && (
                            <>
                                <div className='fixed inset-0 z-40' onClick={() => setUserMenuOpen(false)} />
                                <div className='absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 origin-top-right animate-in fade-in zoom-in-95 duration-200'>
                                    <div className='px-4 py-3 border-b border-gray-100 bg-gray-50/50 rounded-t-xl'>
                                        <p className='text-sm font-semibold text-gray-900 truncate'>{user?.name}</p>
                                        <p className='text-xs text-gray-500 truncate'>{user?.email}</p>
                                    </div>
                                    <div className='p-1'>
                                        <Link href='/dashboard' onClick={() => setUserMenuOpen(false)} className='flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors'>
                                            <LayoutDashboard size={16} className="text-gray-400" />
                                            Dashboard
                                        </Link>
                                        {user?.isAdmin && (
                                            <Link href='/admin/dashboard' onClick={() => setUserMenuOpen(false)} className='flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-green-700 rounded-lg hover:bg-green-50 transition-colors'>
                                                <Shield size={16} className="text-green-600" />
                                                Admin Panel
                                            </Link>
                                        )}
                                    </div>
                                    <div className='p-1 border-t border-gray-100'>
                                        <button onClick={handleLogout} className='flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 w-full transition-colors'>
                                            <LogOut size={16} className="text-red-500" />
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className='lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`lg:hidden fixed inset-x-0 top-16 bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 max-h-screen py-4' : 'opacity-0 max-h-0 py-0 overflow-hidden pointer-events-none'}`}>
                <div className='px-4 flex flex-col gap-4'>

                    {/* Mobile Search - Always visible in drawer */}
                    <form onSubmit={handleSearch} className='relative w-full'>
                        <Search className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 z-10' />

                        {!searchQuery && (
                            <div className="absolute left-10 right-4 top-0 bottom-0 flex items-center overflow-hidden pointer-events-none select-none">
                                <span
                                    key={placeholderIndex}
                                    className="text-sm text-gray-500 animate-slide-up-fade whitespace-nowrap"
                                >
                                    {searchPlaceholders[placeholderIndex]}
                                </span>
                            </div>
                        )}

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full pl-10 pr-4 py-2.5 bg-gray-100 focus:bg-white border border-transparent focus:border-green-500 rounded-xl text-sm outline-none transition-all'
                        />
                    </form>

                    <div className='flex flex-col gap-1'>
                        <Link href='/' className='flex items-center gap-3 px-3 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50'>
                            Home
                        </Link>
                        <Link href='/' className='flex items-center gap-3 px-3 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50'>
                            <Megaphone size={18} className="text-gray-400" />
                            Advertise
                        </Link>
                        <Link href='/' className='flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50'>
                            <div className='flex items-center gap-3'>
                                <ChartNoAxesCombined size={18} className="text-gray-400" />
                                Free Listing
                            </div>
                            <span className='bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full'>BUSINESS</span>
                        </Link>
                    </div>

                    {!user && (
                        <div className='pt-4 border-t border-gray-100'>
                            <Link href='/login' className='flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-green-900 rounded-xl'>
                                <User size={18} /> Sign In
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar